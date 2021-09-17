import React from 'react'

const Header = ({ dark, children, className }) => {
  dark = !!dark ? "dark" : "light";
    return (
        <nav
        className={
          `navbar navbar-${dark} bg-${dark}` + (className ? " " + className : "")
        }>
  <div class="container">
      <a class="navbar-brand" href="/">
      <img src="/logo512.png"
       alt={children + " Logo"}
       className="me-2"/>
      {children}
    </a>
    <div className="UserMeta">
    <a href="/">
      <img src="https://s3-us-west-2.amazonaws.com/nv-uploaded-avatars/prod/6b829300-109a-4be3-abf1-f06016e89a83.png" alt="H"/>
      Hemanth
      </a>
      <span className="nav-links">
      <a href="/">Home</a>
      <a href="/">Create</a>
      </span>
    </div>
  </div>
</nav>
    );
};

export default Header
