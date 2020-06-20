import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const MainContentCard = ({classes, title, text}) => {
    return (
        <Box className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h1">
                {title}
            </Typography>
            <Typography gutterBottom variant="body2" component="p">
                {text}
            </Typography>
        </Box>
    )
}
export default MainContentCard;
