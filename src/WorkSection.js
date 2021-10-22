import React from "react";
import { Typography, Grid } from "@mui/material";

const WorkSection = () => {
	return (
		<div style={{ width: "100%", height: "100%", overflowX: "hidden", padding: "0.5rem", marginTop: "1rem" }}>
			<Grid container justifyContent="center" alignItems="center" spacing={2} style={{ height: "100%" }}>
				<Grid container alignItems="center" justifyContent="space-around" item md={10} sm={12} xs={12}>
					<Grid item md={6} sm={10} xs={10}>
						<img src="/filigree.png" alt="filigree" width="100%" />
					</Grid>
					<Grid item md={4} sm={10} xs={10} container>
						<Grid item md={12} sm={12} xs={12}>
							<Typography
								variant="h5"
								color="#1e90ff"
								style={{ fontFamily: "'Alfa Slab one', 'cursive'" }}
							>
								Filigree
							</Typography>
						</Grid>
						<Grid item md={12} sm={10} xs={10}>
							<Typography variant="body1">
								The frontend was built with React while the backend was built with .Net
							</Typography>
						</Grid>
						<Grid item md={12} sm={10} xs={10}>
							<a href="https://filigreenet.com/" target="_blank" rel="noopener noreferrer">
								Filigree website
							</a>
						</Grid>
					</Grid>
				</Grid>
				<Grid container alignItems="center" justifyContent="space-around" item md={10}>
					<Grid item md={4} sm={10} xs={10} container>
						<Grid item md={12} sm={12} xs={12}>
							<Typography
								variant="h5"
								color="#1e90ff"
								style={{ fontFamily: "'Alfa Slab one', 'cursive'" }}
							>
								Purenelle (still in development)
							</Typography>
						</Grid>
						<Grid item md={12} sm={12} xs={12}>
							<Typography variant="body1">
								The frontend is being built with Next js while the backend is being built with Strapi
							</Typography>
						</Grid>
						<Grid item md={12} sm={12} xs={12}>
							<a href="https://purenelle.netlify.app/" target="_blank" rel="noopener noreferrer">
								Purenelle website
							</a>
						</Grid>
					</Grid>
					<Grid item md={6} sm={10} xs={10}>
						<img src="/purenelle.png" alt="filigree" width="100%" />
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default WorkSection;
