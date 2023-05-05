import './text-area.css'

function TextArea(props) {
    return(
        <div className='text-area'>
            <label>{props.label}</label>
            <input placeholder={props.placeholder}></input>
        </div>

    )
}

export default TextArea;