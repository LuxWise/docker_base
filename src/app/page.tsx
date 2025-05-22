"use client";
import { InputForm } from "@/components/molecules/InputForm";
import Table from "@/components/molecules/Table";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<{ id: number; value: string }[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("/api/data");
    const json = await res.json();
    setData(json);
    setLoading(false);
  };

  const addData = async (value: string) => {
    const res = await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value }),
    });
    if (res.ok) {
      fetchData();
    }
  };

  const deleteData = async (id: number) => {
    await fetch("/api/data", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchData();
  };

  return (
    <div className="flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500 items-center gap-10 p-10 w-screen h-screen">
      <header className="w-full flex justify-start">
        <div className="bg-white px-6 py-2 rounded-2xl">
          <h1 className="text-5xl font-semibold text-black">
            NEXTJS CRUD (SSR)
          </h1>
        </div>
      </header>
      <main className="flex flex-col gap-10 p-20 items-center w-11/12 h-full bg-gradient-to-br from-sky-200 to-blue-600 rounded-2xl shadow-2xl">
        <InputForm onAdd={addData} />
        {loading ? (
          <div className="text-white">Cargando...</div>
        ) : (
          <Table data={data} onDelete={deleteData} className="w-8/12" />
        )}
      </main>
    </div>
  );
}
