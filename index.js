import app from "./app.js";
import fs from "fs";
import https from "https";
import { connect } from "./utils/mongoose.js";

const key = fs.readFileSync("./ssl/private.key");
const cert = fs.readFileSync("./ssl/certificate.crt");

const credentials = { key, cert };

async function main() {
  await connect();
  app.listen(8000, () => {
    console.log("Server on port 8000");
  });

  https.createServer(credentials, app).listen(443, () => {
    console.log("Server on port 443");
  })
}

main();
