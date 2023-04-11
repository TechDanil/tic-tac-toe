import { useState } from "react";

import exit from '../../assets/icons/exit.svg';
import logo from '../../assets/img/logo/logo.svg';
import './nav.scss';

const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const linksData = [
    { id: 0, textContent: 'игровое поле', },
    { id: 1, textContent: 'рейтинг', },
    { id: 2, textContent: 'активные игроки', },
    { id: 3, textContent: 'история игр', },
    { id: 4, textContent: 'cписок игроков', },
  ];

  const links = linksData.map(link => {
    const { id, textContent } = link;

    return (
      <li
        key={id}
        className={`nav-list__item ${activeIndex === id ? 'nav-list__item-active' : ''}`}
        onClick={() => setActiveIndex(id)}
      >
        <a
          href="#"
          className="nav-list__item-link"
        >
          {textContent}
        </a>
      </li>
    );
  })

  return (
    <nav className="nav">
      <a href="#">
        <img src={logo} alt={logo}/>
      </a>

      <ul className="nav-list">
        {links}
      </ul>

      <img src={exit} alt="exit" className="exit-icon"/>
    </nav>
  )
}

export default Nav;