export default function Clicker({ buttonText, message }) {
  //   return <button onClick={() => alert(message)}>{buttonText}</button>;
  const HandleClick = () => {
    alert(message);
  };
  return <button onClick={handleClick}>{buttonText}</button>;
}
