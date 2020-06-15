import React, {Component} from 'react';
import './App.css';
import {Route, RouteComponentProps, Switch, withRouter} from "react-router-dom";
import AboutUs from "../AbousUs/AboutUs";
import NavBar from "../NavBar/NavBar";
import Projects from "../Projects/Projects";

export interface PageContainer {
    path: string;
    text: string;
    page: any
}


class App extends Component<RouteComponentProps, { pages: (PageContainer)[] }> {

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            pages: [
                {
                    text: "About Us",
                    path: "/about",
                    page: <AboutUs/>,

                },
                {
                    text: "Projects",
                    path: "/projects",
                    page: <Projects/>,
                }
            ]
        }

    }

    render() {
        const {pages} = this.state;
        return (
            <div className="App">
                <NavBar pages={pages}/>
                <Switch>
                    {pages.map((item, index) => {
                        const {page, path} = item;
                        return (
                            <Route key={index} exact path={path} render={() => page}/>
                        );
                    })}
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
