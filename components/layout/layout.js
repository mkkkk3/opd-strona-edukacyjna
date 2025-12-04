import React, { useContext } from "react";
import MainNavigation from "./main-navigation";
import NotificationContext from "../../store/notification-context";
import Notification from "../ui/notification";
import Footer from "./footer";
import Link from "next/link";
import { useSession } from "next-auth/react";

const profileSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="800"
    height="800"
    viewBox="0 0 20 20"
    className="w-full h-full p-2"
  >
    <g id="SVGRepo_iconCarrier">
      <g
        id="Page-1"
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
      >
        <g
          id="Dribbble-Light-Preview"
          fill="#1a1a1a"
          transform="translate(-380 -2119)"
        >
          <g id="icons" transform="translate(56 160)">
            <path
              id="profile_round-[#1346]"
              d="M338.083 1965c0-2.206-1.831-4-4.083-4s-4.083 1.794-4.083 4 1.831 4 4.083 4 4.083-1.794 4.083-4m3.863 14h-1.821a1.01 1.01 0 0 1-1.021-1c0-.552.457-1 1.02-1h.439c.706 0 1.228-.697.96-1.338-1.236-2.964-4.14-4.662-7.523-4.662s-6.287 1.698-7.523 4.662c-.268.641.254 1.338.96 1.338h.438c.564 0 1.021.448 1.021 1s-.457 1-1.02 1h-1.822c-1.276 0-2.28-1.143-2.01-2.364.743-3.359 3.064-5.838 6.12-6.963-1.394-1.099-2.289-2.783-2.289-4.673 0-3.551 3.148-6.381 6.859-5.958 2.689.306 4.916 2.405 5.32 5.028.346 2.261-.598 4.326-2.218 5.603 3.056 1.125 5.377 3.604 6.12 6.963.27 1.221-.734 2.364-2.01 2.364m-4.884-1c0 .552-.457 1-1.02 1h-4.084a1.01 1.01 0 0 1-1.02-1c0-.552.457-1 1.02-1h4.084c.563 0 1.02.448 1.02 1"
            ></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  const { data: session, status } = useSession();

  return (
    <React.Fragment>
      <MainNavigation />
      <main className="font-body relative">{props.children}</main>

      {status === "authenticated" && (
        <Link href="/profil">
          <div className="fixed bottom-12 right-12 w-10 h-10 bg-page4 z-[9999] rounded-lg shadow-xl hover:w-20 hover:h-20 duration-200 opacity-70 hover:opacity-100 hover:cursor-pointer active:scale-90">
            {profileSVG}
          </div>
        </Link>
      )}

      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}

      <Footer />
    </React.Fragment>
  );
}

export default Layout;
