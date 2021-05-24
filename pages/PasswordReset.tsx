import react, { useRef, useState } from 'react'
import 'firebase/auth'
import firebase from './api/firebase'
import React from 'react'
import { Link } from 'react-navi'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

let newpassword = ''
let user = firebase.auth().currentUser;

const passwordChange = () => {
  const [msg, setMsg] = useState('')
  
  const handleChangeNewPassword = (e) => {
    newpassword = e.target.value
  }


  return (
    <div className={styles.container}>
    <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous"/>
    </Head>
    <div>

      <label htmlFor="newpassword" className="block">
        new password:
      </label>
      <input onChange={handleChangeNewPassword} type="password" required />
      <br />

      <button
        onClick={() => {
            firebase.auth().currentUser?.updatePassword(newpassword)
        }}
      >
        Update password
      </button>
      <br />
      <p>{msg}</p>
      <Link href="../MainPage">
        <button>Zpět na hlavní stránku</button>
      </Link>
    </div>
    </div>
  )
}
export default passwordChange
