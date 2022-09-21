import express from "express";
import redis from "redis";

const app = express();

const client = redis.createClient({
  //   host: "redis-server",
  url: "redis://redis-server:6379",
});

await client.connect();

client.set("visits", 0);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", async (req, res) => {
  const currentVisits = await client.get("visits");
  await client.set("visits", parseInt(currentVisits) + 1);
  return res.send(`Number of current visits: ${currentVisits}`);
});

app.listen(8081, async () => {
  console.log("Server is up and running on port 8081");
});
