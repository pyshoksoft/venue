import React, { Component } from "react";
import "./styles.css";
import Header from "./components/Header";
import Featured from "./components/featured";
import VenueInfo from "./components/VenueInfo";
import Highlights from "./components/Highlights";
import Pricing from "./components/Pricing";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Featured />
                <VenueInfo />
                <Highlights />
                <Pricing />
            </div>
        );
    }
}

export default App;
