import React from "react";
import Logo from "@/assets/img/logo-bitcode.svg";
import Image from "next/image";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  const redirectPageLogin = () => {
    router.push("/auth/login");
  };

  return (
    <div className="bg-customOrange w-full min-h-screen hidden md:flex flex-col items-center justify-center space-y-10">
      <Image src={Logo} alt="Logo" width={500} height={500} />
      <button
        className="w-32 bg-white text-customOrange font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-customOrange focus:ring-offset-2 
          transform transition duration-200 ease-in-out hover:scale-105 active:scale-95"
        type="button"
        onClick={redirectPageLogin}
      >
        Entrar
      </button>
    </div>
  );
};

export default Index;
