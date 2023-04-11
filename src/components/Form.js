import React,{useState} from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";

const Form = (props) => {

    const [username,setUsername] = useState('');
    const [age,setAge] = useState('');
    const [isValid,setIsValid]  =useState(true);
    const [errorTitle,setErrorTitle] = useState('');
    const [errorMessage,setErrorMessage] = useState('');

    const usernameChangeHandler = (e) =>{
        setUsername(e.target.value);
    }

    const ageChangeHandler = (e) =>{
        setAge(e.target.value);
    };

    const submitChangeHandler = (e) =>{
        e.preventDefault();

        if(username.trim().length === 0 || age.trim().length === 0)
        {
            setIsValid(false);
            setErrorTitle('Invalid Input');
            setErrorMessage('Please enter valid name and age.(Non-Empty Value)');
            return;
        }
        
        if(age < 1)
        {
            // console.log("Came Here");
            setIsValid(false);
            setErrorTitle('Invalid Input');
            setErrorMessage('Please enter age.(>0)');
            return;
        }
        const userDetails = {
            username:username,
            age:age,
            id:Math.random().toString()
        };
        props.onAddUser(userDetails);
        setUsername('');
        setAge('');
    }

    const errorHandler = () =>{
        setIsValid(true);
    }

    return (
        <div>
        {!isValid && <ErrorModal title={errorTitle} msg={errorMessage} onConform={errorHandler} />}

        <Card className="input">
            <form onSubmit={submitChangeHandler}>
                <label >Username</label>
                <input type="text" value={username} onChange={usernameChangeHandler} />
                <label>Age (Years)</label>
                <input type="text" value={age} onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </div>
    )
}


export default Form;