import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Logout() {
    
        let history=useHistory()
        console.log(history)
        return (
            <div>
    
                <button onClick={()=>{
                   
                    history.push("/")
                }}>LOG OUT</button>
            </div>
        // )
    )
}