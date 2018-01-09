import React from "react";
import homePage from "./homePage/homePage";
import searchPage from "./searchPage/searchPage";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import  { BrowserRouter, Switch, Route, History } from "react-router-dom";

export default class App extends React.Component
{
    render() {
        return (
            <BrowserRouter>
              <MuiThemeProvider>
                <p>
                  <Route exact path='/' component={homePage}/>
                  <Route path='/search' component={searchPage}/>
                </p>
              </MuiThemeProvider>
            </BrowserRouter>
          );
        }
       }
