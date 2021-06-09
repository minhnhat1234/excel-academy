import LessonsPage from '../../src/pages/LessonsPage';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { landingTheme } from '../../utils/themes';
import LandingPage from '../../src/pages/LandingPage';
import { makeStyles } from '@material-ui/core/styles';

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
			borderRadius: '5px',
		},
	},
}));
export default function Page() {
	const classes = useStyles();
	return (
		<ThemeProvider theme={landingTheme}>
			<LessonsPage />
		</ThemeProvider>
	);
}
