import React, { Component } from 'react'
import './widget.css'

class Widget extends Component {z
    render() {
        return (
            <div className="widget">
                { this.props.children }
            </div>
        )
    }
}

export default Widget