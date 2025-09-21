import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [yesSize, setYesSize] = useState(1);
  const [accepted, setAccepted] = useState(false);
  const [hearts, setHearts] = useState([]);

  // Generate hearts ketika accepted = true
  useEffect(() => {
    if (accepted) {
      const interval = setInterval(() => {
        setHearts((prev) => [
          ...prev,
          {
            id: Date.now(),
            left: Math.random() * 100, // posisi random
            size: Math.random() * 20 + 20, // ukuran 20–40px
          },
        ]);
      }, 300);
      return () => clearInterval(interval);
    }
  }, [accepted]);

  if (accepted) {
    return (
      <div className="result">
        <img
          src="/kiss.gif"
          alt="Cute Love"
          className="kiss"
        />
        <h2>Yay!!! 🥰💖</h2>

        {/* Hearts falling */}
        <div className="hearts-container">
          {hearts.map((heart) => (
            <span
              key={heart.id}
              className="heart"
              style={{
                left: `${heart.left}%`,
                fontSize: `${heart.size}px`,
              }}
            >
              ❤
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hii Firlii <br /> Selamat Pagii🌷🌷 <br />Apakah kamu suka akuu? ❤</h1>
      <div className="buttons">
        <button
          onClick={() => setAccepted(true)}
          style={{
            transform: `scale(${yesSize})`,
            transition: "transform 0.2s",
          }}
          className="yes-btn"
        >
          Yes 💚
        </button>
        <button
          onClick={() => setYesSize((prev) => prev + 0.3)}
          className="no-btn"
        >
          Surely not? ❌
        </button>
      </div>
    </div>
  );
}

export default App;