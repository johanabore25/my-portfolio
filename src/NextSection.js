import React from "react";
import { Grid, Typography } from "@mui/material";
import "./App.css";

const NextSection = () => {
	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			spacing={2}
			style={{ height: "fit-content", padding: "1rem", width: "100%" }}
		>
			<Grid item md={12}>
				<Typography
					variant="h5"
					align="center"
					style={{ fontFamily: "'Alfa Slab one', 'cursive'" }}
					color="#1e90ff"
				>
					Experience
				</Typography>
			</Grid>
			<Grid item md={8} sm={12} style={{ padding: "0.5rem" }}>
				<Typography variant="h6" color="#4A4242" align="justify" gutterBottom>
					My name is Caleb Aito over the past two years I have used these tools Node.js, Postgresql, React and
					.Net to build web applications and websites.
				</Typography>
			</Grid>
			<Grid item container justifyContent="space-around" alignItems="center" md={10} sm={10} xs={12} spacing={2}>
				<Grid item md={4} sm={4} xs={12} container justifyContent="center">
					<div className="box" style={{ padding: "1rem", backgroundColor: "white", width: "50%" }}>
						<img src="/node.png" alt="node" width="100%" height="auto" style={{ objectFit: "contain" }} />
					</div>
				</Grid>
				<Grid item md={4} xs={12} sm={2} container justifyContent="center">
					<div className="box" style={{ padding: "1rem", backgroundColor: "white", width: "50%" }}>
						<img src="/psql.png" alt="node" width="100%" height="auto" style={{ objectFit: "contain" }} />
					</div>
				</Grid>
				<Grid item md={4} xs={12} sm={4} container justifyContent="center">
					<div className="box" style={{ padding: "1rem", backgroundColor: "white", width: "50%" }}>
						<img
							src="/logo512.png"
							alt="node"
							width="100%"
							height="auto"
							style={{ objectFit: "contain" }}
						/>
					</div>
				</Grid>
				<Grid item md={4} sm={4} xs={12} container justifyContent="center" alignItems="center">
					<div style={{ padding: "1rem", backgroundColor: "white" }} className="box">
						<Typography variant="h1" style={{ fontWeigh: 400 }} align="center">
							.Net
						</Typography>
					</div>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default NextSection;
