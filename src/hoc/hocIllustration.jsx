import { Component, useEffect, useState } from "react"

export function withSubscription(WrappedComponent, apiUrl) {
    return (props) => {
        console.log('props in hoc', props)
        const [data, setData] = useState([]);
        useEffect(() => {
            fetch(apiUrl)
                .then(res => res.json())
                .then(data => setData(data))
        }, [])
        return <div className="with-some-classes">
            <WrappedComponent {...props} propFromHoc={'prop from hoc'} data={data} />
        </div>
    }
}

export function withSomeAddedFunctionality(WrappedComponent) {
    return class HOCClass extends Component {
        constructor(props) {
            super(props)
            console.log(props)
            this.state = {
                name: 'John'
            }
        }

        doSomething() {
            alert('Doing something wonderful')
        }

        render() {
            return <WrappedComponent name={this.state.name} doSomething={this.doSomething} {...this.props} />
        }
    }
}