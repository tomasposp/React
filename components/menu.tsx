import { FC } from 'react'
import styled from 'styled-components'
import { spacings } from './theme'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import 'firebase/auth'
import firebase from '../pages/api/firebase'

const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  background-color: White;
  border-left: solid 0px;
  border-right: solid 0px;
  border-top: solid 0px;
  border-bottom: solid 0.5px;
  border-color: black;
  color: black;
  padding: ${spacings.s};
  text-align: center;
  word-spacing: 10px;
`
const LogOut = () => {
  firebase.auth().signOut()
  location.reload(true)
}

export default LogOut

export const Menu: FC = () => {
  if (firebase.auth().currentUser) {
    return (
      <Wrapper>
        <Link href="../Grafy">graf</Link> &emsp;
        <Link href="/">index</Link> &emsp;
        <Link href="../MainPage">MainPage</Link>&emsp;
        <div className={styles.Menu}></div>
        <div className={styles.Signup}>
          <button className={styles.Signup}
            onClick={LogOut}
          >Log out</button>
        </div>
        &emsp;&emsp;
        <Link href="../UserPage">Profil</Link>
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <Link href="../Grafy">graf</Link> &emsp;
        <Link href="/">index</Link> &emsp;
        <Link href="../MainPage">MainPage</Link>&emsp;
        <div className={styles.Menu}></div>
        <div className={styles.Signup}>
          <Link href="../SignUp">Registrace</Link>
        </div>
        &emsp;
        <Link href="../Login">Přihlásit se</Link>
      </Wrapper>
    )
  }
}
