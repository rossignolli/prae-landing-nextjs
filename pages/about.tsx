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
        <title>Prae - Sobre</title>
        <meta
          name="description"
          content="Sistema para gerenciamento de manutenções"
        />
        {/* <!-- Twitter Card data --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@publisher_handle" />
        <meta name="twitter:title" content="Page Title" />
        <meta
          name="twitter:description"
          content="Page description less than 200 characters"
        />
        <meta name="twitter:creator" content="@author_handle" />
        {/* <!-- Twitter summary card with large image must be at least 280x150px --> */}
        <meta
          name="twitter:image:src"
          content="http://www.example.com/image.jpg"
        />
        {/* 
        <!-- Open Graph data --> */}
        <meta property="og:title" content="Title Here" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="http://www.example.com/" />
        <meta property="og:image" content="http://example.com/image.jpg" />
        <meta property="og:description" content="Description Here" />
        <meta property="og:site_name" content="Site Name, i.e. Moz" />
        <meta property="article:section" content="Article Section" />
        <meta property="article:tag" content="Article Tag" />
        <meta property="fb:admins" content="Facebook numberic ID" />
        <link rel="icon" href="/favicon.ico" />
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
