import React from "react";
import TicketIcon from "../../images/icons/ticket.png";
import Button from "@material-ui/core/Button";

const MyButton = props => {
    return (
        <Button
			href={props.href}
			variant="contained"
			size="small"
			style={{
				background: props.bck,
				color: props.color
			}}
		>
            <img src={TicketIcon} className="iconImage" alt="icon_button" />
			{props.text}
        </Button>
    );
};

export default MyButton;
