import React from 'react'

function Alert(props) {

    const capitalizer = (word)=>{
        const lower =  word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);

    }
  return (
   props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
       <strong>{capitalizer(props.alert.type)}</strong> : {props.alert.msg}
</div>
  )
}

export default Alert
