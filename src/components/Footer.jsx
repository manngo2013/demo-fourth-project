import React from "react";
import styles from "./Footer.module.scss";

function Footer(props) {
  return (
    <footer className={styles.container}>
      <p>
        &copy; 2023 Copyright by Hoclaptrinhonline.net
        <ul>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Policy & Terms</a>
          </li>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
