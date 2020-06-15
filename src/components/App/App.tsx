import React, {Component} from 'react';
import './App.css';
import {Route, RouteComponentProps, Switch, withRouter, Redirect} from "react-router-dom";
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
                    text: "Projects",
                    path: "/projects",
                    page: (pr: any) => <Projects {...pr}/>,
                },
                {
                    text: "About Us",
                    path: "/about",
                    page: (pr: any) => <AboutUs  {...pr}/>,

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
                        return (<Route exact key={index} path={path} render={page}/>);
                    })}
                    <Redirect from="/" to="/about"/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
