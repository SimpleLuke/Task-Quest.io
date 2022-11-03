import { useState, useEffect } from "react";

export const useTypedText = (lines) => {
  const [typedText, setTypedText] = useState("");
  useEffect(() => {
    const nextTypedText = lines[0].slice(0, typedText.length + 1);

    if (nextTypedText === typedText) return;

    const timeout = setTimeout(() => {
      setTypedText(lines[0].slice(0, typedText.length + 1));
    }, 1000);

    return () => clearTimeout(timeout);
  }, [lines, typedText]);

  return typedText;
};
