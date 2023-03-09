import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        &copy; {year} Ian Mosley -{" "}
        <a href="https://www.flaticon.com/free-icons/minim" title="minim icons">
          Minim icons created by Freepik - Flaticon
        </a>{" "}
        <a
          href="https://www.flaticon.com/free-icons/whole-note"
          title="whole note icons"
        >
          Whole note icons created by Freepik - Flaticon
        </a>{" "}
        <a
          href="https://www.flaticon.com/free-icons/crotchet"
          title="crotchet icons"
        >
          Crotchet icons created by Freepik - Flaticon
        </a>{" "}
        <a
          href="https://www.flaticon.com/free-icons/musical-note"
          title="musical note icons"
        >
          Musical note icons created by Pixel perfect - Flaticon
        </a>
      </p>
    </footer>
  );
}
