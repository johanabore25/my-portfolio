import React from "react";
import { Grid, Typography } from "@mui/material";
import "./App.css";

const NextSection = () => {
	return (
		<Grid container justifyContent="space-around" alignItems="center" spacing={6} style={{ height: "100vh" }}>
			<Grid item md={12}>
				<Typography
					variant="h2"
					align="center"
					style={{ fontFamily: "'Alfa Slab one', 'cursive'" }}
					color="#1e90ff"
				>
					Experience
				</Typography>
			</Grid>
			<Grid item md={12} container justifyContent="center">
				<Grid item md={9}>
					<Typography variant="h5" color="#4A4242" align="justify" gutterBottom>
						My name is Caleb Aito over the past two years I have used these tools Node.js, Postgresql, React
						and .Net to build web applications and websites.
					</Typography>
				</Grid>
			</Grid>
			<Grid item container justifyContent="space-around" alignItems="center" md={10}>
				<Grid item md={2}>
					<div
						className="box"
						style={{ padding: "1rem", backgroundColor: "white", width: "100%", height: "200px" }}
					>
						<img src="/node.png" alt="node" width="100%" height="100%" style={{ objectFit: "contain" }} />
					</div>
				</Grid>
				<Grid item md={2}>
					<div
						className="box"
						style={{ padding: "1rem", backgroundColor: "white", width: "100%", height: "200px" }}
					>
						<img src="/psql.png" alt="node" width="100%" height="100%" style={{ objectFit: "contain" }} />
					</div>
				</Grid>
				<Grid item md={2}>
					<div
						className="box"
						style={{ padding: "1rem", backgroundColor: "white", width: "100%", height: "200px" }}
					>
						<img
							src="/logo512.png"
							alt="node"
							width="100%"
							height="100%"
							style={{ objectFit: "contain" }}
						/>
					</div>
				</Grid>
				<Grid item md={2}>
					<div
						className="box"
						style={{
							padding: "1rem",
							backgroundColor: "white",
							width: "200px",
							height: "200px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
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
