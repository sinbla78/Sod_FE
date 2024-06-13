import { useCallback, useState } from "react";

export default function useInput(initialForm) {
  const [form, setForm] = useState(initialForm);
  const onChange = useCallback((e) => {
    const { name, value } = e.currentTarget;
    if (typeof initialForm === "object") {
      setForm((form) => ({ ...form, [name]: value }));
    } else {
      setForm(value);
    }
  }, []);
  return { form, onChange, setForm };
}
