import { useState } from "react";
import Input from "./Input";

const Main = () => {

    const [data, setData] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            password:''
        }
    );

    const [errorFirstName, SetErrorFirstName] = useState(false);
    const [errorLastName, SetErrorLastName] = useState(false);
    const [errorEmail, SetErrorEmail] = useState(false);
    const [errorPassword, SetErrorPassword] = useState(false);

    const [submit, Setsubmit] = useState(false);

    const handleData = ({target}) => {
        const {name, value} = target;
        setData((current)=>({
            ...current,
            [name]:value
        }))
       Setsubmit(false);
    }


    const handlesubmit = (event) => {
        const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email);
        event.preventDefault();

        if(data.firstName ===''){
            SetErrorFirstName(true);
        }else{
            SetErrorFirstName(false);
        }

        if(data.lastName ===''){
            SetErrorLastName(true);
        }else{
            SetErrorLastName(false);
        }

        if(!validEmail){
            SetErrorEmail(true);
        }else{
            SetErrorEmail(false);
        }

        if(data.password ===''){
            SetErrorPassword(true);
        }else{
            SetErrorPassword(false);
        }

        if(submit){
            Setsubmit(false);
        }

        if(data.firstName !=='' && data.lastName !=='' && validEmail && data.password !==''){
            Setsubmit(true);
            setData({
                firstName: '',
                lastName: '',
                email: '',
                password:''
            })
        }
    
    }

    return ( 
        <div className="main-container">
            <button className="btn">
                <span className="tryIt4Free">Try it free 7 days</span> then $20/mo. thereafter
            </button>
            <form className="form-container" onSubmit={handlesubmit}>

            { submit && <p className="success">Success! We received your submission!</p>}

            <div className="input-container">
                <Input name={data.firstName}
                 placeholder="First Name" 
                 error={errorFirstName} 
                 handleData={handleData}
                 />
                {errorFirstName && <p className="error">First Name cannot be empty</p>}
            </div>

            <div className="input-container">
                <Input name={data.lastName}
                 placeholder="Last Name" 
                 error={errorLastName} 
                 handleData={handleData}/>
                 {errorLastName && <p className="error">Last Name cannot be empty</p>}
            </div>

            <div className="input-container">
                <Input name={data.email}
                 placeholder="Email Address" 
                 error={errorEmail} 
                 handleData={handleData}/>
                  {errorEmail && <p className="error">Looks like this is not an email</p>}
            </div>

            <div className="input-container">
                <Input name={data.password}
                 placeholder="Password" 
                 error={errorPassword} 
                 handleData={handleData}/>
                 {errorPassword && <p className="error">Password cannot be empty</p>}
            </div>
                
            <button type="submit" className="btn-submit">Claim your free trial</button>

            <div className="form-footer">
                <p className="agree">
                    By clicking the button, you are agreeing to our &nbsp;
                    <span className="link-termsService" >
                        Terms and Services
                    </span>
                </p>
            </div>
                
            </form>
        </div>
     );
}
 
export default Main;