import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
function Links() {
  const [active, setActive] = useState("Главная");
  const links = ["Главная", "О нас", "Услуги", "Каталог", "Контакты"];
  const handleActive = (link) => {
    setActive(link);
  };
  return (
    <ul className="links">
      {links.map((link) => (
        <li key={link} onClick={() => handleActive(link)}>
          <a className={active === link ? "active_link" : ""} href={`#${link}`}>
            {" "}
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Links;
