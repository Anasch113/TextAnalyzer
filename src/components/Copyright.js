
import React from 'react'
import "../components/Copyright.css"
export default function Copyright(props) {
  return (
    <div className='container-copy'>
       <div className="copyright" style={{backgroundColor:props.mode==='dark'?'rgb(4 4 4)':'grey',color:props.mode==='dark'?'white':'black', height:'60px'}}>
    Copyright&copy;2022-2023 by Anas Rafiq Ch.
    All Rights Reserved
    </div>
    </div>
  )
}
