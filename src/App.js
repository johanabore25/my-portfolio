import React from "react";
import Grid from "@mui/material/Grid";
import MainPage from "./MainPage";
import NextSection from "./NextSection";
import WorkSection from "./WorkSection";
import "./App.css";

function App() {
	return (
		<div
			style={{
				width: "100%",
				height: "fit-content",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#FFFff",
			}}
		>
			<Grid container spacing={4}>
				<Grid item md={12}>
					<MainPage />
				</Grid>
				<Grid item md={12}>
					<NextSection />
				</Grid>
				<Grid item md={12}>
					<WorkSection />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
