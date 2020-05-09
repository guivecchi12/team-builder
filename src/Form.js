import React, { useState } from "react";


const Form = props =>{
    const [member, setMember] = useState(
        {
            name: "",
            email: "",
            role: ""
    });

    const clearMember = () => {
        setMember(
            {
                name: "",
                email: "",
                role: ""
            }
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(member);
        clearMember();
      };

    const createMember = event =>{
        setMember({
            ...member,
            [event.target.name]: event.target.value
        });
    };

    return(
        <form onSubmit={handleSubmit}>
            
            <label htmlFor="name"> Name: </label>
            <input 
                id="name"
                type="text" 
                name="name" 
                placeholder="Please Enter Your Name"
                value={member.name}
                onChange = {event=> createMember(event)}
            />
            <label htmlFor="email"> Email: </label>
            <input
                id="email"
                type="text"
                name="email"
                placeholder="Please Enter Your Email:"
                value={member.email}
                onChange = {event=> createMember(event)}
            />
            <label htmlFor="role"> Role: </label>
            <input
                id="role"
                type="text"
                name="role"
                placeholder="Please Enter Your Role:"
                value={member.role}
                onChange = {event=> createMember(event)}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;