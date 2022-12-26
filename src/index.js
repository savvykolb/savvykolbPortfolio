import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
// Stylesheet
import "./index.scss";
// Scenes
import Home from "./scenes/Home";
import Error404 from "./components/common/Error404";

const Root = () => {
    return (
        <div>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home">
                    <Home />
                </Route>
            </Switch>
        </div>
    );
};

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route render={({ location }) => (location.state && location.state.is404 ? <Error404 /> : <Root />)} />
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);
serviceWorker.unregister();
