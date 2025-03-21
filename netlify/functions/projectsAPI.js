import express from "express";
import serverless from "serverless-http";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();
const api = express();
const router = express.Router();
let projectData = [];

try{
    projectData = JSON.parse(fs.readFileSync("netlify/functions/db.json"));
}
catch (err) {
    console.log("failed to read db.json: ", err);
}

router.get("*", (req, res) => {
    if(!projectData || projectData.length === 0) {
        return res.status(404).json({error: "No projects found."});
    }
    res.json(projectData);
});

api.use("/", router);
export const handler = serverless(api);
