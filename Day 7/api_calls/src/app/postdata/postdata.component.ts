import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.css']
})
export class PostdataComponent implements OnInit {


  _httpCallsObj:HttpClient;

  postDetails:any;
  userInfoData:any;
  postFilerData:any;

  

  constructor(_httpCallREF:HttpClient) 
  {
    this._httpCallsObj = _httpCallREF;
   }


   getPostById(postId:any)
   {
    console.log(postId);
    this._httpCallsObj.get('https://jsonplaceholder.typicode.com/posts/' + postId).subscribe( data=>{
      this.postFilerData = data;
      console.log(this.postFilerData);
     // alert('Got the data'); //the worst line of  code in Angular
      return this.postFilerData;
  }); 
   }

   getUserDetails()
   {
    this._httpCallsObj.get('https://jsonplaceholder.typicode.com/users').subscribe( data=>{
      this.userInfoData = data;
      console.log(this.userInfoData);
      alert('Got the data'); //the worst line of  code in Angular
      return this.userInfoData;
  });
   }

   getPostData()
   {
      this._httpCallsObj.get('https://jsonplaceholder.typicode.com/posts').subscribe( data=>{
          this.postDetails = data;
          console.log(this.postDetails);
          alert('Got the data'); //the worst line of  code in Angular
          return this.postDetails;
      });
   }

  ngOnInit(): void {
  }

}



