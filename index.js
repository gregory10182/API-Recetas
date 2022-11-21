import app from "./app.js";
import { connect } from "./utils/mongoose.js";

async function main() {
  await connect();
  app.listen(5000, () => {
    console.log("Server on port 3000");
  });
}

main();
