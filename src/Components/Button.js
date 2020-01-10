import React from 'react'
import withStyles from '../HOC/withStyles'

function Button(props){
    return <button style={props.hocStyle} onClick={() => {props.setCount(props.count + 1)}}>Button + 1</button>
}

export default withStyles(Button)