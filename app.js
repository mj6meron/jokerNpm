const oneLinerJoke = require('one-liner-joke');
const express = require('express')
const app = express()
let getRandomJokeWithTag = ()=>oneLinerJoke.getRandomJokeWithTag('stupid');
const PORT = process.env.PORT || 1330 

// middleware
app.use(express.json())
app.use(express.static('frontend'))

// REST APIs
app.get('/getJoke', (req, res)=>{
    res.send(getRandomJokeWithTag())
})

app.listen(PORT, ()=>{
    console.log('App listning at PORT : ' + PORT)
})
//console.log(getRandomJokeWithTag)







/*

//One can add exclusion filter for the jokes tags
//default is ['racist', 'dirty', 'sex']

var getRandomJoke = oneLinerJoke.getRandomJokeWithTag('stupid', {
  'exclude_tags': ['racist']
});
console.log(getRandomJoke)


//The variable getRandomJoke will contain a random joke with a format:
//{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}

var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke)


//One can add exclusion filter for the jokes tags
//default is ['racist', 'dirty', 'sex']

var getRandomJoke = oneLinerJoke.getRandomJoke({
    'exclude_tags': ['racist']
  });
console.log(getRandomJoke)

*/
