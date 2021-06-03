import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	ThemeProvider,
	InputBase,
	Grid,
	Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';
import { brightTheme } from '../../utils/themes';
import SearchIcon from '@material-ui/icons/Search';
import { HomeOutlined, AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	searchBar: {
		'& :hover': {
			backgroundColor: theme.palette.primary.light,
		},
		'& :focus': {
			backgroundColor: theme.palette.primary.light,
			width: '20rem',
		},
		color: theme.palette.themeBlack,
		marginRight: theme.spacing(5),
	},
	appBarText: {
		flex: 1,
		color: 'primary',
	},
	searchIcon: {
		marginRight: theme.spacing(1),
	},

	navbar: {
		backgroundColor: theme.palette.primary,
		color: theme.palette.secondary.light,
	},

	icons: {
		fontSize: '40px',
	},

	toolbarMargin: theme.mixins.toolbar,

	title: {
		color: theme.palette.themeBlack.dark,
		fontSize: '30px',
		fontWeight: 'fontWeightBold',
		margin: theme.spacing(0, 2, 0),
	},

	accountIcon: {
		color: theme.palette.secondary,
		marginLeft: 'auto',
	},

	moreinfo: {
		minHeight: '64px',
		textTransform: 'capitalize',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '140px',
		outerHeight: '100%',
		marginLeft: '56px',
		'&:hover': {
			backgroundColor: theme.palette.secondary.dark,
		},
	},

	infoTabText: {
		fontSize: '20px',
		color: theme.palette.themeBlack.dark,
	},
}));

export default function NavBar() {
	const classes = useStyles();
	const onClickTab = () => {
		console.log('Clicked');
	};
	return (
		<>
			<AppBar className={classes.navbar}>
				<Toolbar>
					<IconButton className={classes.icons} href="#" variant="outlined">
						<HomeOutlined color="secondary" className={classes.icons} />
					</IconButton>
					<Typography className={classes.title} variant="h6" fontFamily="KoHo">
						Excel
					</Typography>
					<Grid container>
						<Button
							className={classes.moreinfo}
							onClick={() => {
								console.log('Clicked');
							}}
							disableRipple
						>
							<Typography className={classes.infoTabText}>Courses</Typography>
						</Button>
						<Button className={classes.moreinfo} disableRipple>
							<Typography className={classes.infoTabText}>
								Discussion
							</Typography>
						</Button>
					</Grid>
					<InputBase
						placeholder="search..."
						startAdornment={<SearchIcon className={classes.searchIcon} />}
						className={classes.searchBar}
					/>
					<IconButton marginLeft="auto" className={classes.accountIcon}>
						<AccountCircle color="secondary" className={classes.icons} />
					</IconButton>
				</Toolbar>
			</AppBar>
			<div className={classes.toolbarMargin} />
		</>
	);
}
