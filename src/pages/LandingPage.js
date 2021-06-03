import { Typography, Card, CardActions, CardMedia, CardContent, Grid, Container, AppBar, Toolbar, ThemeProvider, IconButton, Button, Paper, Icon } from '@material-ui/core';
import Link from 'next/Link'
import React from 'react';
import { makeStyles } from '@material-ui/core'
import  images  from '../../public/images'
import { landingTheme } from '../../utils/landingTheme';
import InfoCard from '../components/InfoCard';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Slider from '../components/slider/Slider'
import Logo from '../../utils/logo'

const useStyles = makeStyles(theme => ({
    bgRoot: {
        // position: 'sticky',
        // position: '-webkit-sticky',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${images.bg_image})`, 
       height: '100vh',
        
    },

    navbar: {
        backgroundColor: theme.palette.primary,
        color: theme.palette.secondary.light,
    },

    icons: {
        fontSize: '30px'
    },

    toolbarMargin: theme.mixins.toolbar,

    cardImages: {
        height: '300px'
    },

    cardButtons: {
        color: 'black',
    },

    rootCard: {
        padding: theme.spacing(4, 0, 4),
        // position: 'absolute',
        justifyContent: 'center',
        flexGrow: 1, 
    },

    secondaryGridContainer: {
        display: 'flex',
        justifyContent: 'center',
    },

    slogan1: {
        fontWeight: '1000',
        color: '#F7EBE8',
        letterSpacing: 6,
        fontStyle: 'oblique',
        marginLeft: 'auto',
        fontSize: '100px'
    },

    slogan2: {
        marginLeft: theme.spacing(8),
        fontWeight: '800',
        color: '#F7EBE8',
        letterSpacing: 4,
        fontStyle: 'oblique',
        fontSize: '90px'
    },

    slogans: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingLeft: '920px',
        paddingTop: '150px',
    },

    courseLayout: {
        backgroundColor: landingTheme.palette.primary.main,
        height: '40vh',
    },

    separator: {
        backgroundColor: landingTheme.palette.primary.main,
        height: '5vh'
    },

    excelLogo: {
        backgroundColor: 'transparent',
        position:'absolute',
        marginTop: '-30rem'
    }
}));

const SliderProps = {
    zoomFactor: 0, // How much the image should zoom on hover in percent
    slideMargin: 10, // Margin on each side of slides
    maxVisibleSlides: 4,
    pageTransition: 500 // Transition when flipping pages
  };

function Slogan () {
    const classes = useStyles()
    return (
    <Container >
            <Grid container className={classes.slogans}>
                <Grid item> 
                    <Typography variant='h1' className={classes.slogan1}>For students,</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h2' className={classes.slogan2}>from students.</Typography>
                </Grid>
            </Grid>
        </Container>
        )
};

const cards = [1, 2, 3, 4, 5, 6, 7, 8]
export default function LandingPage() {
    const classes = useStyles()
    return(
        <ThemeProvider theme={landingTheme}>
        <NavBar/>
        <div className={classes.bgRoot}>
            <Slogan/>
            <div className={classes.excelLogo}>
                <Logo />
            </div>
        </div>
        <div className={classes.separator}>
        </div>
        <div className={classes.courseLayout}>
        <Container maxWidth="xl">
            <Grid container spacing={4} justify='space-between'>
                <Slider {...SliderProps}>
                    {cards.map((card, i) => (
                            <Grid item className={classes.normalCard} key={card}>
                                <InfoCard />
                            </Grid>
                    ))}
                </Slider>
            </Grid>
        </Container>
        </div>
        <div className={classes.separator}>
        </div>
        <div className={classes.courseLayout}>
        <Container maxWidth="xl">
            <Grid container spacing={4} justify='space-between'>
                <Slider {...SliderProps}>
                    {cards.map((card, i) => (
                            <Grid item className={classes.normalCard} key={card}>
                                <InfoCard />
                            </Grid>
                    ))}
                </Slider>
            </Grid>
        </Container>
        </div>
        <Footer />
        </ThemeProvider>
    )
};
{/* <Container maxWidth='xl' >
                <Grid
                container
                className={classes.rootCard}
                spacing={4}>
                    <Grid item xs={12} md={9}>
                        <InfoCard type = 'featured' />
                    </Grid>
                </Grid>
        </Container>

        <Container maxWidth="xl">
            <Grid container spacing={4} justify='space-between'>
                {cards.map((card, i) => (
                        <Grid item xs = {12} md = {6} lg = {3} className={classes.normalCard} key={card}>
                            <InfoCard />
                        </Grid>
                ))}
            </Grid>
        </Container> */}