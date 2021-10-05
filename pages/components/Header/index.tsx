import React from "react";
import styles from "../../../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function HeaderComponent() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.imageContainer}>
          <Image
            src={"/praelogo.png"}
            width="112"
            height="30"
            alt="Prae logo"
          />
        </div>
        <Link href={"/"} passHref>
          <a>Home</a>
        </Link>
        <Link href={"/about"} passHref>
          <a>Sobre</a>
        </Link>
        <Link href={"/prices"} passHref>
          <a>Preços</a>
        </Link>
      </header>
    </>
  );
}
