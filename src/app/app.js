import React from "react";
import { render } from "react-dom";

// import ButtonMui from '@material-ui/core/Button';


import "./styles/styles.scss";
import Navbar from "./components/header";
import "./components/footer";

class App extends React.Component {
    render() {
        return (
                <Navbar/>
        );
    }
}

render(<App />, document.getElementById("root"));
