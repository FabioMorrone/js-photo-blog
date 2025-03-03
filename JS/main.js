const containerEl = document.querySelector('.container')
const colEl = document.querySelector('.col')


fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => response.json())

    .then(data => {
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            const thisData = data[i];
            const markup = getDataMarkup(thisData)
            colEl.innerHTML += markup
            console.log(thisData);

        }
    })
function getDataMarkup(dataObj) {
    const { id, title, date, url } = dataObj
    console.log(id, title, date, url);


    const markup = `
     <div class="col d-flex col-lg-4">
         <div class="card">
                <img class="card-img-top" src="${url}">
                <div class="card-body">
                     <img class="pin" src="./assets/img/pin.svg" alt="pin">
                    <p class="card-text m-0">${date}</p>
                    <h3 class="card-title m-0">${title}</h3>
                </div>
         </div>
     </div>`
    console.log(markup);
    return markup
}



