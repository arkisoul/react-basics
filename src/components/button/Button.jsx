function Button(props) {
    return <button onClick={() => props.clicked(props.title)}>{props.title}</button>
}

export default Button;