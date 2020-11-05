import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p style={{ fontSize: "1.2rem", maxWidth: "60%" }}>
          Goal: the screenshot should be rendered with a crisp rendering, like
          the{" "}
          <a
            href="/screenshot-browser.png"
            style={{ textDecoration: "underline" }}
          >
            original image
          </a>
          . Without blur, on all devices (retina included). I managed to achieve
          this only if I set imageSizes: [2000] in next.config.js. Otherwise the
          image is always scaled to some deviceSizes that are not making it look
          crisp.
        </p>
        <div style={{ maxWidth: "2000px", margin: "2em auto" }}>
          <Image
            alt="Screenshot of the TurnShift UI"
            height={1037}
            src="/screenshot-browser.png"
            width={2000}
          />
        </div>

        <p style={{ fontSize: "1.2rem", maxWidth: "60%" }}>
          If I set the image to be as large as one of the deviceSizes (2048)
          then it works.
        </p>

        <div style={{ maxWidth: "2048px", margin: "2em auto" }}>
          <Image
            alt="Screenshot of the TurnShift UI"
            height={1062}
            src="/screenshot-browser.png"
            width={2048}
          />
        </div>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
