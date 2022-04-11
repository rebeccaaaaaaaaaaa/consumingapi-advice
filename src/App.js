import { useEffect, useState } from "react";
import Card from "./components/Card";
import Icon from "./images/icon-dice.svg";
import styles from "./styles/components/NeonDetail.module.css";
import "./App.css";

import Api from "./api";

function App() {
  const [advice, setAdvice] = useState("");
  const [idAdvice, setIdAdvice] = useState(0);

  const handleAdvice = () => {
    Api.getAdvice()
      .then((data) => {
        setAdvice(data.slip.advice);
        setIdAdvice(data.slip.id);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    handleAdvice();
  }, []);



  return (
    <div className="App">
      <Card idAdvice={idAdvice} adviceText={advice} />
      <div className={styles.neon_dedtails} >
        <span className={styles.neon_dedtailswrapper} onClick={handleAdvice}>
          <img src={Icon} alt="icon" />
        </span>
      </div>
    </div>
  );
}

export default App;
