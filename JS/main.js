const containerEl = document.querySelector('.container')
const cardEl = document.querySelector('.card')


fetch('https://lanciweb.github.io/demo/api/pictures/')
.then(response => response.json())

.then(data => {
    console.log(data); 
})

.catch(error => console.error(error)); 


for (let i = 0; i < data.length; i++) {
    const thisData = data[i];
    const markup = getDataMarkup(thisData)
    cardEl.innerHTML += markup
    console.log(thisData);
    


    
    
}