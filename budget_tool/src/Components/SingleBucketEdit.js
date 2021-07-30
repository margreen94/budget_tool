import React from 'react'



export default function SingleBucketEdit(props) {
    return (
    <div>
        <h2>Bucket: {props.name}</h2>
        <label>Percentage:<input type='text' placeholder={props.percent}></input></label>
    </div>
    )
}
