import { Typography, Card, CardActions, CardMedia, CardContent, Grid, Container, AppBar, Toolbar, ThemeProvider, IconButton, Button, Paper, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Facebook, FacebookIcon, Instagram, LinkedIn } from '@material-ui/icons';
import { landingTheme } from '../../utils/landingTheme';


const useStyles = makeStyles(theme => ({
    footer1: {
        position: 'relative',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.secondary.light, 
        height: '750px',
    },

    footer2: {
        position: 'relative',
        backgroundColor: theme.palette.primary,
        color: theme.palette.themeBlack,    
        height: '75px', 
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    footerDivider: {
        background: theme.palette.secondary.light,
    }, 

    footerIcons: {
        color: theme.palette.themeDark,
    },
    
    footerContact: {
        backgroundColor: theme.palette.primary,
        color: theme.palette.themeDark,
        alignSelf: 'flex-start',
        margin: theme.spacing(2)
    }
}))
export default function Footer() {
    const classes = useStyles()
    return (
        <ThemeProvider theme={landingTheme}>
            <Divider classes={{root: classes.footerDivider}}/>
            <Grid container className={classes.footer2}>
                <Grid item className={classes.footerContact}>
                    <Typography variant = 'body2'>Contact Us</Typography>
                </Grid>
                <IconButton>
                    <Facebook className={classes.footerIcons}/>
                </IconButton>
                <IconButton>
                    <Instagram className={classes.footerIcons}/>
                </IconButton>
                <IconButton>
                    <LinkedIn className={classes.footerIcons}/>
                </IconButton>
            </Grid>
        </ThemeProvider>
    )
};