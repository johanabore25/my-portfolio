import React from "react";
import { Grid, Typography, Avatar } from "@mui/material";
import { useTrail, animated } from "react-spring";
import "./App.css";

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
		<div
			style={{
				width: "100%",
				padding: "1rem",
				height: "100vh",
				position: "relative",
				backgroundColor: "#1e90ff",
			}}
		>
			<Trail open={true}>
				<Grid container justifyContent="flex-start" alignItems="center" style={{ height: "80vh" }}>
					<Grid item md={2} sm={12}>
						<Avatar src="/me.jpg" alt="me" sx={{ width: "50%", height: "auto" }} />
					</Grid>
					<Grid item md={10} container justifyContent="flex-start" alignItems="center">
						<Grid item md={11} sm={12}>
							<Typography
								variant="h3"
								style={{ fontFamily: "'Alfa Slab one', 'cursive'", color: "white" }}
							>
								Welcome to
							</Typography>
						</Grid>
						<Grid item md={12} sm={12}>
							<Typography
								variant="h3"
								style={{ fontFamily: "'Alfa Slab one', 'cursive'", color: "white" }}
							>
								My <span className="port">Portfolio</span>
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Trail>
		</div>
	);
};

export default MainPage;
