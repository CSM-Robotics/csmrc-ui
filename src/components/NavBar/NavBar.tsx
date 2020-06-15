import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {createStyles, Theme, withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../../images/logo.png"
import "./NavBar.css"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {withRouter} from "react-router-dom";
import {WithStyles} from "@material-ui/core/styles/withStyles";
import {RouteComponentProps} from "react-router";
import {PageContainer} from "../App/App";

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

class NavBar extends React.Component<{ pages: (PageContainer)[] } & RouteComponentProps & WithStyles, { value: number }> {

    constructor(props: any) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        const {history, pages} = this.props;
        this.setState({value: newValue})
        console.log(pages[newValue].path)
        history.push(`${pages[newValue].path}`)
    }

    render() {
        const {classes, pages} = this.props;
        const {value} = this.state;

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <img src={logo} className="Bar-logo" alt="logo"/>
                        <Typography variant="h6" className={classes.title}>
                            CSM Robotics Club
                        </Typography>
                        <Tabs value={value} onChange={this.handleChange}>
                            {pages.map((item, index) => {
                                const {text} = item;
                                return (<Tab key={index} label={text}/>);
                            })}
                        </Tabs>
                        {/*<Button color="inherit">Login</Button>*/}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(withRouter(NavBar));
