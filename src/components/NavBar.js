import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	ThemeProvider as MUIThemeProvider,
	ClickAwayListener,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { HomeOutlined, AccountCircle } from '@material-ui/icons';
import { ThemeProvider } from 'styled-components';
import { landingTheme as theme } from '../../utils/landingTheme';
import NavSearchbar from './searchbars/navSearchbar';
import { courses } from '../../utils/dummyCourseData';
import React, { useState, useRef } from 'react';
import DropdownMenu from './dropdownMenu';
const useStyles = makeStyles((theme) => ({
	appBarText: {
		flex: 1,
		color: 'primary',
	},

	navbar: {
		backgroundColor: theme.palette.primary,
		color: theme.palette.secondary.light,
	},

	icons: {
		fontSize: '2.65rem',
	},

	toolbarMargin: theme.mixins.toolbar,

	title: {
		color: theme.palette.themeBlack.dark,
		fontSize: '2rem',
		fontWeight: 'fontWeightBold',
		margin: theme.spacing(0, 2, 0),
	},

	accountIcon: {
		color: theme.palette.secondary,
	},

	moreinfo: {
		minHeight: '100%',
		textTransform: 'capitalize',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '9.3333rem',
		margin: '0 1rem',
		padding: '1rem',
		backgroundColor: 'transparent',
		transition: 'all 200ms ease-in-out',
		border: '3px solid transparent',
		'&:hover': {
			backgroundColor: theme.palette.secondary.dark,
			border: `3px solid ${theme.palette.secondary.dark}`,
			borderRadius: '5px',
		},
	},

	infoTabText: {
		fontSize: '1.33333rem',
		color: theme.palette.themeBlack.dark,
	},
	infoWrapper: {
		height: '100%',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'noWrap',
	},
}));

function NavItem(props) {
	const { label } = props;
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const handleClose = () => {
		setOpen(false);
	};
	const handleToggle = () => {
		console.log('Clicked');
		setOpen(!open);
	};
	return (
		<ClickAwayListener onClickAway={handleClose}>
			<div>
				<div className={classes.moreinfo} onClick={handleToggle}>
					<Typography className={classes.infoTabText}>{label}</Typography>
				</div>

				{open && props.children}
			</div>
		</ClickAwayListener>
	);
}
export default function NavBar() {
	const classes = useStyles();
	return (
		<MUIThemeProvider theme={theme}>
			<AppBar className={classes.navbar}>
				<Toolbar>
					<IconButton className={classes.icons} href="#" variant="outlined">
						<HomeOutlined color="secondary" className={classes.icons} />
					</IconButton>
					<Typography className={classes.title} variant="h6" fontFamily="KoHo">
						Excel
					</Typography>
					<div className={classes.infoWrapper}>
						<NavItem label="Courses">
							<div>
								<DropdownMenu courses={courses} />
							</div>
						</NavItem>
						<NavItem label="Discussion">
							<div>
								<DropdownMenu courses={courses} />
							</div>
						</NavItem>
					</div>
					<ThemeProvider theme={theme}>
						<NavSearchbar />
					</ThemeProvider>
					<IconButton marginLeft="auto" className={classes.accountIcon}>
						<AccountCircle color="secondary" className={classes.icons} />
					</IconButton>
				</Toolbar>
			</AppBar>
			<div className={classes.toolbarMargin} />
		</MUIThemeProvider>
	);
}
