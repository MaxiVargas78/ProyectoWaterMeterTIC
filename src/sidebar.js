import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Inicio
      </a>

      <a className="menu-item" href="/Nivel-Agua">
        Estado Nivel de estanque
      </a>

      <a className="menu-item" href="/PH-Agua">
        Calidad de Agua (PH)
      </a>

      <a className="menu-item" href="/Consumo-Diario">
        Tu consumo diario
      </a>
    </Menu>
  );
};