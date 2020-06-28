'use strict';

function search(htmlInputElement, searchFunction) {
    const URL_TEMPLATE = 'https://api.giphy.com/v1/gifs/search?q=%%q%%&api_key=8FUDppTbWVXQ7IFI1mZz1pTuJJ9TXV0u';
    const DELAY = 500;
    let timerId;

    function request (event) {
        if (event.target.value.length === 0) {
            return;
        }

        const url = URL_TEMPLATE.replace('%%q%%', event.target.value);
        let response = searchFunction(url);
        response
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                if (error.name !== 'AbortError') {
                    console.error(error);
                }
            });
    }

    htmlInputElement.addEventListener('input', function (event) {
        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(function () {
            request(event);
        }, DELAY);
    });
}