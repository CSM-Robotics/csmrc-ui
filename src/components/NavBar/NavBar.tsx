import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import logo from "../../images/logo.png"
import "./NavBar.css"

const NavBar = () => {
    return (
        <div>
            <AppBar position="static" className="NavBar">
                <Toolbar>
                    {/*<img src={logo} className="Bar-logo"/>*/}
                    <Typography variant="subtitle1" color="inherit">
                        Test
                    </Typography>
                    {/*<Typography variant="subtitle1" color="">*/}
                    {/*    Test2*/}
                    {/*</Typography>*/}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;
