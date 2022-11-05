import { Component, OnInit } from '@angular/core';
import { Todo, User, UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  todos: Todo[] = [];

  selectedUserId: number;

  loading: boolean = false;

  constructor(private userService: UserServiceService) { }


  loadTodos(userId: number){
    this.selectedUserId = userId;
    this.userService.getUserTodos(userId).subscribe(d => {
      this.todos = d;
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.userService.getUsers().subscribe(d => {
      this.users = d;
      this.loading = false;
    });
  }

}
