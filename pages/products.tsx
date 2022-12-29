import { gql, GraphQLClient } from 'graphql-request';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import graphQLClient from '../GraphQL/graphQLClient';
import { ALL_CATEGORIES, ALL_PRODUCTS } from '../GraphQL/queries';
import { NewLineKind } from 'typescript';
import ProductList from '../components/ProductList';

export const getStaticProps: GetStaticProps = async () => {
  
  const allProducts = await graphQLClient.request(ALL_PRODUCTS);
  const allCategories = await graphQLClient.request(ALL_CATEGORIES);

  return {
    props: {allCategories,allProducts}
  };
}

export default function Home({allCategories, allProducts}: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shopping List App</title>
        <meta name="description" content="Collaborative shopping list app" />
        <link rel="icon" href="/coshopp.ico" />
      </Head>

      <main className={styles.main}>

        <p className={styles.description}>
           Pick your categories{' '}
          <code className={styles.button}>below </code>
        </p>
          <div className={styles.grid}>
            <ProductList allProducts={allProducts} />
        </div>
      </main>
    </div>
  )
}
