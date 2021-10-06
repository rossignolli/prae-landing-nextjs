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
                  <button className={general.purpleButton}>Acessar</button>
                </div>
              </div>
              <div className={styles.price}>
                <h2 className={styles.title}>Teams</h2>
                <p className={styles.description}>
                  Ideal para empresas de pequeno porte
                </p>
                <span className={styles.titlePrice}>Grátis</span>
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
                <span className={styles.titlePrice}>Grátis</span>
                <ul className={styles.list}>
                  <li>
                    <AiOutlineCheckCircle /> 50 Técnicos
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
