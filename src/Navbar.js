import React, { useEffect, useState } from "react";
import style from "./navbar.module.css";
import { animated, config, useSpring } from "react-spring";
import Logo from "./icons/Logo";
import Hamburger from "./icons/Hamburger";
import { useHideOnScrollDown } from "./utilities/useHideOnScroll";

const Navbar = () => {
  const isVisible = useHideOnScrollDown();
  const [menuIsVis, setMenuIsVis] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuIsVis((prevState) => !prevState);
  };

  useEffect(() => {
    if (isVisible) return;
    setMenuIsVis(false);
  }, [isVisible]);

  const props = useSpring({
    to: { top: isVisible ? "0" : "-4rem" },
    config: { ...config.gentle, clamp: true },
  });

  const menuProps = useSpring({
    to: { bottom: menuIsVis ? "-15.5rem" : "0" },
    config: {...config.gentle, clamp: !menuIsVis},
  });

  return (
    <animated.header style={props} className={style.navbar}>
      <div className={style.front}>
        <a role="button" href="">
          <Logo className={style.logo} />
        </a>
        <a onClick={toggleMenu} role="button" href="">
          <Hamburger className={style.menuIcon} />
        </a>
      </div>
      <animated.div style={menuProps} className={style.menuWrapper}>
        <ul className={style.menuContent}>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </animated.div>
    </animated.header>
  );
};

export default Navbar;
