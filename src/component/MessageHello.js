import React, { Component } from 'react';

//simple component 가장 단순한 형태
class MessageHello extends Component {


    render() {
        return(
            <div>
                <p>hello{this.props.message}</p>
            </div>
        )
    }
}

MessageHello.defaultProps = {
    message:'선관'
}
export default MessageHello;