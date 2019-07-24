import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserServices} from '../Services/user-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User;

  constructor(private userService:UserServices) { }

  ngOnInit() {
    this.user=this.userService.getUser("1");
  }

 

  // variables 

  isPersonDetailsEditableDisabled=true; // used to control disable property in personal details
  isContactDetailsEditableDisabled=true;// control disable property in contact details
  islogintDetailsEditableDisabled=true;
  errormsg1;            // check password changes
  errormsg2;
  errormsg3;
  errormsgEnable1=true;
  errormsgEnable2=true;
  errormsgEnable3=true;
  i:number;
  count=0;
 addNewContact;

 imgSrc:String ='assets/img/empty-image.png';
  selectedFile:any=null;

 //methods 

 onFileSelect(event:any){
  if(event.target.files && event.target.files[0]){
    const reader=new FileReader();
    reader.onload=(e:any) => this.imgSrc= e.target.result;
    reader.readAsDataURL(event.target.files[0]);
    this.selectedFile=event.target.files[0]
  }
  else{
    this.imgSrc='assets/img/empty-image.png';
    this.selectedFile=null;
  }

 }

 PersonDetailsEditButtonClick(event){     //used to edit person details
  return this.isPersonDetailsEditableDisabled=false;
 }

changePersonalDetails(event){ // personal details save change
  return this.isPersonDetailsEditableDisabled=true;

  //write the method to send data to data base

}

ContactDetailsEditableDisabled(event){    //used to edit contact detail
  return this.isContactDetailsEditableDisabled=false;

}


changeContactlDetails(event){   // contact detals save change
  return this.isContactDetailsEditableDisabled=true;

  //write the method to send data to data base

}

addNewContacts(event){ 
        
  this.addNewContact= prompt("Enter number");      // used to add new contatc using msg box
    
 for(this.i=0;this.i<this.addNewContact.length;this.i++){  
  if((this.addNewContact.charAt(this.i)>=0 ) || (this.addNewContact.charAt(this.i)<=9) ){  //check numbers
      this.count++;
  } else{
  alert("number is invalid");
}
}

// limit number of contacts
if(this.count===10){                                    //check amount of numbers
  if(this.user.contacts.length<3){                    // check array size
  this.user.contacts.push(this.addNewContact);
}
else{
  alert("you can only save 3 contact numbers");
}
}

else{
 alert("number is invalid");
}

this.count=0;                              //set count=0 again 
}




}
