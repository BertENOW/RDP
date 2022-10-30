import Axios from 'axios'

export function GetCurrentDate(seperator='-'){
    let newDate = new Date()
    let date_raw = newDate.getDate();
    let month_raw = newDate.getMonth()+1;
    let year_raw = newDate.getFullYear();
    var date, month, year;
    if(date_raw<10){date ='0'+date_raw.toString()} else{date=date_raw.toString()}
    if(month_raw<10) {month='0'+month_raw.toString()} else (month=month_raw.toString())
    year=year_raw.toString()
    //return (<div>{year}{seperator}</div>);
    return(year+seperator+month+seperator+date)
}


//function to check email is correct format
export function ValidateEmail(email){
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

export const Register=(url, emailReg, passwordReg, firstNameReg, lastNameReg, today)=>{
    Axios.post(url, {
    email:emailReg,
    password:passwordReg,
    firstName:firstNameReg,
    lastName:lastNameReg,
    dateCreated:today
    }).then((res)=>{
        console.log(res)
        return res
        
    }).catch((err)=>{
        console.log(err)
    })
    
}

export const Login = (url, emailLogin, passwordLogin)=>{
    const data =Axios.post(url, {
        email:emailLogin, 
        password:passwordLogin
    }).then((res)=>{
        console.log(res)
        return res
    }).catch((err)=>{
        console.log(err)
    })
}
