import { Component, OnInit } from '@angular/core';
import{PostsService}from '../posts.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersContainer=[];
  constructor(_postsServeice:PostsService) {
    _postsServeice.getPosts().subscribe(x=>this.usersContainer=x)
   }

  ngOnInit(): void {
  }

}
