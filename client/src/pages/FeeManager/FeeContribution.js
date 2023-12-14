import React from "react";
import Layout from "../Layout";
import { Grid, Paper } from "@mui/material";
import TableFeeContribution from "./TableFeeContribution";

export default function FeeContribution() {
  const content = (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <TableFeeContribution />
        </Paper>
      </Grid>
    </Grid>
  );

  return <Layout content={content}></Layout>;
}
