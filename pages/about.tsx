import type { NextPage } from "next";

import Image from "next/image";
import React from "react";
import general from "../styles/Home.module.scss";
import styles from "../styles/About.module.scss";

import HeaderComponent from "./components/Header";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <div className={general.mainContainer}>
      <Head>
        <title>Prae - Preços</title>
        <meta
          name="description"
          content="Sistema para gerenciamento de manutenções"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Gerencia manutenções com precisão em equipe, aumente a vida útil dos seus assets e diminua o downtime da sua empresa. Seus assets prontos para produzir."
        />
        {/* <!-- Twitter Card data --> */}
        <meta
          name="twitter:card"
          content="https://static-prae.s3.us-east-2.amazonaws.com/Others/praelogoog.png"
        />
        <meta name="twitter:site" content="@prae" />
        <meta
          name="twitter:title"
          content="Prae - Sistema de Gerenciamento de manutenção"
        />
        <meta
          name="twitter:description"
          content="Gerencia manutenções com precisão em equipe, aumente a vida útil dos seus assets e diminua o downtime da sua empresa. Seus assets prontos para produzir."
        />
        <meta name="twitter:creator" content="@prae" />
        {/* <!-- Twitter summary card with large image must be at least 280x150px --> */}
        <meta
          name="twitter:image:src"
          content="https://static-prae.s3.us-east-2.amazonaws.com/Others/praelogoog.png"
        />
        {/* 
        <!-- Open Graph data --> */}
        <meta
          property="og:title"
          content="Prae - Sistema de Gerenciamento de manutenção"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="app.prae.vigarani.dev" />
        <meta
          property="og:image"
          content="https://static-prae.s3.us-east-2.amazonaws.com/Others/praelogoog.png"
        />
        <meta
          property="og:description"
          content="Gerencia manutenções com precisão em equipe, aumente a vida útil dos seus assets e diminua o downtime da sua empresa. Seus assets prontos para produzir. "
        />
        <meta property="og:site_name" content="Prae" />
        <meta property="article:section" content="Prae" />
        <meta property="article:tag" content="CMMS" />
      </Head>
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
