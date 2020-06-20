import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
//custom components
import MainContentCard from './xSubComponents/MainContentCard';
import PeopleCard from './xSubComponents/PeopleCard';

const MainCard = ({classes, content, people}) => {
    return (
        <Card className={clsx(classes.root, classes.leftAlign)}>
            <CardContent>
                {/* Main Content Cards */}
                <Box className={classes.cardContent}>
                    {content.map(c => (
                        <MainContentCard key={c.title} title={c.title} text={c.text} classes={classes}/>))}
                </Box>

                {/* email button */}
                <Grid container justify="center">
                    <Button className={classes.emailButton} href="mailto:mail@example.com">Email Us!</Button>
                </Grid>

                {/* Our people */}
                <Box className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h1">
                        Our People
                    </Typography>
                    {people.map(p => (
                        <PeopleCard key={p.name} name={p.name} title={p.title} image={p.image} classes={classes}/>))}
                </Box>
            </CardContent>
        </Card>
    )
}


export default MainCard;
