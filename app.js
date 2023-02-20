const app = require("express")();

const express = require("express")();
app.listen(8080);

// simulating some database

const birds = [];
birds.push([1, "one bird"]);
birds.push([2, "two bird"]);
birds.push([3, "three bird"]);
birds.push([4, "four bird"]);
birds.push([5, "five bird"]);



// get all
app.get("/birds", (req, res) => {
    res.send(birds)
})

// get
app.get("/birds/:id", (req, res) => {
    const id = req.params.id
    birds.forEach(bird => {
        if(bird[0] == id ){
            console.log('bird found: ' + bird)
            res.send(bird)
        }
    });
})

// get by name
app.get("/birds/findByName/:name", (req, res) => {
    const name = req.params.name
    birds.forEach(bird => {
        if(bird[1] == name){
            console.log('bird found: ' + bird)
            res.send(bird)
        }
    }) 
})

// post
app.get("/birds/:bird", (req, res) => {

})
// put
app.get("/birds/:bird", (req, res) => {

})
// patch
app.get("/birds/:bird", (req, res) => {

})

// delete
app.get("/birds/:id", (req, res) => {
    
})