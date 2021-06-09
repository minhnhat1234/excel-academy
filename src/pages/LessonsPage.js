import NavBar from '../components/NavBar';
import React from 'react';
import {
	Grid,
	List,
	ListItem,
	Avatar,
	Typography,
	ThemeThem,
	Container,
} from '@material-ui/core';
import { landingTheme } from '../../utils/themes';
import InfoCard from '../components/InfoCard';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	infoCard: {},
}));
export default function LessonsPage() {
	let cards = [];
	for (let i = 1; i <= 100; i++) {
		cards.push(i);
	}
	return (
		<>
			<NavBar />
			<Container>
				<Grid container spacing={4}>
					{cards.map((card, i) => (
						<Grid item xs={12} sm={6} md={4} key={`course-${i}`}>
							<InfoCard />
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
}
