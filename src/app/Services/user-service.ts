import { User } from '../model/User'; // import user class

export class UserServices{
    user: User ={  // create user object to assign valus for user class objects
        id:"1",
        userName:"Thilini Wathsala",
        fname:"Thilini",
        lname:"Wathsala",
        position:"Software Developer",
        aboutme:"abc",  
        contacts:["0710372906","0715794395"], // to give many contact numbers
        no:"10",
        street:"Sudarshana road",
        city:"Malambe",     
        email:"o.t.wathsala@gmail.com", 
        username:"User Name",
        newpassword:"",
        confirmpassword:""

   
} 

getUser(id:String):User { 
    return this.user;
}

}