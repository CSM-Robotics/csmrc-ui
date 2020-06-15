import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {createStyles, Theme, withStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {withRouter} from "react-router-dom";
import {WithStyles} from "@material-ui/core/styles/withStyles";
import {RouteComponentProps} from "react-router";
import {PageContainer} from "../App/App";
import logo from "../../images/logo.png"
import "./NavBar.css"

// Style for navigation bar
// it is default one from material ui example
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

// Navigation Bar Components
// uses withStyles from material-ui to load style and withRouter from react-router to get/set url path
// gets pages list with path and names of pages (later icons may be added)
class NavBar extends React.Component<{ pages: (PageContainer)[] } & RouteComponentProps & WithStyles, { value: number }> {
    // state has value field indicating active tab
    constructor(props: any) {
        super(props);
        const {pages} = props;
        const {location} = props;
        const {pathname} = location;
        // finding active page based on current pathname default parameter is set to 0
        // need to pass default instead of hard code
        let page = pages.findIndex(({path}: any) => pathname.startsWith(path))
        page = page === -1 ? 0 : page;
        this.state = {
            value: page
        };
    }

    //updates active tab and push new path
    handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        const {history, pages} = this.props;
        this.setState({value: newValue})
        //changes url based on path provided in pages array
        history.push(`${pages[newValue].path}`)
    }

    render() {
        const {classes, pages} = this.props;
        const {value} = this.state;

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
                        {/*    <MenuIcon/>*/}
                        {/*</IconButton>*/}

                        <img src={logo} className="Bar-logo" alt="logo"/>

                        <Typography variant="h6" className={classes.title}>
                            CSM Robotics Club
                        </Typography>

                        {/*iterate throw pages array and creates tab for each page*/}
                        <Tabs value={value} onChange={this.handleChange}>
                            {pages.map((item, index) => {
                                const {tab_text} = item;
                                return (<Tab key={index} label={tab_text}/>);
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
