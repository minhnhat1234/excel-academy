import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Button,
	Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { calcPercent } from '../../utils/helperFunctions/calcPercent';
const useStyles = makeStyles((theme) => ({
	cardButtons: {
		color: 'black',
	},

	cardImages: {
		height: '13rem',
		paddingTop: '56.25%',
	},

	cardImagesFeatured: {
		// paddingTop: '56.25%',
		height: '20rem',
	},
}));
export default function InfoCard({ type }) {
	const classes = useStyles();
	const getCls = () => {
		if (type == 'featured') {
			return classes.cardImagesFeatured;
		} else {
			return classes.cardImages;
		}
	};
	return (
		<Card>
			<CardMedia
				className={getCls()}
				image="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
			/>
			<CardContent>
				<Typography variant={type == 'featured' ? 'h4' : 'h6'} gutterBottom>
					Welcome to MiniKhan
				</Typography>
				<Typography variant={type == 'featured' ? 'body1' : 'body2'} paragraph>
					Suspendisse sollicitudin porta dictum. Integer ac fermentum dolor.
					Nunc at posuere nisi, vel interdum sem. Etiam nisl purus, laoreet sit.
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					className={classes.cardButtons}
					variant="contained"
					color="secondary"
				>
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
}
