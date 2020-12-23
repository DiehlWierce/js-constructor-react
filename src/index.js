import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

//Чтобы получить доступ к скрытому
//конфигу сборки, нужно выполнить команду eject.
//Внимание: если вы сделали это, то вернуться
//обратно вы уже не сможете.
