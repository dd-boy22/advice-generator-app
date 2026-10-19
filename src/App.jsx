import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState(null);
  const [adviceId, setAdviceId] = useState(null);

  async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip);
    setAdviceId(data.slip.id);
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  if (!advice) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-blue-950 flex flex-col items-center justify-center w-full">
      <div className="bg-blue-600 space-y-7 py-10 mx-4 flex flex-col items-center text-center rounded sm:w-120 md:w-130">
        <p className="text-green-300 uppercase">{`advice #${adviceId}`}</p>
        <h1 className="text-white text-3xl bold ">{advice.advice}</h1>
        <img
          className="lg:hidden relative -bottom-8"
          src="./images/pattern-divider-mobile.svg"
          alt="mobile devider pattern"
        />
        <img
          className="hidden lg:flex relative -bottom-9"
          src="./images/pattern-divider-desktop.svg"
          alt="desktop devider pattern"
        />

        <div
          className="bg-green-300 p-5 rounded-full relative -bottom-16 cursor-pointer shadow-lg neon-btn "
          onClick={fetchAdvice}
        >
          <img src="./images/icon-dice.svg" alt="icon dice" />
        </div>
      </div>
    </div>
  );
}

export default App;
