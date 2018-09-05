import React from 'react';
import Drawer from '@material-ui/core/Drawer';

const SideDrawer = (props) => {
	return (
		<Drawer
			anchor="right"
			open={props.open}
			onClose={props.onClose(false)}
		>
			drawer
		</Drawer>
	);
};

export default SideDrawer;