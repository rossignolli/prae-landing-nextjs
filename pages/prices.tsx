import type { NextPage } from "next";
import general from "../styles/Home.module.scss";
import HeaderComponent from "./components/Header";
import styles from "../styles/Prices.module.scss";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Head from "next/head";

const Prices: NextPage = () => {
  return (
    <>
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
      <div className={general.mainContainer}>
        <HeaderComponent />
        <main className={general.container}>
          <div className={general.heroAd}>
            <h1 className={styles.subtitlePrice}>Preços</h1>
            <p className={general.description}>
              Esses são nossos planos oferecidos para você ou sua <br /> empresa
              gerenciar seus assets com um CMMS <br /> prático e moderno
            </p>
            <div className={styles.priceContainer}>
              <div className={styles.price}>
                <h2 className={styles.title}>Hob</h2>
                <p className={styles.description}>
                  Ideal para pequenos negócios e pequenos escritórios
                </p>
                <span className={styles.titlePrice}>Grátis</span>
                <ul className={styles.list}>
                  <li>
                    <AiOutlineCheckCircle /> 1 Técnico
                  </li>
                  <li>
                    <AiOutlineCheckCircle /> 20 Equipamentos
                  </li>
                  <li>
                    <AiOutlineCheckCircle /> 20 Procedimentos
                  </li>
                  <li>
                    <AiOutlineCheckCircle /> 2 Categorias
                  </li>
                </ul>
                <div className={general.buttonContainer}>
                  <a href="https://prae.vigarani.dev">
                    <button className={general.purpleButton} onClick={() => {}}>
                      Acessar
                    </button>
                  </a>
                </div>
              </div>
              <div className={styles.price}>
                <h2 className={styles.title}>Teams</h2>
                <p className={styles.description}>
                  Ideal para empresas de pequeno porte
                </p>
                <span className={styles.titlePrice}>R$ 34,49</span>
                <ul className={styles.list}>
                  <li>
                    <AiOutlineCheckCircle /> 10 Técnicos
                  </li>
                  <li>
                    <AiOutlineCheckCircle /> 50 Equipamentos
                  </li>
                  <li>
                    <AiOutlineCheckCircle /> 50 Procedimentos
                  </li>
                  <li>
                    <AiOutlineCheckCircle /> 50 Categorias
                  </li>
                </ul>
                <div className={general.buttonContainer}>
                  <button className={general.purpleButton}>Em breve</button>
                </div>
              </div>
              <div className={styles.price}>
                <h2 className={styles.title}>Enterprise</h2>
                <p className={styles.description}>
                  Pronto para escalar, grandes empresas.
                </p>
                <span className={styles.titlePrice}>R$ 99,49</span>
                <ul className={styles.list}>
                  <li>
                    <AiOutlineCheckCircle /> Técnicos Ilimitados
                  </li>
                  <li>
                    <AiOutlineCheckCircle /> Equipamentos Ilimitado
                  </li>
                  <li>
                    <AiOutlineCheckCircle /> Procedimentos Ilimitado
                  </li>
                  <li>
                    <AiOutlineCheckCircle /> Categorias Ilimitado
                  </li>
                </ul>
                <div className={general.buttonContainer}>
                  <button className={general.purpleButton}>Em breve</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Prices;
