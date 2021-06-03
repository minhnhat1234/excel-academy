import React from 'react'
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core'
import LandingPage from '../src/pages/LandingPage'

const useStyles = makeStyles((brightTheme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4rem',
    },
    '*::-webkit-scrollbar-track': {
      backgroundColor: '#2a2b2e',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#ffcc5c',
      border: '1px solid #ffcc5c',
      borderRadius: '5px'
    }
  },
}))

export default function Home() {
  const classes = useStyles()
  return (
    <>
      <LandingPage />
    </> 
  )
}
