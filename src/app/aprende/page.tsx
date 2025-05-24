"use client";
import Image from "next/image";
import Docker from "@/public/svg/docker-logo-white.svg";
import React from "react";
import Typography from "@/components/atoms/Typography";
import { InputForm } from "@/components/molecules/InputForm";
import { useRouter } from "next/navigation";

export default function Aprende() {
  const route = useRouter();

  const setForm = async (value: {
    name: string;
    lastname: string;
    email: string;
  }) => {
    const res = await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value }),
    });

    if (res.ok) {
      route.push("/felicidades");
    }
  };

  return (
    <div className="flex flex-col bg-gradient-to-r from-[#1f62ec] to-[#022a8e] items-center gap-10 pt-10 h-screen">
      <header>
        <Image src={Docker} alt="" className="max-w-44" />
      </header>
      <main className="flex justify-between items-center w-full h-full bg-gradient-to-l from-[#2c4665] to-[#10151b] shadow-2xl ">
        <InputForm
          onAdd={setForm}
          className="w-2/6 ml-14 hover:shadow-xl hover:shadow-slate-600 transition-all duration-300"
        />
        <div className="h-full w-4/6 bg-[#1a2634] flex flex-col justify-center items-center gap-8 px-10">
          <div className="grid grid-cols-2 gap-8 w-full">
            <div className="bg-[#22304a] rounded-xl p-6 shadow-lg flex flex-col items-center">
              <Typography
                variant="h5"
                color="white"
                className="font-semibold mb-2"
              >
                Desarrolla aplicaciones portables
              </Typography>
              <p className="text-gray-300 text-center">
                Aprende a crear contenedores que funcionan en cualquier entorno,
                facilitando el despliegue y la portabilidad.
              </p>
            </div>
            <div className="bg-[#22304a] rounded-xl p-6 shadow-lg flex flex-col items-center">
              <Typography
                variant="h5"
                color="white"
                className="font-semibold mb-2"
              >
                Optimiza el uso de recursos
              </Typography>
              <p className="text-gray-300 text-center">
                Docker permite ejecutar múltiples aplicaciones en el mismo
                servidor, aprovechando mejor los recursos disponibles.
              </p>
            </div>
            <div className="bg-[#22304a] rounded-xl p-6 shadow-lg flex flex-col items-center">
              <Typography
                variant="h5"
                color="white"
                className=" font-semibold mb-2"
              >
                Facilita la integración continua
              </Typography>
              <p className="text-gray-300 text-center">
                Automatiza pruebas y despliegues con contenedores, mejorando la
                calidad y velocidad del desarrollo.
              </p>
            </div>
            <div className="bg-[#22304a] rounded-xl p-6 shadow-lg flex flex-col items-center">
              <Typography
                variant="h5"
                color="white"
                className="font-semibold mb-2"
              >
                Amplía tus oportunidades laborales
              </Typography>
              <p className="text-gray-300 text-center">
                El conocimiento de Docker es altamente demandado en el mercado
                laboral tecnológico actual.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
