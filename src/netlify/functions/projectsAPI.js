import express from "express";
import serverless from "serverless-http";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();
const api = express();
const router = express.Router();

const PORT = 3000;
api.listen(PORT, () => {
    console.log(`Server is Running on: http://localhost:${PORT}`);
});

const projectData = JSON.parse(fs.readFileSync("./netlify/functions/db.json"));

router.get("/projects", (req, res) => {
    if(!projectData || projectData.length === 0) {
        return res.status(404).json({error: "No projects found."});
    }
    res.json(projectData);
});

api.use("/api/", router);
export const handler = serverless(api);
