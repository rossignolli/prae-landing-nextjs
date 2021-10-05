import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import React from "react";
import styles from "../styles/Home.module.scss";
import HeaderComponent from "./components/Header";

const Home: NextPage = () => {
  return (
    <div className={styles.mainContainer}>
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
            <button className={styles.purpleButton}>Saiba mais</button>
            <button className={styles.minimalButton}>Demonstração</button>
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
