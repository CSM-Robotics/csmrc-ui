import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
//custom component
import MapContainer from "./xSubComponents/MapContainer"

const LocationCard = ({ classes }) => {
    return (
        <Card className={classes.root}>
            <CardContent className={classes.leftAlign}>
                {/* //gutterBottom to make bottom margin */}
                <Typography gutterBottom variant="h5" component="h2">
                    Our Location
                </Typography>
                <Typography variant="body2" component="p">
                    Our meetings are held at the CSM Library Makerspace.
                    <br /> The Makerspace is located on the left side when you enter the library on the second floor of Building 9.
                    <br /> Address:
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    CSM Library - Building 9,
                    1700 W Hillsdale Blvd,
                    San Mateo, CA 94402
                </Typography>
            </CardContent>
            <CardMedia> <MapContainer classes={classes} /> </CardMedia>
            <CardActions>
                <Button size="small" href="mailto:mail@example.com">Contact Us</Button>
            </CardActions>
        </Card>
    )
}

export default LocationCard;