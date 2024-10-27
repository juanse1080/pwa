import { ChangeEvent, useCallback, useState } from "react";

/* eslint-disable  @typescript-eslint/no-explicit-any */
const useForm = <T extends Record<string, any>>(initialValues: T) => {
  const [value, setValue] = useState<T>(initialValues);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue((before) => ({
      ...before,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleCheckbox = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue((before) => ({
      ...before,
      [event.target.name]: event.target.checked,
    }));
  }, []);

  const reset = useCallback(() => {
    setValue(initialValues);
  }, [initialValues]);

  return { value, reset, handleChange, handleCheckbox };
};

export default useForm;
