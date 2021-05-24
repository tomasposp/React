import react, { useRef, useState } from 'react'
import 'firebase/auth'
import firebase from './api/firebase'
import React from 'react'
import { Link } from 'react-navi'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

let email = ''
let password = ''


const SignUp = () => {
  const [msg, setMsg] = useState('')

  const handleChangeEmail = (e) => {
    email = e.target.value
    console.log(email)
  }
  const handleChangePassword = (e) => {
    password = e.target.value
  }

  return (
    <div className={styles.container}>
    <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous"/>
    </Head>

    <div>
      <label htmlFor="userEmail" className="block">
        Email:
      </label>&emsp;&emsp;
      <input onChange={handleChangeEmail} type="email" required />
      <br />
      <div className={styles.password}>
      <label htmlFor="userPassword" className="block">
         Password: 
      </label>
       </div>
      <input onChange={handleChangePassword} type="password" required />
      <br />
      <button
        onClick={() => {
          setMsg('Byl jste úspěšně zaregistrován')
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(() => {
              setMsg('Registrace neproběhla')
            })
        }}
      >
        Sign up
      </button>
      <p>{msg}</p>
    
      <Link href="../MainPage">
        <button>Zpět na hlavní stránku</button>
      </Link>
    </div>
    </div>
  )
}
export default SignUp
