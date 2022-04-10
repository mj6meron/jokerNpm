const joke = document.querySelector('#joke');
const next = document.querySelector('#next');

fetch('/getJoke', {
    method: 'GET'
}).then(result => result.json()).then(data => {
    console.log('data--> ', data)
        joke.innerHTML = `${data.body}`
    }
)

next.addEventListener('click', leaveFunction)

function leaveFunction (){
    fetch('/getJoke', {
        method: 'GET'
    }).then(result => result.json()).then(data => {
        
        joke.innerHTML = `${data.body}`
        }
    )
    }