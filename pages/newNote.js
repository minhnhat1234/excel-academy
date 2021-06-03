import React from 'react'
import styles from '../styles/Home.module.css'
import { withStyles, AppBar, Toolbar, Typography, IconButton, ThemeProvider } from '@material-ui/core'

import { makeStyles } from '@material-ui/core'
import NavBar from "../src/components/NavBar"
import { brightTheme } from '../utils/themes'

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
    root: {
      flexGrow: 1,
    },
  }))
  

export default function Note() {
    const classes = useStyles()
    return (
      <ThemeProvider theme={brightTheme}>
        <NavBar />
      </ThemeProvider>
    )
  }
  