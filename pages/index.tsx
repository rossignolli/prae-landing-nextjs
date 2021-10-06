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
          content="Page description. No longer than 155 characters."
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
