import React from "react";
import { Grid, Typography, Avatar } from "@mui/material";
import { useTrail, animated } from "react-spring";

const Trail = ({ open, children }) => {
	const items = React.Children.toArray(children);
	const trail = useTrail(items.length, {
		config: { mass: 5, tension: 2000, friction: 200 },
		opacity: open ? 1 : 0,
		x: open ? 0 : 20,
		height: open ? 110 : 0,
		from: { opacity: 0, x: 20, height: 0 },
	});
	return (
		<div>
			{trail.map(({ height, ...style }, index) => (
				<animated.div key={index} style={style}>
					<animated.div style={{ height }}>{items[index]}</animated.div>
				</animated.div>
			))}
		</div>
	);
};

const MainPage = () => {
	return (
		<div style={{ width: "100%", padding: "4rem", height: "100vh", position: "relative" }}>
			<div style={{ position: "absolute", top: "30%", left: "20%" }}>
				<Avatar src="/me.jpg" alt="me" sx={{ width: "360px", height: "auto" }} />
			</div>
			<Trail open={true}>
				<Grid container justifyContent="center" alignItems="center">
					<Grid item md={10} container justifyContent="center" alignItems="center">
						<Grid item md={10}>
							<Typography
								variant="h1"
								align="center"
								style={{ fontFamily: "'Alfa Slab one', 'cursive'", color: "#4A4242" }}
							>
								Welcome to
							</Typography>
						</Grid>
						<Grid item md={12}>
							<Typography
								align="right"
								variant="h1"
								style={{ fontFamily: "'Alfa Slab one', 'cursive'", color: "#4A4242" }}
							>
								My Portfolio
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Trail>
		</div>
	);
};

export default MainPage;
