import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postData: any;
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private postService: PostService,
    private activatedRoute: ActivatedRoute
    ) { 
   
  }
  ngOnInit() {
    this.getService();
    this.getActivatedRout();

  }
  // Get Activated Route form URL Method
  getActivatedRout(){

    let id2 =  this.activatedRoute.snapshot.paramMap.get('id');
    console.log('"snapshot.paramMap" param ID2 : ' + id2);
    
    // ************OR************
    // use when same page and component having change
    // Example : 
    // 1. we have list of users and 
    // 2. we redirect form users List page to user Detail page
    // 3. user detail page have button 
    // from where we can go another user detail page  
    // but user detail have same component there we will use subscribe Observal
    this.activatedRoute.paramMap
    .subscribe(params => {
      let  id = params.get('id');
      console.log('param ID : ' + id);
    })
  }
  getService(){
    this.postService.getPost().subscribe( response => {
      this.postData = response;
    }, error => {
      // alert('An unexpected error occured.');
      // console.log(error);
    })
  }
  // Post Call
  createPost(textInputData: HTMLInputElement){
    let newData = {title : textInputData.value};
    this.postService.addPost(JSON.stringify (newData))  
    .subscribe(response => {
      newData['id'] = response['id'];
      // add on top list
      this.postData.splice(0,0,newData); 
    }, error => {
      console.log("An unexpected error occured. ")
    })
  }
  // Delete Call
  deletePost(pdata){
    this.postService.removePost(pdata)
    .subscribe(response => {
      let index = this.postData.indexOf(pdata);
      this.postData.splice(index, 1);
    }, error => {
      // alert('An unexpected error occured.');
      // console.log(error);
    })
  }

  // PUT and Patch(only specific Data will update) Call
  updatePost(pdata){
    let patchData = {isActive: true};
    let wholeData = this.postData;
    // Patch Method
    // this.postService.editPost(pdata, patchData)
    this.postService.editPost(pdata, wholeData)
    .subscribe(() => {
    },error => {
      // alert('An unexpected error occured.');
      // console.log(error);
    })
  }
}
