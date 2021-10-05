import type { NextPage } from "next";

import Image from "next/image";
import React from "react";
import general from "../styles/Home.module.scss";
import styles from "../styles/About.module.scss";

import HeaderComponent from "./components/Header";

const About: NextPage = () => {
  return (
    <div className={general.mainContainer}>
      <HeaderComponent />
      <main className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={"/praelogo.png"}
            width="240"
            height="65"
            alt="Prae logo"
          />
        </div>
        <h1 className={styles.text}>
          Diminuindo custos de manutenção <br /> e aprimorando o suporte
        </h1>
        <p className={styles.description}>
          Como projeto de Trabalho de Conclusão de curso, Prae foi criado para
          propor uma solução fácil, moderna e impolgante.
        </p>
        <p className={styles.description}>
          Nosso desafio é sempre monitorar com precisão seus assets e controlar
          seus custos durante a manutenção.
        </p>
        <div className={styles.credits}>
          <Image src={"/me.png"} width="177" height="172" alt="Foto do Autor" />

          <span className={styles.credits}>Desenvolvido com ❤️ </span>
          <span>
            por <a href="https://github.com/rossignolli">Vitor Rossignolli</a>{" "}
          </span>
        </div>
      </main>
    </div>
  );
};

export default About;
