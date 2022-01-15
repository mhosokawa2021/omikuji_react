import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [omikuji, setOmikuji] = useState("おみくじを引く");
  const onClickOmikuji = () => {
    var arr = ["大吉", "小吉", "中吉", "吉", "凶", "大凶"];
    var index = Math.floor(Math.random() * arr.length);
    setOmikuji(arr[index]);
  };
  return (
    <>
      <p className="btn" onClick={onClickOmikuji}>
        {omikuji}
      </p>
    </>
  );
};
