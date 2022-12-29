import { FC } from 'react'
import Nav from './Nav'
import styles from '../styles/Layout.module.css'
import { ScriptProps } from 'next/script'
import Header from './Header'

const Layout: FC<ScriptProps> = ({ children, ...props }) => {
  return (
    <>
        <div className= {styles.container}>
        <main className={styles.main}>
            <Header/>
            {children}
        </main>
        </div>
        <Nav/>
    </>
  )

}

export default Layout
