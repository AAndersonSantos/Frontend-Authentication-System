import { RegisterTypes } from "@/types/authentication/registerTypes.d";
import React, { useState, useRef } from "react";
import axios from "axios";
import Logo from "@/assets/img/logo-bitcode.svg";
import Image from "next/image";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();

  const [state, setState] = useState<RegisterTypes>({
    name: "",
    surname: "",
    email: "",
    password: "",
    error: "",
  });

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const toggleShow = () => {
    setIsPasswordVisible((prevState) => !prevState);
    if (inputRef.current) {
      inputRef.current.type = isPasswordVisible ? "password" : "text";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = {
        name: state.name,
        surname: state.surname,
        email: state.email,
        password: state.password,
      };

      axios
        .post("http://localhost:8081/auth/register", data)
        .then((response) => {
          console.log(response);
          router.push("/auth/login");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 flex">
      <div className="w-1/2 flex items-center justify-center w-full md:w-1/2">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md h-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Crie sua conta
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nome:
              </label>
              <input
                type="text"
                name="name"
                value={state.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-customOrange focus:border-customOrange sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sobrenome:
              </label>
              <input
                type="text"
                name="surname"
                value={state.surname}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-customOrange focus:border-customOrange sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={state.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-customOrange focus:border-customOrange sm:text-sm"
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">
                Senha:
              </label>
              <input
                ref={inputRef}
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                value={state.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-customOrange focus:border-customOrange sm:text-sm"
              />
              <span
                onClick={toggleShow}
                className="cursor-pointer absolute inset-y-0 right-5 top-6 flex items-center"
              >
                {isPasswordVisible === false ? (
                  <RiEyeCloseLine />
                ) : (
                  <RiEyeLine />
                )}
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-customOrange text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-customOrange focus:ring-offset-2"
            >
              Cadastrar
            </button>
            <div className="text-center">
              <span>
                Já tem uma conta ?
                <a
                  className="text-sky-500 font-medium"
                  href="http://localhost:3000/auth/login"
                >
                  {" "}
                  Faça login
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-customOrange w-1/2 hidden md:flex items-center justify-center">
        <Image className="max-w-[600px] w-full h-auto" src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Register;
