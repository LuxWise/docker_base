import React from "react";
import Docker from "@/public/svg/docker-logo-white.svg";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-col bg-gradient-to-r from-[#1f62ec] to-[#022a8e] items-center gap-10 pt-10 h-screen">
      <header>
        <Image src={Docker} alt="" className="max-w-44" />
      </header>
      <main className="flex justify-center items-center w-full h-full bg-white ">
        <div className="flex flex-col bg-[#1d63ed] items-center justify-center w-4/6 h-4/6 text-white px-8 rounded-2xl shadow-2xl">
          <h1 className="text-4xl font-bold mb-4 text-center">¡Felicidades!</h1>
          <p className="text-lg text-center mb-2">
            Has completado esta etapa con éxito. Muy pronto nos volveremos a ver
            para seguir aprendiendo juntos.
          </p>
          <p className="text-lg text-center">
            Te llegará un correo de confirmación en breve. ¡Gracias por tu
            dedicación y entusiasmo!
          </p>
        </div>
      </main>
    </div>
  );
}
