// Imports
import { useState } from "react";

// Custom useLocalStorage hook
export function useLocalStorage(key, defaultValue) {
  console.log("Called useLocalState");

  const [storedValue, setStoredValue] = useState(() => {
    console.log("Called useState");
    try {
      const item = window.localStorage.getItem(key);
      return item ? parseJSON(item) : defaultValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error); //add better logging
      return defaultValue;
    }
  });

  const setState = (value) => {
    console.log("Called setState");
    try {
      const newValue = value instanceof Function ? value(storedValue) : value;
      window.localStorage.setItem(key, JSON.stringify(newValue));
      setStoredValue(newValue);
    } catch (error) {
      console.log(error); //add better logging
      setStoredValue(value); //
    }
  };
  return [storedValue, setState];
}

// Wrapper to help handle undefined with JSON.parse
function parseJSON(value) {
  try {
    return value === "undefined" ? undefined : JSON.parse(value ?? "");
  } catch {
    console.log("parsing error on", { value });
    return undefined;
  }
}
