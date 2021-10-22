import React from 'react'

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fruits: ['Apple', 'Banana', 'Grapes', 'Mango']
        }
    }

    showAlert = () => {
        alert('This is an alert from Container component')
    }

    componentWillUnmount() {
        // console.log('In component will unmount Container component')
    }

    render() {
        return (
            <div className="main">
                <p>{this.state.fruits.join(' | ')}</p>
            </div>
        )
    }
}

export default Container;