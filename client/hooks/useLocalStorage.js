// Imports
import { useState, useEffect } from "react";

// custom useLocalStorage hook
export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? parseJSON(item) : defaultValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error); //add better logging
      return defaultValue;
    }
  });
  useEffect(() => {
    try {
      const newValue = value instanceof Function ? value(value) : value;
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.log(error); //add better logging
    }
  }, [key, value]);
  return [value, setValue];
};

// Wrapper to help handle undefined with JSON.parse
function parseJSON(value) {
  try {
    return value === "undefined" ? undefined : JSON.parse(value ?? "");
  } catch {
    console.log("parsing error on", { value });
    return undefined;
  }
}
