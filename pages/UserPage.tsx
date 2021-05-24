import { Menu } from '../components/menu'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import 'firebase/auth'
import firebase from './api/firebase'
import React from 'react'
import { Link } from 'react-navi'



export default function Page() {

    
    const user = firebase.auth().currentUser!;
    const {email} = user;


  return (
    <div className={styles.container}>
      <Head>
        <title>Profile</title>
      </Head>
      <Menu />
      <main className={styles.User}>
        <h1 className={styles.title}>Profil</h1>
        <p>
          <h2 className={styles.title2}>
            {email}
          </h2> 
          <Link href="../MainPage">
          <button
        onClick={() => {
            user.delete()
        }}
      >
          Delete
          </button>
          </Link>

          <Link href="../PasswordReset">
              <button>Změna hesla</button>
          </Link>


        </p>
      </main>
    </div>
  )
}



