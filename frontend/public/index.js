function onSubmision(form){
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value)){
        if(form.password.value!=""){
            return true;
        }
    }
    else{
        alert("Email is Invalid");
    }
    return false
}