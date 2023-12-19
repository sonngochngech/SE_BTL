import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { Grid, Paper } from "@mui/material";
import TableFeeContribution from "./TableFeeContribution";
import { contributionService } from "../../redux/services/contributionService";

export default function FeeContribution() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    if (isLoading) {
      fetchData();
      setIsLoading(false);
    }
  }, [isLoading]);

  const fetchData = async () => {
    const fetch = await contributionService.getALlContributions();
    setData(fetch);
  };

  const content = (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          {data ? (
            <TableFeeContribution
              data={data}
              handleLoading={() => {
                setIsLoading(true);
              }}
            />
          ) : null}
        </Paper>
      </Grid>
    </Grid>
  );

  return <Layout content={content}></Layout>;
}
