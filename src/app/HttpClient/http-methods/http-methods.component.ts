import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-http-methods',
  templateUrl: './http-methods.component.html',
  styleUrls: ['./http-methods.component.css']
})
export class HttpMethodsComponent implements OnInit {
  add=false;
  update=false
details :any;
show=false;
id:any=''
ename:any=''
salary:any=''
location:any=''
designation:any=''
currentId:any;
  constructor(private service:HttpServiceService){

  }
  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(){
    this.service.getDetails().subscribe((data)=>{
   this.details = data
    })
  }
  postData(){
    let newDetails={
      "id":this.id,
      "ename":this.ename,
      "salary":this.salary,
      "location":this.location,
      "designation":this.designation
    }
    this.service.postDetails(newDetails).subscribe((data)=>{
      this.fetchData()
      })
     
  }
  editData(body:any){
    this.show=true;
    this.update=true;
    this.add=false;

    this.id= body.id,
    this.ename = body.ename,
    this.salary = body.salary,
    this.location = body.location,
    this.designation = body.designation
    this.currentId=this.id
  }
  updateData(){
let updatedData={
      "id":this.id,
      "ename":this.ename,
      "salary":this.salary,
      "location":this.location,
      "designation":this.designation
}
this.service.editDetails( this.currentId,updatedData).subscribe((data)=>{
  this.fetchData()
})
  }
  deleteData(id:any){
  this.service.deleteDetails(id).subscribe((data)=>{
    confirm('Are you sure')
   this.fetchData()
 })
 }
  onsubmit(empForm:NgForm){
console.log(empForm.value);
 this.postData();

  }
  addDetails(){
  this.show =true;
  this.add=true;
  }

 
}
