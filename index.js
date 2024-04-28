const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/v1");

app.use(express.json());
app.use("/v1", routes);

const PORT = 8082;
const DB_URI = "mongodb://127.0.0.1:27017";

mongoose.connect(DB_URI)
        .then(() => console.log(`Connected to DB at`, DB_URI))
        .then(() => {
            app.listen(PORT, () => {
                console.log(`Server listening at PORT ${PORT}`);
            });
        })
        .catch((err) => console.log("Failed to connect to DB ->", err));