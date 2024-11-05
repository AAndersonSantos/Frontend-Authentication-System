import AuthGuard from "@/components/AuthGuard";
import LogoutButton from "@/components/LogoutButton";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import axios from "axios";

const Profile = () => {

  const [msg, setMsg] = useState("");

  useEffect(() => {
      axios.get("http://localhost:8081/profile", {
        withCredentials: true,
      }).then((res) => {
      setMsg(res.data)

    }).catch((err) => {
        console.log(err.response)
    })

}, [])

  return (
    <AuthGuard>
      <div className="bg-customOrange w-full min-h-screen flex flex-col justify-center items-center">
        <h1 className="font-poppins font-bold text-5xl">{msg}</h1>

        <Link href="/dashboard/home">
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-semibold">
            Ir para o Dashboard
          </button>
        </Link>

        <LogoutButton className="absolute bottom-0 left-0 mb-4 ml-4 w-32 bg-white text-customOrange font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-customOrange focus:ring-offset-2 
          transform transition duration-200 ease-in-out hover:scale-105 active:scale-95" />
      </div>
    </AuthGuard>
  );
};

export default Profile;
