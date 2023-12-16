<<<<<<< HEAD
import Layout from "../Layout";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import * as React from "react";
import FeeList from "../../Components/FeeList";
import ContributionList from "../../Components/ContributionList";

const FeeAndContributionList = () => {
    const content = (
        <Grid container spacing={3}>
            {/* Chart */}
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <FeeList/>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <ContributionList/>
                </Paper>
            </Grid>
        </Grid>
    )
    return (
        <Layout content={content}></Layout>
    )
}
=======
import Layout from "../Layout";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import * as React from "react";
import FeeList from "../../Components/FeeList";
import ContributionList from "../../Components/ContributionList";

const FeeAndContributionList = () => {
    const content = (
        <Grid container spacing={3}>
            {/* Chart */}
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <FeeList/>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <ContributionList/>
                </Paper>
            </Grid>
        </Grid>
    )
    return (
        <Layout content={content}></Layout>
    )
}
>>>>>>> e8338ac64a73f6f0571432505f511b97403c48c9
export default FeeAndContributionList;