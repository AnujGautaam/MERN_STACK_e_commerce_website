import {API} from "../components/Config"

export const userRegistering = (name,email,password)=>{
    return fetch(`http://localhost:5000/api/registering`,{
        method:"POST",


        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Header:("Access-Control-Allow-Origin", "http://localhost:5000")

        },
       
        body:JSON.stringify({name,email,password})

    })
    .then(res=>res.json)
    .catch(error=>console.log(error))
    
}


// export const confirmation = (token)=>{
//     return fetch(`http://localhost:5000/api/confirminguser/${token}`,{
//         method:"GET",


//         headers:{
//             Accept:"application/json",
//             "Content-Type":"application/json",
//             Header:("Access-Control-Allow-Origin", "http://localhost:5000")

//         },
       

//     })
//     .then(res=>res.json)
//     .catch(error=>console.log(error))
    
// }







// export const confirmation = async (token)=>{
//     try {
//         const res = await fetch(`http://localhost/5000/api/confirminguser/${token}`, {
//             method: "GET",
//             headers:{
//                 Header:("Access-Control-Allow-Origin", "http://localhost:5000")
//                 // Header:("Access-Control-Allow-Origin", "*")
//             }
            
//         })
//         return await res.json()
//     } catch (err) {
//         return console.log(err)
//     }

// }


export const confirmation = (token)=>{
    return fetch(`http://localhost/5000/api/confirminguser/${token}`,{
        method:"GET",
        // headers:{
        //     Header:("Access-Control-Allow-Origin", "http://localhost:5000")
        // }
        headers:
        {
            Header:("Access-Control-Allow-Origin","*" )}
      

    })
    .then(res=>res.json())
    .catch(err=>console.log(err))

}


export const confirmationUser = (token)=>{
    return fetch(`http://localhost:5000/api/confirminguser/${token}`,{
        method:"GET",
        headers:{
            Accept:"application/json"
        }
    })
    .then((res)=>{return res.json()})
    .catch(error=>console.log(error))
    
}


// this is for the signin
export const signInUser = (email,password)=>{
    return fetch("http://localhost:5000/api/signingin",{
        method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
                // Header:("Access-Control-Allow-Origin", "http://localhost:5000")
                // "Access-Control-Allow-Origin":"http://localhost:5000"
            },
            body:JSON.stringify({email,password})
        
    })
    .then((res)=>{return res.json()})
    .catch(erronous=>console.log(erronous))
}



// to keep the user signined 
export const authenticate = (data)=>{
    return localStorage.setItem("jwt",JSON.stringify(data))
    // localStorage("name to be saved", action to be performed on the data)
}

// to check if the user is signed in or not? / to authenticate

export const isAuthenticated = ()=>{
    if(localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt")) 
    }
    else{
        return false
    }
}


export const logOut = ()=>{
     localStorage.removeItem("jwt")
     return fetch(`http://localhost:5000/api/signingout`,{
        method:"GET"
     })
     .then((res)=>{return res.json()})
     .catch(erronous=>console.log(erronous))
}