
import React from 'react'
import "../components/Copyright.css"
export default function Copyright(props) {
  return (
    <div>
       <div className="copyright" style={{color:props.mode==='dark'?'white':'black'}}>
    Copyright&copy;2022-2023 by Anas Rafiq Ch.
    All Rights Reserved
    </div>
    </div>
  )
}
