import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:3000/users';
  constructor(private client: HttpClient) { }

  getAllUsers(){
    return this.client.get(this.baseUrl);
  }
  getUserById(userId:any){
    return this.client.get(`${this.baseUrl}/${userId}`)
  }

  addUser(user:any){
    return this.client.post(`${this.baseUrl}`,user);
  }
  editUser(userId:any, user:any){
    return this.client.put(`${this.baseUrl}/${userId}`,user);
  }
  deleteUser(userId:any){
return this.client.delete(`${this.baseUrl}/${userId}`);
  }
}
