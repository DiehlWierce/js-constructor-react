import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//Чтобы получить доступ к скрытому
//конфигу сборки, нужно выполнить команду eject.
//Внимание: если вы сделали это, то вернуться
//обратно вы уже не сможете.
