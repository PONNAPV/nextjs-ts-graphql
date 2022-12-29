import { NextPage } from 'next';
import styles from '../styles/Layout.module.css'
import { useRouter } from "next/router";
import { useCallback } from "react";
import Image from 'next/image';
import Head from 'next/head';
import headerStyles from '../styles/Header.module.css'

const startScreen: NextPage = () => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/categories");
  }, [router]);

  return (

        <div className={styles.container}  onClick={onFrameContainerClick}>      
          <Head>
            <title>Shopping List App</title>
            <meta name="description" content="Collaborative shopping list app" />
            <meta name="keywords" content="shopping list, grocery list, collaborative tool, store pickup"></meta> 
            <link rel="icon" href="/coshopp.ico" />
          </Head>
          <main className={styles.main}>
          <div>
            <h1 className={headerStyles.title}>
                <p className={headerStyles.description}>
                Welcome to the Collaborative Shopping Experience!
                </p>
            </h1>
          </div>
            <div>
              <Image className={styles.coshoppLogoBlkbg1Icon} alt="logo" src="/coshopplogoblkbg-1@2x.png" width={192}  height={192}
                />
            </div>
          </main>
          <footer className={styles.footer}>
            <a
              href="http://coshopp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
            {'© Coshopp '}
            <span className={styles.logo}>
              <Image src="/coshopplogoblkbgnotxtnobg-3@2x.png" alt="coshopp Logo" width={72} height={16} />
            </span>
            </a>
         </footer>
      </div>
  );
};

export default startScreen;