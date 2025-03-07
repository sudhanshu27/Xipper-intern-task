const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Custom routes for authentication and user handling (mocked)
server.post("/api/auth/login", (req, res) => {
  res.status(200).json({ message: "Login successful", token: "mock-token" });
});

server.post("/api/users/register", (req, res) => {
  res.status(201).json({ message: "User registered successfully" });
});

// Custom route for check-ins
server.post("/api/checkin", (req, res) => {
  res.status(201).json({ message: "Check-in successful" });
});

server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
  console.log("JSON Server is running on port " + PORT);
});
