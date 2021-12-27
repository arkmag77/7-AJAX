$(document).ready(function () {

    /* console.log(`AJAX - 3- pobierz dane po kliknięciu przycisku jQuery`); */

    $('#get-data').click(function () {

        /* console.log(`funkcja pobierania po kliknieciu przycisku pobierz dane`); */

        $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {

                /* console.log(data.body);
                console.log(data);
                console.log(data.id);
                console.log(data.userId);  
                console.log(data.title); */
                
                let pId = $('<p></p>');
                let pUserId = $('<p></p>');
                let pTitle = $('<p></p>');
                let pBody = $('<p></p>');

                pId.text(`Imię: ${data.id}`);
                pUserId.text(`Nazwisko: ${data.userId}`);
                pTitle.text(`Zawód: ${data.title}`);
                pBody.text(`Firma: ${data.body}`);

                $('body').append(pId);
                $('body').append(pUserId);
                $('body').append(pTitle);
                $('body').append(pBody);

            })

            .fail(function (error) {
                console.error(error);
            })


       /*  $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {
                
                let pId = $('<p></p>');
                let pUserId = $('<p></p>');
                let pTitle = $('<p></p>');
                let pBody = $('<p></p>');

                pId.text(`Imię: ${data.id}`);
                pUserId.text(`Nazwisko: ${data.userId}`);
                pTitle.text(`Zawód: ${data.title}`);
                pBody.text(`Firma: ${data.body}`);

                $('body').append(pId);
                $('body').append(pUserId);
                $('body').append(pTitle);
                $('body').append(pBody);

            })

            .fail(function (error) {
                console.error(error);
            }) */

    });

})



