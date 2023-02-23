const app = require("express")();

const express = require("express")();

const bodyParser = require("body-parser");

app.use(bodyParser.json())

app.listen(8080);


// simulating some database
const birds = [
    {id: 1, name: "First Bird"},
    {id: 2, name: "Second Bird"},
    {id: 3, name: "Third Bird"},
    {id: 4, name: "Fourth Bird"},
    {id: 5, name: "Fifth Bird"}
];

// get all
app.get("/birds", (req, res) => {
    res.send(birds)
})

// get
app.get("/birds/:id", (req, res) => {
    const id = req.params.id
    const foundBird = birds.find((bird) => bird.id == id)
    res.send(foundBird)
})

// get by name
app.get("/birds/findByName/:name", (req, res) => {
    const name = req.params.name
    const foundBird = birds.find((bird) => bird.name == name)
    res.send(foundBird)

})

// post
app.post("/birds", (req, res) => {
    const postBird = req.body
    birds.push(postBird)
    res.send(postBird)
})


// put : if certain value is not given, make result null
app.put("/birds/:id", (req, res) => {
    const birdId = parseInt(req.params.id)
    const oldBirdIndex = birds.findIndex((bird) => bird.id == birdId)
    const newBird = req.body
    if(newBird.name !== null ){
        birds[oldBirdIndex].name = newBird.name
    }
    console.log('bird changed')
    res.send(birds[oldBirdIndex])
})

// patch : 
app.patch("/birds/:id", (req, res) => {
    const birdId = parseInt(req.params.id)
    const oldBirdIndex = birds.findIndex((bird) => bird.id == birdId)
    const newBird = req.body
    if(newBird.name !== null ){
        birds[oldBirdIndex].name = newBird.name
    }
    console.log('bird changed')
    res.send(birds[oldBirdIndex])
})


// delete
app.delete("/birds/:id", (req, res) => {
    const birdId = parseInt(req.params.id)
    const birdIndex = birds.findIndex((bird) => bird.id === birdId)
    if(birdIndex === -1){
        res.status(404).send("No birds here")
    } else {
        birds.splice(birdIndex, 1)
        res.send("bird with ID " + birdId + " has been deleted.")
    }
    
})
