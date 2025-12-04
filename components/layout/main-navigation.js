"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useIsDesktop } from "../../helpers/helpers";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

function useNavItem(matchPath) {
  const router = useRouter();
  const [animationStarted, setAnimationStarted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const active = matchPath(router.pathname);
    if (active) {
      setIsClicked(true);
    } else {
      setAnimationStarted(false);
      setIsHovered(false);
      setIsClicked(false);
    }
  }, [router.pathname]);

  return {
    animationStarted,
    isHovered,
    isClicked,
    onMouseEnter: () => {
      setAnimationStarted(true);
      setIsHovered(true);
    },
    onMouseLeave: () => {
      setAnimationStarted(false);
      setIsHovered(false);
    },
    onClick: () => setIsClicked(true),
  };
}

function NavItem({
  href,
  label,
  widthClass,
  borderZ,
  isButton,
  states,
  otherItemsAnimating,
  animateVar,
  hoverVar,
  children,
  onClick,
}) {
  const handleClick = () => {
    states.onClick();
    if (onClick) onClick();
  };

  const content = (
    <>
      <div className="flex flex-row items-end bg-grain px-2 sm:px-4 py-2 rounded-2xl shadow-[0px_1px_4px_rgba(56,52,52,0.3),_0px_2px_8px_rgba(56,52,52,0.3)]">
        <motion.div
          initial={{ width: `var(${animateVar})` }}
          whileHover={{ width: `var(${hoverVar})` }}
          animate={{
            width: states.isClicked ? `var(${hoverVar})` : `var(${animateVar})`,
          }}
          className={`sm:border-b-[0.2em] border-b-[0.18em] border-pageMenu rounded-sm ${borderZ} ${widthClass}`}
          onMouseEnter={states.onMouseEnter}
          onMouseLeave={states.onMouseLeave}
          onClick={handleClick}
        >
          <div className="flex flex-row p-0">
            {children}
            {(states.animationStarted || states.isClicked) && (
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.2,
                  duration: 0.4,
                  stiffness: 250,
                }}
                className="flex items-end justify-center whitespace-nowrap sm:text-[1em] text-[0.7em] font-extrabold text-pageMenu"
              >
                {label}
              </motion.span>
            )}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {(states.animationStarted || states.isClicked) &&
          !otherItemsAnimating && (
            <motion.div
              className="absolute bg-opacity-50 sm:w-8 sm:h-8 w-5 h-5 bg-page4 rounded-full sm:-top-2 sm:-left-3 -top-1 -left-2"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                delay: 0.2,
                duration: 1,
                stiffness: 100,
              }}
              exit={{ y: -100 }}
            />
          )}
      </AnimatePresence>
    </>
  );

  if (isButton) {
    return <button className="mx-3 sm:mx-5 relative">{content}</button>;
  }

  return (
    <div className="mx-3 sm:mx-5">
      <Link href={href || "#"} className="relative">
        {content}
      </Link>
    </div>
  );
}

const HomePageIcon = ({ hover }) => (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      viewBox="0 0 24 24"
      className="w-7 h-7 sm:w-9 sm:h-9"
    >
      <motion.path
        initial={{ pathLength: 1 }}
        animate={{ pathLength: hover ? [0, 1] : 1 }}
        transition={{ duration: 2 }}
        stroke="#1E1B13"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
        d="M2 20h2m0 0h6m-6 0v-8.548c0-.534 0-.801.065-1.05a2 2 0 0 1 .28-.617c.145-.213.346-.39.748-.741l4.801-4.202c.746-.652 1.119-.978 1.538-1.102.37-.11.765-.11 1.135 0 .42.124.794.45 1.54 1.104l4.8 4.2c.402.352.603.528.748.74q.192.287.28.618c.065.249.065.516.065 1.05V20m-10 0h4m-4 0v-4a2 2 0 1 1 4 0v4m0 0h6m0 0h2"
      />
    </svg>
  </div>
);

const TheoryPageIcon = ({ hover }) => (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      viewBox="0 0 24 24"
      className="w-7 h-7 sm:w-9 sm:h-9"
    >
      <motion.path
        initial={{ pathLength: 1 }}
        animate={{ pathLength: hover ? [0, 1] : 1 }}
        transition={{ duration: 2 }}
        stroke="#1E1B13"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.92"
        d="M4 19V6.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C5.52 3 6.08 3 7.2 3h9.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C20 4.52 20 5.08 20 6.2V17H6a2 2 0 0 0-2 2m0 0a2 2 0 0 0 2 2h14M9 7h6m-6 4h6m4 6v4"
      />
    </svg>
  </div>
);

