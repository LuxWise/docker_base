"use client";
import Image from "next/image";
import Docker from "@/public/svg/docker-logo-white.svg";
import DockerBlue from "@/public/svg/docker-logo-blue.svg";
import Typography from "@/components/atoms/Typography";
import Button from "@/components/atoms/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();

  const handleRedirect = (url: string) => {
    route.push(url);
  };

  return (
    <div className="flex flex-col bg-gradient-to-r from-[#1f62ec] to-[#022a8e] items-center gap-10 pt-10 h-screen">
      <header>
        <Image src={Docker} alt="" className="max-w-44" />
      </header>
      <main className="flex flex-col items-center w-full  bg-white shadow-2xl ">
        <section className="flex flex-col gap-10 items-center w-full py-24 bg-[#f4f4f6] rounded-b-[12rem]">
          <Typography variant="h1" className="text-7xl">
            Bienvenidos al curso de Docker
          </Typography>
          <Typography variant="h4">
            Atravete a aprender esta increible tecnologia
          </Typography>

          <div className="flex gap-5 justify-between">
            <Button
              bgColor="white"
              color="black"
              text="Leer sobre docker ✨"
              className=" font-semibold px-4 border-2 border-gray-400 hover:shadow-md hover:shadow-gray-400"
              onClick={() => handleRedirect("https://docs.docker.com")}
            />

            <Button
              bgColor="blue"
              color="white"
              text="🚀 Vamos a aprender"
              className="bg-[#1d63ed] font-semibold px-4 hover:shadow-md hover:shadow-sky-400 "
              onClick={() => handleRedirect("/aprende")}
            />
          </div>
        </section>

        <section className="grid grid-cols-3 grid-rows-2 gap-6 w-3/6 mt-10">
          <div className="flex flex-col items-center bg-[#e6f0fd] rounded-xl p-6 shadow-md">
            <Image src={DockerBlue} alt="" className="max-w-16 mb-4" />
            <Typography variant="h5" className="font-bold mb-2">
              Portabilidad
            </Typography>
            <Typography variant="body" className="text-center text-gray-700">
              Docker permite ejecutar aplicaciones en cualquier entorno,
              asegurando que funcionen igual en desarrollo y producción.
            </Typography>
          </div>
          <div className="flex flex-col items-center bg-[#e6f0fd] rounded-xl p-6 shadow-md">
            <Image src={DockerBlue} alt="" className="max-w-16 mb-4" />
            <Typography variant="h5" className="font-bold mb-2">
              Aislamiento
            </Typography>
            <Typography variant="body" className="text-center text-gray-700">
              Cada contenedor es independiente, evitando conflictos entre
              aplicaciones y facilitando la gestión de dependencias.
            </Typography>
          </div>
          <div className="flex flex-col items-center bg-[#e6f0fd] rounded-xl p-6 shadow-md">
            <Image src={DockerBlue} alt="" className="max-w-16 mb-4" />
            <Typography variant="h5" className="font-bold mb-2">
              Escalabilidad
            </Typography>
            <Typography variant="body" className="text-center text-gray-700">
              Facilita la creación y gestión de múltiples instancias de una
              aplicación para adaptarse a la demanda.
            </Typography>
          </div>
          <div className="flex flex-col items-center bg-[#e6f0fd] rounded-xl p-6 shadow-md">
            <Image src={DockerBlue} alt="" className="max-w-16 mb-4" />
            <Typography variant="h5" className="font-bold mb-2">
              Eficiencia
            </Typography>
            <Typography variant="body" className="text-center text-gray-700">
              Optimiza el uso de recursos al compartir el mismo sistema
              operativo, reduciendo el consumo comparado con máquinas virtuales.
            </Typography>
          </div>
          <div className="flex flex-col items-center bg-[#e6f0fd] rounded-xl p-6 shadow-md">
            <Image src={DockerBlue} alt="" className="max-w-16 mb-4" />
            <Typography variant="h5" className="font-bold mb-2">
              Integración continua
            </Typography>
            <Typography variant="body" className="text-center text-gray-700">
              Facilita la automatización de pruebas y despliegues, integrándose
              fácilmente con herramientas de CI/CD.
            </Typography>
          </div>
          <div className="flex flex-col items-center bg-[#e6f0fd] rounded-xl p-6 shadow-md">
            <Image src={DockerBlue} alt="" className="max-w-16 mb-4" />
            <Typography variant="h5" className="font-bold mb-2">
              Rapidez en despliegues
            </Typography>
            <Typography variant="body" className="text-center text-gray-700">
              Permite iniciar y detener aplicaciones rápidamente, acelerando los
              ciclos de desarrollo y entrega.
            </Typography>
          </div>
        </section>
      </main>
    </div>
  );
}
