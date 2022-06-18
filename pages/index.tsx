import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link' //追記
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="title">
          Read{' '}
          <Link href="/samples/sample">
            <a>this page!</a>
          </Link>
        </h1>
      </main>
    </div>
  )
}

export default Home
