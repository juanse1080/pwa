"use client";

import { Button, Card, TextField } from "@/components";
import { useForm } from "@/hooks";

const Form = () => {
  const { value, handleChange } = useForm({
    email: "",
    password: "",
  });

  return (
    <div className="w-full flex flex-col gap-3">
      <TextField
        required
        name="email"
        value={value.email}
        onChange={handleChange}
        label="Correo electronico"
      />
      <TextField
        required
        name="password"
        type="password"
        value={value.password}
        onChange={handleChange}
        label="Contraseña"
      />
      <Button disabled>Inicia sesión</Button>
    </div>
  );
};

export default Form;