const AlgorithmsPageIcon = ({ hover }) => (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      viewBox="0 0 24 24"
      className="w-7 h-7 sm:w-9 sm:h-9"
    >
      <motion.path
        initial={{ pathLength: 1 }}
        animate={{ pathLength: hover ? [0, 1] : 1 }}
        transition={{ duration: 2 }}
        stroke="#1E1B13"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16.75 6H20a1 1 0 0 1 1 1v3.25a.75.75 0 0 1-.75.75H20a2 2 0 1 0 0 4h.25a.75.75 0 0 1 .75.75V20a1 1 0 0 1-1 1h-3.25a.75.75 0 0 1-.75-.75V20a2 2 0 1 0-4 0v.25a.75.75 0 0 1-.75.75H7a1 1 0 0 1-1-1v-4.25a.75.75 0 0 0-.75-.75H5a2 2 0 1 1 0-4h.25a.75.75 0 0 0 .75-.75V7a1 1 0 0 1 1-1h4.25a.75.75 0 0 0 .75-.75V5a2 2 0 1 1 4 0v.25c0 .414.336.75.75.75"
      ></motion.path>
    </svg>
  </div>
);

const LoginIcon = ({ hover }) => (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-7 h-7 sm:w-9 sm:h-9"
    >
      <g stroke="#1E1B13" strokeWidth="1.7">
        <motion.path
          initial={{ pathLength: 1 }}
          animate={{ pathLength: hover ? [0, 1] : 1 }}
          transition={{ duration: 0.5 }}
          d="M4 7c0-1.886 0-2.828.586-3.414C5.172 3 6.114 3 8 3h8c1.886 0 2.828 0 3.414.586C20 4.172 20 5.114 20 7v8c0 2.828 0 4.243-.879 5.121C18.243 21 16.828 21 14 21h-4c-2.828 0-4.243 0-5.121-.879C4 19.243 4 17.828 4 15V7z"
        />
        <motion.path
          initial={{ pathLength: 1 }}
          animate={{ pathLength: hover ? [0, 1] : 1 }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          d="M15 18v3m-6-3v3M9 8h6M9 12h6"
        />
      </g>
    </svg>
  </div>
);

const LogoutIcon = ({ hover }) => (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      viewBox="0 0 24 24"
      className="w-7 h-7 sm:w-9 sm:h-9"
    >
      <g stroke="#1E1B13" strokeLinecap="round" strokeWidth="1.7">
        <motion.path
          strokeLinejoin="round"
          initial={{ pathLength: 1 }}
          animate={{ pathLength: hover ? [0, 1] : 1 }}
          transition={{ duration: 1.5 }}
          d="M15 12H6m0 0l2 2m-2-2l2-2"
        />
        <motion.path
          initial={{ pathLength: 1 }}
          animate={{ pathLength: hover ? [0, 1] : 1 }}
          transition={{ duration: 1 }}
          d="M12 21.983c-1.553-.047-2.48-.22-3.121-.862-.769-.768-.865-1.946-.877-4.121M16 21.998c2.175-.012 3.353-.108 4.121-.877C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2h-1c-2.829 0-4.243 0-5.121.879-.769.768-.865 1.946-.877 4.121M3 9.5v5c0 2.357 0 3.535.732 4.268.732.732 1.911.732 4.268.732M3.732 5.232C4.464 4.5 5.643 4.5 8 4.5"
        />
      </g>
    </svg>
  </div>
);

function useNow(timeZone) {
  const [now, setNow] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setNow(new Date()), 5000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return null;

  const hhmm = new Intl.DateTimeFormat("pl-PL", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone,
  }).format(now);

  return hhmm;
}

function ClockPoland() {
  const time = useNow("Europe/Warsaw");
  return (
    <div className="mx-3 sm:mx-5">
      <div className="h-14 flex flex-row bg-grain px-4 py-2 rounded-2xl shadow-[0px_1px_4px_rgba(56,52,52,0.3),_0px_2px_8px_rgba(56,52,52,0.3)]">
        <div className="flex items-center justify-center whitespace-nowrap sm:text-[1em] text-[0.7em] font-extrabold text-pageMenu">
          Polska | {time}
        </div>
      </div>
    </div>
  );
}

