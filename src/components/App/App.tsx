import React, { Component } from 'react';
import './App.css';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import NavBar from "../NavBar/NavBar";
import Projects from "../Projects/Projects";
//verify this footer
import Footer from "../Footer/Footer";

//type of pages array to make process of adding new pages easier
export interface PageContainer {
    path: string;
    tab_text: string;
    page: any
    icon?: any
}

class App extends Component<RouteComponentProps, { pages: (PageContainer)[] }> {

    //state has array of pages which used for Routing and Navigation Bar
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            pages: [
                {
                    tab_text: "About Us",
                    path: "/about",
                    page: (pr: any) => <AboutUs  {...pr} />,

                },
                {
                    tab_text: "Projects",
                    path: "/projects",
                    page: (pr: any) => <Projects {...pr} />,
                }
            ]
        }

    }

    render() {
        const { pages } = this.state;
        return (
            <div className="App">
                {/*NavBar will create tab for each page*/}
                <NavBar pages={pages} />
                {/*Creates Router for each page in pages*/}
                <Switch>
                    {pages.map((item, index) => {
                        const { page, path } = item;
                        return (<Route exact key={index} path={path} render={page} />);
                    })}
                    {/*for any other url pushes to about page*/}
                    <Redirect from="/" to="/about" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(App);
