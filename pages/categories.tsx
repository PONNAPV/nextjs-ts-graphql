import { gql, GraphQLClient } from 'graphql-request';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import graphQLClient from '../GraphQL/graphQLClient';
import { ALL_CATEGORIES, ALL_PRODUCTS } from '../GraphQL/queries';
import { NewLineKind } from 'typescript';
import { SetStateAction, useState } from 'react';
import router from 'next/router';

export const getStaticProps: GetStaticProps = async () => {
  
  const allProducts = await graphQLClient.request(ALL_PRODUCTS);
  const allCategories = await graphQLClient.request(ALL_CATEGORIES);
  
  return {
    props: {allCategories,allProducts}
  };
}

export default function Home({allCategories, allProducts}: any) {
  const [userInput, setUserInput] = useState('')
  const [categoryList, setCategoryList] = useState([]) 

  const handleChange = (e: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
    e.preventDefault()
    setUserInput(e.target.value)
  }

  const handleChecked = (e: any) => {
    e.preventDefault()
    setCategoryList([
      e.target.value,
      ...categoryList
      ])
    console.log(categoryList)
    router.push("/products")
  } 

  return (
    <div className={styles.container}>
      <Head>
        <title>Shopping List App</title>
        <meta name="description" content="Collaborative shopping list app" />
        <link rel="icon" href="/coshopp.ico" />
      </Head>

      <main className={styles.main}>

        <p className={styles.description}>
           Pick your categories below
        </p>

        <div className={styles.grid}>

            {allCategories.categories.map((category: any) =>(
                <form>
                  <input type="checkbox" key={category.categoryId} value={category.categoryId} name={category.categoryName} />
                  <label className={styles.grid}>{category.categoryName}</label><br/>   
                </form>
                  ))
            }

            <button className={styles.button}>Skip n Go</button>
            <button className={styles.button} onClick={handleChecked}>Pick n Go</button>
          </div>
  
      </main>
    </div>
  )
}
