import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    {/* Head Setting Html */}
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>

      {/* Content */}
      <div>
        <h2 className={styles.title}>HomePage</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum soluta
          possimus vitae laborum reiciendis rem itaque quis, reprehenderit
          beatae quidem exercitationem at minima, laboriosam cumque sapiente
          nihil aspernatur similique pariatur.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum soluta
          possimus vitae laborum reiciendis rem itaque quis, reprehenderit
          beatae quidem exercitationem at minima, laboriosam cumque sapiente
          nihil aspernatur similique pariatur.
        </p>

        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
