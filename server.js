const app = require("./src/app");
const port = process.env.PORT || 3000
app.listen(port, () => `server running in http://localhost:${port}`);