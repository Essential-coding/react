import React, { useState } from 'react';

const Registration_form = () => {

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState(false);



    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        for (let element of e.target) {
            switch (element.name) {
                case "name":
                    setName(element.value);
                    setNameError(validateLength(element.value));
                    break;
                case "email":
                    setEmail(element.value);
                    setEmailError(validateLength(element.value, 3));
                    break;
                case "text-area":
                    setMessage(element.value);
                    setMessageError(validateLength(element.value, 5));
                    break;
            }
        }
    
        if (nameError || emailError || messageError) {
            setMessageError(`Try again!`);
        
            setTimeout(() => {
                alert("Name requires at least two characters, email requires at least 3 characters, text-area requires at least 5 characters. Please check again!");
            }, 500);
        
            return;
        }
        const user = { name, email, message };
    
        const json = JSON.stringify(user);
    
        const result = await fetch("https://win23-assignment.azurewebsites.net/api/contactform", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: json
        });
    
        clearForm();
    
        switch (result.status) {
            case 200:
                alert("Success! The form has been sent!");
                console.log(`user task is: ${await result.text()}`);
                break;
    
            case 400:
                setMessageError(`Error! Something is not working`);
                break;
        }
    };




    const handleChange = (e) => {
        switch (e.target.name) {
            case "name":
                setName(e.target.value);
                setNameError(validateLength(e.target.value));
                break;
            case "email":
                setEmail(e.target.value);
                setEmailError(validateLength(e.target.value),3);
                break;

            case "text-area":
                setMessage(e.target.value);
                setMessageError(validateLength(e.target.value, 5));
                break;

        }
    };

    const validateLength = (value, minLength = 1) => {
        if (value.length > minLength)
            return false;
        return true;
    }


 


    const clearForm = () => {
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <>
            <form onSubmit={handleSubmit} noValidate className='container form-container'>
                <div className='container form-title'>
                    <h1>
                        Leave us a message for any information.
                    </h1>

                </div>
                <p className='errorMessage text-center'>{messageError}</p>

                <div className='all-input'>
                    <div className='input-blocks'>

                        <input type="text" name="name" className='name-and-email' placeholder={`Name*${nameError ? ` Field required` : ``}`} value={name} onChange={(e) => handleChange(e)} />

                        <input type="email" name="email" className='name-and-email' placeholder={`Email* ${emailError ? `Field required` : ``}`} value={email} onChange={(e) => handleChange(e)} />

                        <textarea className='message-input' name="text-area" type="text" placeholder={`Message* ${messageError ? `Field required` : ``}`} value={message} onChange={(e) => handleChange(e)} />
                    </div>
                </div>
                <div className='center-btn'>
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </>
    );
};

export default Registration_form;