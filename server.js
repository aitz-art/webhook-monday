// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")

// Initialize express and define a port
const app = express()
const PORT = 8080

// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json())

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

app.use(bodyParser.json())

app.post("/", (req, res) => {
  const body = {
    challenge : req.body.challenge
  }
  res.send(body)
  console.log(req.body) // Call your action on the request here
  console.log( {"challenge": JSON.parse(event.body).challenge});
  const response = {
    statusCode: 200,
    body: event.body
    
  };
  console.log(response);
  res.status(200).end() // Responding is important
})