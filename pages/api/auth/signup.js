import { connectDatabase } from "../../../helpers/db-util";
import mongoose from "mongoose";
import { hashPassword } from "../../../helpers/auth-util";
import User from "../../../models/User";

async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(422).json({
      message: "Nieprawidłowa metoda żądania (wymagany POST)",
    });
    return;
  }

  const data = req.body;
  const { email, password, username } = data;

  if (!email || !password || !username) {
    res.status(422).json({
      message: "Email, hasło oraz nazwa użytkownika są wymagane",
    });
    return;
  }

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }

  if (password.length < 8) {
    res
      .status(422)
      .json({ message: "Hasło musi mieć co najmniej 8 znaków" });
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);
  if (!isValidEmail) {
    res.status(422).json({ message: "Podaj poprawny adres e-mail" });
    return;
  }

  if (username.length > 30) {
    res
      .status(422)
      .json({ message: "Nazwa użytkownika nie może być dłuższa niż 30 znaków" });
    return;
  }

  try {
    const emailIsUsed = await User.findOne({ email: email });
    if (emailIsUsed) {
      res.status(422).json({ message: "Podany adres e-mail jest już zajęty" });
      mongoose.connection.close();
      return;
    }

    const hashedPassword = await hashPassword(password);
    const user = new User({
      email: email,
      password: hashedPassword,
      username: username,
    });
    await user.save();
    res.status(201).json({ message: "Użytkownik został pomyślnie utworzony" });
  } catch (error) {
    res.status(422).json({ message: "Nie udało się utworzyć użytkownika" });
  }

  mongoose.connection.close();
}

export default handler;
