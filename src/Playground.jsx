import React, { Component } from 'react'

export default class Practice extends Component {
    render() {
        let tempComp = '<div id="meta"><center>This is profile</center></textarea></div>'
        let tempStyle = {
            backgroundColor: 'green',
            padding: '20px',
            color: 'white'
        }
        let markup = {
            __html: tempComp
        }
        return ([
            //using plain html tags in component and using class Name
            <h1 key='h1' className="heading"><center>This is my profile</center> </h1>,
            //nesting one component inside another
            <Sample key='h2' />,
            //inline style along with variable component evaluation
            <div key="div1" style={tempStyle} dangerouslySetInnerHTML={markup}></div>,
            <FunctionalComp key="func1" no={1} flag="true" />, //this is same as FunctionalComp()
            //using a iterator "map"
            [1, 2, 3, 4].map(function (item, index) {
                return <FunctionalComp key={'item' + index} no={item} name="priyanka" />
            })
        ])
    }
}

class Sample extends Component {
    render() {
        return <h2><center>Sample profile</center></h2>
    }
}
function FunctionalComp(props) {
    let text = 'This is a profile card'
    //let fullText = text+' '+ props.no
    let fullText = `${text} ${props.no}`
    return (
        <div>
            <h3><center>This is a profile content</center>{props.no}</h3>
            <h4>{fullText}</h4>
        </div>
    )
}