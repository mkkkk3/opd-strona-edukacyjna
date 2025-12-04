import React, { useState, useRef, useContext } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import NotificationContext from "../../store/notification-context";
import Image from "next/image";
import { useIsDesktop } from "../../helpers/helpers";

async function createUser(email, password, username) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password, username }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Wystąpił błąd podczas rejestracji.");
  }

  if (response.ok) {
    await signIn("credentials", {
      email: email,
      password: password,
    });
  }

  return data;
}

function AuthForm() {
  const notificationCtx = useContext(NotificationContext);
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const usernameInputRef = useRef();
  const router = useRouter();
  const isDesktop = useIsDesktop(1280);

  function switchAuthModeHandler() {
    setIsLogin((prev) => !prev);
  }

  async function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
      notificationCtx.showNotification({
        title: "Logowanie...",
        message: "Wysyłanie danych logowania do weryfikacji.",
        status: "pending",
      });

      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });

      if (result.error) {
        notificationCtx.showNotification({
          title: "Błąd!",
          message: "Nieprawidłowy e-mail lub hasło.",
          status: "error",
        });
        return;
      }

      notificationCtx.showNotification({
        title: "Sukces!",
        message: "Zalogowano pomyślnie.",
        status: "success",
      });

      router.replace("/");
    } else {
      const enteredUsername = usernameInputRef.current.value;

      notificationCtx.showNotification({
        title: "Rejestracja...",
        message: "Wysyłanie danych rejestracyjnych do weryfikacji.",
        status: "pending",
      });

      try {
        await createUser(enteredEmail, enteredPassword, enteredUsername);

        notificationCtx.showNotification({
          title: "Sukces!",
          message: "Konto zostało utworzone i zalogowano automatycznie.",
          status: "success",
        });
      } catch (error) {
        notificationCtx.showNotification({
          title: "Błąd!",
          message: error.message || "Nie udało się utworzyć konta.",
          status: "error",
        });
      }
    }
  }

  return (
    <React.Fragment>
      <div className="w-full h-[40rem] relative bg-page1 font-typewriter">
        <div className="absolute z-10 w-full h-full">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-full h-full border-pageMenu flex justify-center items-center relative">
              {isDesktop && (
                <div className="absolute w-[20rem] h-[20rem] bottom-64 right-20">
                  <Image
                    src="/bird.gif"
                    alt="Image"
                    placeholder="blur"
                    blurDataURL="/bird.gif"
                    width={355}
                    height={261}
                    className="scale-[60%] h-full w-[26rem] object-cover"
                  />
                </div>
              )}
              <form
                autoComplete="off"
                onSubmit={submitHandler}
                className="mx-6 w-full sm:w-[70%] md:w-[60%] lg:w-[40%] h-[30rem] bg-page2 border-4 border-pageMenu"
              >
                <div className="w-full h-20 border-b-4 border-pageMenu flex justify-center items-center bg-page4">
                  <span className="font-extrabold text-3xl tracking-wider">
                    OPD
                  </span>
                </div>

                <div className="flex items-center justify-center">
                  <span className="mx-4 py-4 tracking-tight text-xs sm:text-sm text-pageMenu font-page">
                    {isLogin
                      ? "Wprowadź e-mail i hasło, aby się zalogować"
                      : "Wprowadź nazwę użytkownika, e-mail i hasło, aby się zarejestrować"}
                  </span>
                </div>

                <div className="flex justify-center saturate-[0.2] hue-rotate-[120deg] brightness-50">
                  <TextField
                    sx={{ margin: "10px 20px", width: "100%" }}
                    required
                    label="E-mail"
                    inputRef={emailInputRef}
                  />
                </div>

                {!isLogin && (
                  <div className="flex justify-center saturate-[0.2] hue-rotate-[120deg] brightness-50">
                    <TextField
                      sx={{ margin: "10px 20px", width: "100%" }}
                      required
                      label="Nazwa użytkownika"
                      inputRef={usernameInputRef}
                    />
                  </div>
                )}

                <div className="flex justify-center saturate-[0.2] hue-rotate-[120deg] brightness-50">
                  <TextField
                    sx={{ margin: "10px 20px", width: "100%" }}
                    required
                    label="Hasło"
                    type="password"
                    inputRef={passwordInputRef}
                  />
                </div>

                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="my-3 sm:my-5 hover:scale-105 hover:drop-shadow-md duration-75 tracking-tight text-pageMenu text-xl font-extrabold font-page shadow-xl w-1/2 sm:w-1/3 h-1/2 bg-page4 rounded-lg border-4 border-pageMenu"
                  >
                    {isLogin ? "Zaloguj" : "Zarejestruj"}
                  </button>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    className="tracking-tight text-xs sm:text-sm text-pageMenu font-page hover:underline"
                    type="button"
                    onClick={switchAuthModeHandler}
                  >
                    {isLogin
                      ? "Stwórz nowe konto"
                      : "Zaloguj się na istniejące konto"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="opacity-100 brightness-200 absolute w-full h-full bg-grain"></div>
        <div className="opacity-100 brightness-200 absolute w-full h-full bg-grain"></div>
      </div>
    </React.Fragment>
  );
}

export default AuthForm;
