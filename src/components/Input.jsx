const Input = ({handleData, error, placeholder, name}) => {
    
    let nameValue;
    switch(placeholder){    
        case "First Name":
            nameValue='firstName';
            break;
        case "Last Name":
            nameValue='lastName';
            break;
        case "Email Address":
            nameValue='email';
            break;
        case "Password":
            nameValue='password';
            break;
        default:
            break;
        }

    return ( 
        <input 
            onChange={handleData}
            value={name || ''} 
            type="text"
            name={nameValue} 
            className={`input ${error ? 'ativeError' : 'inativeError'}`} 
            placeholder={placeholder}
        />
     );
}
 
export default Input;