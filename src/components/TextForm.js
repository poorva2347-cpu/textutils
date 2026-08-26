import React, { useState } from 'react'

export default function TextForm(props) {
    const [Text, setText] = useState('Enter a text');

    const handleUpClick = () => {
        // console.log("Conerted to Uppercase");
        let newText = Text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        // console.log("Conerted to Uppercase");
        let newText = Text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("On change Handle");
        setText(event.target.value);
    }

    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} id="mybox" value={Text} rows="8"></textarea>
                    <button type="button" className="btn btn-primary my-3" onClick={handleUpClick}>{props.label}</button>
                    <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                </div>
            </div>

            <div className="container my-3">
                <h3>Your text summary</h3>
                <p>{Text.split(" ").length} words and {Text.length} characters</p>
                <p>{0.008 * Text.split(" ").length} Minutes read</p>
            </div>
        </>
    )
}
