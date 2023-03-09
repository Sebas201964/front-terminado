import React, { useState } from "react";
import "../Styles/css/NavbarDesh.css";

export const NavBarUserDisabled: React.FC = () => {
  const eliminarUser = () => {
    sessionStorage.removeItem("user");
  };
  const [confirm, setConfirm] = useState(false);
  return (
    <>
      <div>
        <body className="body2">
          <nav>
            <div className="icon_diente"></div>
            <div id="logo">Odontología Integral SM</div>

            <label htmlFor="drop" className="toggle">
              Menu
            </label>
            <input type="checkbox" id="drop" />
            <ul className="menu">
              <li className="liExit">
                <label htmlFor="drop" className="toggle">
                  Cerrar Sesión
                </label>
                <a href="/inicio" onClick={eliminarUser}>
                  <div className="ExitM"></div>
                </a>
              </li>
            </ul>
          </nav>
        </body>
        <div className="FondoDeshabilitado"></div>
      </div>
    </>
  );
};
