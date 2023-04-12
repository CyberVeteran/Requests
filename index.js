fetch('db.json').then((response) => {
    console.log('resolved', response)
    return response.json()
}).then((data) => {

    console.log(data?.drivers, data?.blogs)
}).catch((error) => {
    console.log('rejected', error)
})