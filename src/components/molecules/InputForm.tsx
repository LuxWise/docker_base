import React, { useState } from "react";
import Typography from "../atoms/Typography";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

interface InputFormProps {
  onAdd: (value: string) => Promise<void>;
}

export const InputForm = ({ onAdd }: InputFormProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    await onAdd(value);
    setValue("");
  };

  return (
    <form
      className="flex flex-col gap-4 p-6 bg-gray-50 rounded-xl shadow w-full max-w-md"
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" color="blue" className="mb-2">
        Agregar nuevo elemento
      </Typography>
      <Input
        placeholder="Escribe algo..."
        bgColor="white"
        color="black"
        className="w-full"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button
        bgColor="blue"
        color="white"
        text="Agregar"
        className="w-full mt-2"
      />
    </form>
  );
};
