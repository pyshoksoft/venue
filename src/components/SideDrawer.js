import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { List, ListItem } from "@material-ui/core";

const SideDrawer = props => {
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List component="nav">
                <ListItem button>Event starts in</ListItem>
                <ListItem button>Venu NFO</ListItem>
                <ListItem button>Highlights</ListItem>
                <ListItem button>Pricing</ListItem>
                <ListItem button>Lication</ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;
