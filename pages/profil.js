"use client";

import Head from "next/head";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { useRouter } from "next/router";
import { authOptions } from "./api/auth/[...nextauth]";

function ProfilePage(props) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth");
    }
  }, [router, status]);

  if (status === "loading") {
    return (
      <React.Fragment>
        <Head>
          <title>OPD - Profil</title>
          <meta
            name="description"
            content="Profil użytkownika w aplikacji OPD - Optymalizacja Procesów Dyskretnych"
          />
        </Head>
        <div className="w-full h-[30rem] border-2 border-pageMenu flex items-center justify-center bg-page1">
          <span className="font-page text-2xl sm:text-5xl md:text-4xl lg:text-5xl text-pageMenu font-extrabold tracking-wide text-center overflow-hidden p-5 bg-page1">
            Ładowanie...
          </span>
        </div>
      </React.Fragment>
    );
  }

  if (status === "authenticated") {
    return (
      <React.Fragment>
        <Head>
          <title>OPD - Profil</title>
          <meta
            name="description"
            content="Informacje o zalogowanym użytkowniku w aplikacji OPD"
          />
        </Head>
        <div className="w-full h-[40rem] relative bg-page1">
          <div className="absolute z-10 w-full h-full flex justify-center items-center">
            <div className="w-full min-h-[30rem] flex justify-center items-start py-10">
              <div className="w-[90%] md:w-[60%] lg:w-[50%] bg-page2 rounded-xl p-6 font-typewriter border-4 border-pageMenu">
                <h1 className="text-2xl md:text-3xl font-extrabold text-pageMenu mb-4">
                  Informacje o zalogowanym użytkowniku
                </h1>
                <pre className="bg-page4 border-4 border-pageMenu rounded-lg p-4 text-xs md:text-sm overflow-auto">
                  {JSON.stringify(props.sessionObject, null, 2)}
                </pre>
              </div>
            </div>
          </div>
          <div className="opacity-100 brightness-200 absolute w-full h-full bg-grain"></div>
          <div className="opacity-100 brightness-200 absolute w-full h-full bg-grain"></div>
        </div>
      </React.Fragment>
    );
  }
  return null;
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {
      sessionObject: JSON.parse(JSON.stringify(session)),
    },
  };
}

export default ProfilePage;
