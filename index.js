/*
*/
const getRequest = (dataType) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {

            if (request.readyState === 4) {
                if (request.status === 200) {
                    const data = JSON.parse(request.responseText);
                    if (dataType in data) {
                        resolve(data[dataType]);

                    } else {
                        reject(`Property '${dataType}' not found in data`);
                    }
                } else {
                    reject(`Error ${request.status} while retrieving data`);
                }
            }
        });

        request.open('GET', 'db.json');

        request.send();

    });

};

getRequest('drivers')
    .then((drivers) => {
        console.log('Promise resolved', drivers);
        return getRequest('blogs');
    })
    .then((data) => {
        console.log('Second promise resolved', data);
        
    })
    .catch((error) => {
        console.log('Promise rejected', error);
    });
