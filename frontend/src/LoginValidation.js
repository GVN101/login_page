function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^[a-zA-Z0-9_.-]*$/

    if(values.email ===""){
        error.email = "Name should not be empty"
    }
    else if (!email_pattern.test(values.email)) {
         error.email = "Email Didn't match"
    }else{
        error.email = ""
    }
    if (values.password === ""){
        error.password = "Password cannot be empty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password didn't match"
    }
    else{
        error.password =""
    }
     return error;
    
}
export default Validation