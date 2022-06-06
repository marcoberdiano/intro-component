const Input = ({handleData, error, placeholder, name}) => {
    
    let nameValue;
    let errorMsg;
    let textInput='text';
    switch(placeholder){    
        case "First Name":
            nameValue='firstName';
            errorMsg='First Name cannot be empty';
            break;
        case "Last Name":
            nameValue='lastName';
            errorMsg='Last Name cannot be empty';
            break;
        case "Email Address":
            nameValue='email';
            errorMsg='Looks like this is not an email';
            break;
        case "Password":
            nameValue='password';
            errorMsg='Password cannot be empty';
            textInput='password';
            break;
        default:
            break;
    }

    return (
        <div className="input-container">
            <input 
                onChange={handleData}
                value={name || ''} 
                type={textInput}
                name={nameValue} 
                className={`input ${error ? 'ativeError' : 'inativeError'}`} 
                placeholder={placeholder}
            />
            {error && <p className="error">{errorMsg}</p>}
        </div>
     );
}
 
export default Input;