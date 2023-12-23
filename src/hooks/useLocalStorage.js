import { useEffect, useState } from "react";

export const useLocalStorage = function (initialState, key) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    if (!key) localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
