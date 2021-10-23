import {Redirect} from 'react-router-dom'

export default function User(props) {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if(isLoggedIn === 'True') {
        return (
            <h1>User Component</h1>
        )
    }
    return (
        <Redirect to="/login" />
    )
}