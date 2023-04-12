const  getRequest = async () => {
    const  response =await fetch('dbb.json')
    if(response.status!==200){
        throw new Error('cannot fetch data')
    }
    const data = await response.json()
    const drivers = data.drivers
    const blogs = data.blogs
    //console.log(blogs, drivers)
    return {drivers,blogs}

}
getRequest()
    .then(({blogs,drivers})=>{
        console.log('resolved')
        console.log('drivers',drivers)
        console.log('blogs',blogs)

    })
    .catch(err=>{console.log('rejected', err.message)})


/*fetch('db.json').then((response) => {
    console.log('resolved', response)
    return response.json()
}).then((data) => {

    console.log(data?.drivers, data?.blogs)
}).catch((error) => {
    console.log('rejected', error)
}) */