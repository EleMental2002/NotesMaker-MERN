const connectToMongo = require("./db");
connectToMongo();
var cors = require('cors')

const express = require("express");
const app = express();
const port = 7000;

app.use(cors())

app.use(express.json()); //middleware
//Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening on port http://localhost:${port}`);
});
