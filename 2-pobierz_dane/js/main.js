console.log(`AJAX - pobierz dane po kliknięciu przycisku`);

let btngetdata = document.getElementById('get-data');

/* console.log(btngetdata); */

const getData = () => {

    /* console.log('funkcja getData()'); */

    fetch('https://akademia108.pl/api/ajax/get-post.php')
    .then(function (response) {
        
        /* console.log(response.url);
        let pUrl = document.createElement('p');
        pUrl.innerText = `adres URL: ${response.url}`;
        document.body.appendChild(pUrl); */
        return response.json();

    })
    .then(responsejson => {

            let pId = document.createElement('p');
            let pUserId = document.createElement('p');
            let pTitle = document.createElement('p');
            let pBody = document.createElement('p');
            let hrLine = document.createElement('hr');

            pId.innerText = `Post id: ${responsejson.id}`;
            pUserId.innerText = `User id: ${responsejson.userId}`;
            pTitle.innerText = `Title: ${responsejson.title}`;
            pBody.innerText = `Body: ${responsejson.body}`;

            let bodyEl = document.getElementsByTagName('body')[0];
            bodyEl.appendChild(pId);
            bodyEl.appendChild(pUserId);
            bodyEl.appendChild(pTitle);
            bodyEl.appendChild(pBody);
            bodyEl.appendChild(hrLine);

            /* console.log(responsejson); */
        })

        .catch(error => {

            console.error(error);
            /*    let pError = document.createElement('p');
                  pError.innerText = `Błąd: ${error}`;
                  let bodyEl = document.getElementsByTagName('body')[0];
                  bodyEl.appendChild(pError); */

        })
}

btngetdata.addEventListener('click', getData);

