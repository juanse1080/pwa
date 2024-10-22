"use client";

import { Card, TextField } from "@/components";
import { useForm } from "@/hooks";

const Form = () => {
  const { value, handleChange } = useForm({
    name: "",
  });

  return (
    <Card className="w-[400px]">
      <form>
        <TextField
          label="Name"
          name="name"
          value={value.name}
          onChange={handleChange}
        />
      </form>
    </Card>
  );
};

export default Form;
