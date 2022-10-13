export const getProducts = ()=>{
    return fetch(`http://localhost:5000/api/listingproducts`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const addProducts = (product)=>{
    // what should be noted is that the data that  is being sent is a part of a formdata. hence there is no need to stringify everything 
    return fetch(`http://localhost:5000/api/addingproduct`,{
        method:"POST",
        // headers:{
        //     Accept:"application/json",
        //     "Content-Type":"application/json"
        // }, only the bearer or the authorization is needed but i havent passed it yet
        body: product

        // the data is passed down using a form from the backend, hence there is no need to stringify it 

    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}