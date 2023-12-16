const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const port = 5000
const bodyParser = require("body-parser");
const authRouter=require("./routes/authRoute")
const listRouter=require("./routes/listRoute")
const feeRouter=require("./routes/feeRoute");
const contributionRouter=require("./routes/contributionRoute");
const householdRouter=require("./routes/householdRoute");
dbConnect();

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});
// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//route api

app.use("/api/auth",authRouter);
app.use("/api/list",listRouter);
app.use("/api/fees",feeRouter);
app.use("/api/contributions",contributionRouter);
app.use("/api/households",householdRouter);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})