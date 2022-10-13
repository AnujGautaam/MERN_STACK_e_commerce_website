import React, { useEffect, useState } from 'react'
import { listUsers } from '../../API/CategoryApi'

const TesterBester = () => {
    const [record,setRecord] = useState([])

useEffect(()=>{

    listUsers()
    .then(data=>{
        if(data.error){
            console.log("this has been something to behold on its own")

        }
        else{
            setRecord(data)
            console.log(data)
        }
    })
},[])



  return (
    <div>This is the tester bester web page where all the testings are done





    </div>
  )
}

export default TesterBester