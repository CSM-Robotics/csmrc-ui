import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../../images/logo.png"
import "./NavBar.css"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 5,
            backgroundColor: theme.palette.background.paper,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 5,
        },
    });

class NavBar extends React.Component<WithStyles<typeof styles>> {
    state = {
        value: 0
    }


    handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        this.setState({value: newValue})
    }

    render() {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <img src={logo} className="Bar-logo" alt="logo"/>
                        <Typography variant="h6" className={classes.title}>
                            CSM Robotics Club
                        </Typography>
                        <Tabs value={value} onChange={this.handleChange}>
                            <Tab label="Item One"/>
                            <Tab label="Item Two"/>
                            <Tab label="Item Three"/>
                        </Tabs>
                        <Button color="inherit">Login</Button>

                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(NavBar);
