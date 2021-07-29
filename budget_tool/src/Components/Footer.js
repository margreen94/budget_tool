import React from "react";

export default function Footer() {
  const curr_year = new Date().getFullYear();
  return <div className="footer">&copy; {curr_year}</div>;
}
