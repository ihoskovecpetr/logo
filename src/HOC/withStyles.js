import React from 'react'

export default (WrappedComponent) => (args) => {

    let _styl = {
        default: {
            padding: 20,
            fontWeight: 'bold',
            backgroundColor: '#09d3ac',
            color: 'white'
        },
        disabled: {
            backgroundColor: 'grey',
            color: 'lightgrey'
        }
    }

    let applyStyle = _styl.default

    if(args.disabled){
        applyStyle = {..._styl.default, ..._styl.disabled}
    }

        let data = "DATA z HOC"
        return <WrappedComponent data={data} {...args} hocStyle={applyStyle} />

}
