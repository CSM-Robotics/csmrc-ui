import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
//custom components
import MainCard from './subComponents/MainCard';
import LocationCard from './subComponents/LocationCard';
//import json files
import people from './data/people.json';
import content from './data/content.json';

//Material Ui syntax of styling
const useStyles = makeStyles((theme) => ({
    marginTop: {
        marginTop: 20
    },
    leftAlign: {
        textAlign: "left"
    },
    centerAlign: {
        textAlign: "left"
    },
    emailButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin: 15,
    },
    cardContent: {
        marginTop: 20,
    },
    people: {
        margin: 10,
        padding: 20,
    },
    peopleImageLarge: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    }
}));



const AboutUs = () => {
    const classes = useStyles();
    //also we get people, content from importing json files

    return (

        <div>
            <CssBaseline />
            <Container maxWidth="lg" >
                <Typography gutterBottom variant="h4" component="h1" className={classes.marginTop}>
                    College of San Mateo Robotics Club
                </Typography>
                <Grid container spacing={3} className={classes.marginTop}>
                    {/* main content card */}
                    <Grid item xs={12} sm={8}>
                        <MainCard classes={classes} people={people} content={content} />
                    </Grid>
                    {/* location card */}
                    <Grid item xs={12} sm={4}>
                        <LocationCard classes={classes} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default AboutUs;
