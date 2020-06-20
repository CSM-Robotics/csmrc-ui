import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const PeopleCard = ({classes, name, title, image}) => { //set empty default value of image
    if (image) image = require(`../../data/images/${image}`); //if there is path for image, create a source url
    return (
        <Paper className={classes.people}>
            <Grid container spacing={2}>
                <Grid item>
                    <Avatar alt={name} src={image} className={classes.peopleImageLarge}/>
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="h6" component="h1">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {title}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default PeopleCard;
