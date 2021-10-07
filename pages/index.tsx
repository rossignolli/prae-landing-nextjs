import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import styles from "../styles/Home.module.scss";
import HeaderComponent from "./components/Header";

const Home: NextPage = () => {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Prae - Gerenciamento de Assets</title>
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
        <div className={styles.heroAd}>
          <h1 className={styles.title}>
            Gerenciando seus assets com <b>Prae</b>
          </h1>
          <p className={styles.description}>
            Prae é um CMMS simplificado e descomplicado para gerenciamento de
            <br />
            manutenções preventivas e corretivas, construido em cima de uma
            <br />
            plataforma moderna com tecnologia de ponta.
            <br />
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.purpleButton}>
              <a href="https://prae.vigarani.dev">Demonstração</a>
            </button>
            <Link href="/prices">
              <button className={styles.minimalButton}>Saiba mais</button>
            </Link>
          </div>

          <div className={styles.numbersContainer}>
            <h2 className={styles.subtitle}>Nossos números</h2>
            <p className={styles.description}>
              Empresas do mundo inteiro confiam seus assets em nosso produto
            </p>
            <div className={styles.containerMaintenance}>
              <div className={styles.numberHightlight}>
                <span>25</span>
                <span>Preventivas</span>
              </div>
              <div className={styles.numberHightlight}>
                <span>25</span>
                <span>Corretivas</span>
              </div>
              <div className={styles.numberHightlight}>
                <span>25</span>
                <span>Assets</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
