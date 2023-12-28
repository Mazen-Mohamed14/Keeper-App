import React from "react";

function Footer() {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  return (
    <footer>
      <p>Copyright {year}</p>
    </footer>
  );
}

export default Footer;
