console.log('Warsztat - Infnite scroll');

let endOfPage = 0;

let preloading = false;

const showPreloader = () => {
    let preloader = document.getElementById('preloader');
    console.log(`Na wierzchu ${preloader}`);
    preloader.style.display = 'inherit';
}

const hidePreloader = () => {
    let preloader = document.getElementById('preloader');
    console.log(`ukryty ${preloader}`);
    preloader.style.display = 'none';
}


const getData = () => {

    if (!preloading) {

        preloading = true;

        fetch(`https://akademia108.pl/api/ajax/get-users.php`)
            .then(response => response.json())
            .then(responseJson => {

                let hr = document.createElement('hr');
                document.body.appendChild(hr);

                for (let user of responseJson) {
                    let pId = document.createElement('p');
                    let pName = document.createElement('p');
                    let pURL = document.createElement('p');
                    let pLine = document.createElement('p');

                    pId.innerText = `User ID: ${user.id}`;
                    pName.innerText = `User Name: ${user.name}`;
                    pURL.innerText = `User URL: ${user.website}`;
                    pLine.innerText = `-------`;

                    /* console.log(`User ID: ${pId.innerText}`);
                    console.log(`User Name: ${pName.innerText}`);
                    console.log(`User URL: ${pURL.innerText}`);
                    console.log(`linia: ${pLine.innerText}`); */


                    let bodyEl = document.getElementsByTagName('body')[0];

                    bodyEl.appendChild(pId);
                    bodyEl.appendChild(pName);
                    bodyEl.appendChild(pURL);
                    bodyEl.appendChild(pLine);
                }

                preloading = false;

                hidePreloader();

            })

            .catch(error => {
                console.log(error);
            })

    }
}

const scrollToEndOfPage = () => {

    let scrollHeight = document.documentElement.scrollHeight;

    let scrollTop = document.documentElement.scrollTop;

    let clientHeight = document.documentElement.clientHeight;

    let sum = Math.ceil(scrollTop + clientHeight);

    /*     console.log(`scrollHeight: ${scrollHeight}`);
        console.log(`scrollTop: ${scrollTop}`);
        console.log(`clientHeight: ${clientHeight}`);
        console.log(`Suma: ${sum}`);
        console.log(`==============================`);
     */
    if (sum >= scrollHeight) {

        endOfPage += 1

        console.log(`Scrolled to the end of page: ${endOfPage}`);

        showPreloader();

        getData();
    }


}

window.addEventListener('scroll', scrollToEndOfPage);