import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const eachLink = links.map((link, id) => <a href={'#'+ link} key={id}>{link}</a>)

  return <nav>{eachLink}</nav>;
}

export default NavBar;