function MainNavigation() {
  const { status } = useSession();

  const home = useNavItem((p) => p === "/");
  const theory = useNavItem((p) => p === "/teoria");
  const algorithms = useNavItem((p) => p === "/algorytmy");
  const auth = useNavItem((p) => p === "/auth");

  const isDesktop = useIsDesktop(1024);
  const isMobile = !useIsDesktop(640);

  const anyAnimating = useMemo(
    () =>
      home.animationStarted ||
      theory.animationStarted ||
      algorithms.animationStarted ||
      auth.animationStarted,
    [
      home.animationStarted,
      theory.animationStarted,
      algorithms.animationStarted,
      auth.animationStarted,
    ]
  );

  return (
    <React.Fragment>
      <div className="w-full h-[5.5rem] relative bg-page1 overflow-hidden">
        <div className="absolute z-10 font-typewriter items-center grid grid-cols-[1fr_auto_1fr] w-full my-4 scale-75 sm:scale-100">
          <div className="flex justify-start ms-10 sm:ms-12 lg:ms-16">
            <NavItem
              href="/"
              label="Strona Główna"
              widthClass="relative sm:[--scale-hover-1:10.6rem] sm:[--scale-animate-1:2.25rem] [--scale-hover-1:7.5rem] [--scale-animate-1:1.8rem]"
              borderZ="z-10"
              states={home}
              otherItemsAnimating={anyAnimating && !home.animationStarted}
              animateVar="--scale-animate-1"
              hoverVar="--scale-hover-1"
            >
              <HomePageIcon hover={home.isHovered} />
            </NavItem>

            <NavItem
              href="/teoria"
              label="Teoria"
              widthClass="sm:[--scale-hover-2:6.4rem] sm:[--scale-animate-2:2.25rem] [--scale-hover-2:4.5rem] [--scale-animate-2:1.8rem]"
              borderZ="z-10"
              states={theory}
              otherItemsAnimating={anyAnimating && !theory.animationStarted}
              animateVar="--scale-animate-2"
              hoverVar="--scale-hover-2"
            >
              <TheoryPageIcon hover={theory.isHovered} />
            </NavItem>
          </div>

          <div>
            {isDesktop && (
              <Image
                src="/cat_nav.gif"
                alt="Image"
                placeholder="blur"
                blurDataURL="/cat_nav.gif"
                width={355}
                height={261}
                className="w-12 h-12 object-cover"
              />
            )}
          </div>

          <div className="flex justify-end me-10 sm:me-12 lg:me-16">
            <NavItem
              href="/algorytmy"
              label="Algorytmy"
              widthClass="sm:[--scale-hover-2:8.1rem] sm:[--scale-animate-2:2.25rem] [--scale-hover-2:6rem] [--scale-animate-2:1.8rem]"
              borderZ="z-10"
              states={algorithms}
              otherItemsAnimating={anyAnimating && !algorithms.animationStarted}
              animateVar="--scale-animate-2"
              hoverVar="--scale-hover-2"
            >
              <AlgorithmsPageIcon hover={algorithms.isHovered} />
            </NavItem>

            {status !== "authenticated" && (
              <NavItem
                href="/auth"
                label="Login"
                widthClass="sm:[--scale-hover-3:6rem] sm:[--scale-animate-3:2.25rem] [--scale-hover-3:4.3rem] [--scale-animate-3:1.8rem]"
                borderZ="z-10"
                states={auth}
                otherItemsAnimating={anyAnimating && !auth.animationStarted}
                animateVar="--scale-animate-3"
                hoverVar="--scale-hover-3"
              >
                <LoginIcon hover={auth.isHovered} />
              </NavItem>
            )}

            {status === "authenticated" && (
              <NavItem
                isButton
                label="Logout"
                widthClass="sm:[--scale-hover-4:6.4rem] sm:[--scale-animate-4:2.25rem] [--scale-hover-4:4.7rem] [--scale-animate-4:1.8rem]"
                borderZ="z-10"
                states={auth}
                otherItemsAnimating={anyAnimating && !auth.animationStarted}
                animateVar="--scale-animate-4"
                hoverVar="--scale-hover-4"
                onClick={() => signOut()}
              >
                <LogoutIcon hover={auth.isHovered} />
              </NavItem>
            )}

            {isDesktop && <ClockPoland />}
          </div>
        </div>
        <div className="opacity-100 brightness-200 absolute w-full h-full bg-grain"></div>
        <div className="opacity-100 brightness-200 absolute w-full h-full bg-grain"></div>
      </div>
      {isMobile && (
        <div className="w-full h-[15.5rem] relative bg-page1">
          <div className="absolute z-10 w-full h-full flex justify-center">
            <Image
              src="/cat_nav.gif"
              alt="Image"
              placeholder="blur"
              blurDataURL="/cat_nav.gif"
              width={355}
              height={261}
              className="w-60 h-60 object-cover"
            />
          </div>
          <div className="opacity-100 brightness-200 absolute w-full h-full bg-grain"></div>
          <div className="opacity-100 brightness-200 absolute w-full h-full bg-grain"></div>
        </div>
      )}
    </React.Fragment>
  );
}

export default MainNavigation;
