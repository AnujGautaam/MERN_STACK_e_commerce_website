// for the display of the respective categories

export const viewingCategory = ()=>{
    return fetch(`http://localhost:5000/api/listingcategories`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(erronous=>console.log(erronous))
}

export const listUsers = ()=>{
    return fetch(`http://localhost:5000/api/listingusers`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(erronous=>console.log(erronous))
}




export const addCategory = (category_name)=>{
    return fetch(`http://localhost:5000/api/addingcategory`,{
        method:"POST",


        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Header:("Access-Control-Allow-Origin", "http://localhost:5000")

        },
       
        body:JSON.stringify({category_name})

    })
    .then(res=>res.json)
    .catch(error=>console.log(error))
    
}



// for updating category
export const updateCategory = (element_id,category_name)=>{
    return fetch(`http://localhost:5000/api/updatingcategory/${element_id}`,{
        method:"PUT",
        
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify({category_name})
    })
    .then(res=>res.json())
    .catch(erronous=>console.log(erronous))
}

// for finding category with the help of id
export const findCategory = (element_id)=>{
    return fetch(`http://localhost:5000/api/findingcategory/${element_id}`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(erronous=>console.log(erronous))
}



// deleting a category
export const deleteCategory = (element_id)=>{
    return fetch(`http://localhost:5000/api/deletingcategory/${element_id}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        }

    })
    .then(res=>res.json())
    .catch(erronous=>console.log(erronous))

}