import React from 'react'

const Header = ({ dark, children, className }) => {
  dark = !!dark ? "dark" : "light";
    return (
        <nav
        className={
          `navbar navbar-${dark} bg-${dark}` + (className ? " " + className : "")
        }
        >
  <div class="container">
      <a class="navbar-brand" href="/">
      <img src="/logo512.png"
       alt={children + " Logo"}
       className="me-2"
      />
      {children}
    </a>
  </div>
</nav>
    );
};

export default Header
