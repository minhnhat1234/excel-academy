import React from 'react';
import { InputBase } from '@material-ui/core';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	searchIcon: {
		marginRight: theme.spacing(1),
	},
	searchBar: {
		color: theme.palette.themeBlack,
		marginRight: theme.spacing(5),
		marginLeft: 'auto',
		cursor: 'pointer',
	},
}));
const StyledSearchbar = styled(InputBase)`
	${({ theme }) => `
	cursor: pointer;
	background-color: ${theme.palette.primary.main};
	color: ${theme.palette.themeBlack};
	margin-right: ${theme.spacing(5)};
	width: 10rem;
	transition: width 200ms ease;
	&:focus-within {
		background-color: ${theme.palette.themeBlack};
		width: 20rem;
	};
`}
`;
export default function NavSearchbar() {
	const classes = useStyles();
	return (
		<StyledSearchbar
			startAdornment={<SearchIcon className={classes.searchIcon} />}
			placeholder="search..."
			className={classes.searchBar}
		/>
	);
}
