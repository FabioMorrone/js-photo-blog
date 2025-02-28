const containerEl = document.querySelector('.container')
const cardEl = document.querySelector('.card')


fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => response.json())

    .then(data => {
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            const thisData = data[i];
            const markup = getDataMarkup(thisData)
            cardEl.innerHTML += markup
            console.log(thisData);

        }



        function getDataMarkup(dataObj) {
            const { id, title, date, url } = dataObj
            console.log(id, title, date, url);
          

            const markup = `
        <div class="col col-lg-4 ">
             <div class="card">
                 <img class="card-img-top" src="./assets/img/CGIC4956.jpeg">
                    <div class="card-body">
                         <img class="pin" src="./assets/img/pin.svg" alt="pin">
                        <p class="card-text m-0">01-07-2024</p>
                        <h3 class="card-title m-0">SKATE PARK</h3>
                     </div>
                </div>
         </div>`
            console.log(markup);
            return markup
        }



    })

    


