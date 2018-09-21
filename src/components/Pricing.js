import React, { Component } from "react";
import MyButton from "./utils/MyButton";
import { Zoom } from "react-reveal";

class Pricing extends Component {
    state = {
        prices: [100, 160, 290],
        positions: ["Balcony", "Medium", "Star"],
        desc: [
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo iusto voluptatibus vero dolorum molestiae numquam libero veniam iure deleniti placeat.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis dicta sapiente distinctio deleniti sunt cupiditate molestiae",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. At vero et quis fuga accusamus! Mollitia vel numquam quaerat explicabo ratione"
        ],
        linkTo: ["http://sales/1", "http://sales/2", "http://sales/3"],
        delay: [500, 0, 500]
    };

    showBoxes = () =>
        this.state.prices.map((box, i) => (
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>{this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">{this.state.desc[i]}</div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="white"
                                href={this.state.linkTo[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ));

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">{this.showBoxes()}</div>
                </div>
            </div>
        );
    }
}

export default Pricing;
