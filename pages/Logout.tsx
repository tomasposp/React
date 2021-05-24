import react, { useRef, useState } from 'react'
import 'firebase/auth'
import firebase from './api/firebase'
import React from 'react'
import { Link } from 'react-navi'

const LogOut = () => {
  firebase.auth().signOut()
  return <Link href="../MainPage">Zpět na hlavní stránku</Link>
}

export default LogOut
