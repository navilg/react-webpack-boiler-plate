import React from "react";
import { render } from "react-dom";

import MuiThemeProvider from '../../node_modules/@material-ui/core/styles/MuiThemeProvider';
import ButtonMui from '../../node_modules/@material-ui/core/Button';

import "./styles/styles.scss";
import "./components/header";
import "./components/footer";

console.log('Hello!');

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <ButtonMui>Hello!</ButtonMui>
            </MuiThemeProvider>
        );
    }
}

render(<App />, document.getElementById("root"));
