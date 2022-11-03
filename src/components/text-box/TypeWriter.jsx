import { useTypedText } from "../../hooks/useTypedText";

const lines = ["hello world", "welcome back!"];

const TypeWriter = () => {
  const text = useTypedText(lines);
  return <p>{text}</p>;
};

export default TypeWriter;
