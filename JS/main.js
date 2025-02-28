const containerEl = document.querySelector('.container')

fetch('https://lanciweb.github.io/demo/api/pictures/')
.then(response => response.json())

.then(data => {
    console.log(data.response); 
})

.catch(error => console.error(error)); 

