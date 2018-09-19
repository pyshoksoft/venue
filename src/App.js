import React, { Component } from "react";
import "./styles.css";
import Header from "./components/Header";
import Featured from "./components/featured";
import VenueInfo from "./components/VenueInfo";

class App extends Component {
    render() {
        return (
            <div className="App" style={{ height: "1200px", background: "cornflowerblue" }}>
                <Header />
                <Featured />
                <VenueInfo />
            </div>
        );
    }
}

export default App;
