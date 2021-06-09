import React, { useState } from 'react';
import {
	ListItem,
	List,
	Paper,
	Typography,
	ClickAwayListener,
	Divider,
	IconButton,
} from '@material-ui/core';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { landingTheme } from '../../utils/themes';
import Link from 'next/link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import clsx from 'clsx';
const useStyles = makeStyles((theme) => ({
	extra: {
		position: 'absolute',
		top: theme.mixins.toolbar,
	},
	wrapper: {
		display: 'flex',
		backgroundColor: theme.palette.secondary.light,
		width: '11.33333rem',
		color: 'black',
		transition: 'all 0.3s ease-in-out',
		padding: theme.spacing(1.5),
		flexWrap: 'noWrap',
		'&:hover': {
			backgroundColor: theme.palette.secondary.main,
		},
	},
	iconWrapper: {
		marginLeft: 'auto',
	},
	subExpand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	subExpanded: {
		transform: 'rotate(-90deg)',
	},
}));

function DropdownItem({ course }) {
	const classes = useStyles();
	const { label, type } = course;
	if (type == 'expandable') {
		const { subCourses } = course;
		const [subOpen, setSubOpen] = useState(false);
		const handleOpen = () => {
			setSubOpen(true);
		};
		const handleClose = () => {
			setSubOpen(false);
		};
		const childWrapperStyles = {
			styles: {
				position: 'absolute',
				left: '99.5%',
				// transform: `translateY(-${100 / props.contentCount}%)`,
				top: '0',
			},
		};
		return (
			<Link href="#">
				<div style={{ position: 'relative' }}>
					<div className={classes.wrapper}>
						<Typography>{label}</Typography>
						<div onMouseEnter={handleOpen} className={classes.iconWrapper}>
							<ExpandMoreIcon
								className={clsx(classes.subExpand, {
									[classes.subExpanded]: subOpen,
								})}
							/>
						</div>
					</div>
					<div
						style={{ ...childWrapperStyles.styles }}
						onMouseLeave={handleClose}
					>
						{subOpen && (
							<div>
								{Object.keys(subCourses).map((subCourse, index) => (
									<DropdownItem
										course={subCourses[subCourse]}
										key={`subcourse-${index}`}
									/>
								))}
							</div>
						)}
					</div>
				</div>
			</Link>
		);
	}
	return (
		<Link href="#">
			<div className={classes.wrapper}>
				<Typography>{label}</Typography>
			</div>
		</Link>
	);
}

export default function DropdownMenu(props) {
	const courses = props.courses;
	const classes = useStyles();

	return (
		<MuiThemeProvider theme={landingTheme}>
			<div className={classes.extra}>
				{Object.keys(courses).map((course, id) => (
					<DropdownItem course={courses[course]} key={`course-${id}`} />
				))}
			</div>
		</MuiThemeProvider>
	);
}
