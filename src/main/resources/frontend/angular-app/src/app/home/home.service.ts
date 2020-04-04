import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import { List } from "../models/list.model";
import { Task } from "../models/task.model";
import { Subtask } from "../models/subtask.model";
import { Comment } from "../models/comment.model";
import { FileModel } from "../models/file.model";

@Injectable({ providedIn: 'root'})

export class HomeService {
  constructor(private http: HttpClient) {
  }

  // list api
  showListByUser(user_id: string) : Observable<List[]> {
    let params = new HttpParams();
    params = params.append('user_id', user_id);
    return this.http.get<List[]>('http://localhost:8080/list/getListByUserID',{params: params});
  }

  addList(list: List, user_id: string) {
    let params = new HttpParams();
    params = params.append('user_id', user_id);
    return this.http.post<List>('http://localhost:8080/list/add', list, {params: params});
  }

  editListByID(list: List, id_list: string) {
    let params = new HttpParams();
    params = params.append('id', id_list);
    return this.http.put<List>('http://localhost:8080/list/update', list, { params: params });
  }

  deleteListByID(id_list: string) {
    let params = new HttpParams();
    params = params.append('id', id_list);
    return this.http.delete('http://localhost:8080/list/delete', {params: params});
  }

  // task api
  showTaskByList(id_list: string, status: string) : Observable<Task[]> {
    let params = new HttpParams();
    params = params.append('list_id',id_list);
    params = params.append('status', status);
    return this.http.get<Task[]>('http://localhost:8080/task/getTaskByListID',{ params: params});
  }

  showTaskDetail(id_task: string) : Observable<Task[]> {
    let params = new HttpParams();
    params = params.append('id', id_task);
    return this.http.get<Task[]>('http://localhost:8080/task/showTaskDetail', { params: params });
  }

  changeTaskStatus(task: Task, status: string, id_task: string) {
    let params = new HttpParams();
    params = params.append('status', status);
    params = params.append('id', id_task);
    return this.http.put('http://localhost:8080/task/changeTaskStatus', task, { params: params });
  }

  changeTaskStar(task: Task, star: string, id_task: string) {
    let params = new HttpParams();
    params = params.append('star', star);
    params = params.append('id', id_task);
    return this.http.put('http://localhost:8080/task/changeTaskStar', task, { params: params });
  }

  addTaskByList(task: Task, list_id: string) {
    let params = new HttpParams();
    params = params.append('list_id',list_id);
    return this.http.post<Task>('http://localhost:8080/task/add', task, { params: params });
  }

  editTaskByID(task: Task, id_task: string) {
    let params = new HttpParams();
    params = params.append('id', id_task);
    return this.http.put('http://localhost:8080/task/update', task, { params: params });
  }

  deleteTaskByID(id_task: string) {
    let params = new HttpParams();
    params = params.append('id', id_task);
    return this.http.delete('http://localhost:8080/task/delete', { params: params });
  }

  updateDateByID(task: Task, id_task: string) {
    let params = new HttpParams();
    params = params.append('id', id_task);
    return this.http.put('http://localhost:8080/task/updateDuedate', task, { params: params });
  }

  updateReminderByID(task: Task, id_task: string) {
    let params = new HttpParams();
    params = params.append('id', id_task);
    return this.http.put('http://localhost:8080/task/updateReminder', task, { params: params });
  }

  // subTask api
  showSubTaskByTaskID(id_task: string) : Observable<Subtask[]> {
    let params = new HttpParams();
    params = params.append('id_task', id_task);
    return this.http.get<Subtask[]>('http://localhost:8080/subtask/getSubTaskByTaskID', { params: params });
  }

  addSubTaskByTask(subtask: Subtask, id_task: string) {
    let params = new HttpParams();
    params = params.append('task_id', id_task);
    return this.http.post<Subtask>('http://localhost:8080/subtask/add', subtask, { params: params });
  }

  editSubTaskByID(subTask: Subtask, id_subTask: string) {
    let params = new HttpParams();
    params = params.append('id', id_subTask);
    return this.http.put('http://localhost:8080/subTask/update', subTask ,{ params: params });
  }

  changeSubTaskStatus(subtask: Subtask, id_subTask: string, status: string) {
    let params = new HttpParams();
    params = params.append('status', status);
    params = params.append('id', id_subTask);
    return this.http.put('http://localhost:8080/subTask/changeTaskStatus', subtask, { params: params});
  }

  deleteSubTaskByID(id_subTask: string) {
    let params = new HttpParams();
    params = params.append('id', id_subTask);
    return this.http.delete('http://localhost:8080/subTask/delete', { params: params });
  }

  // comment api
  showCommentByTaskID(id_task: string) : Observable<Comment[]> {
    let params = new HttpParams();
    params = params.append('id_task', id_task);
    return this.http.get<Comment[]>('http://localhost:8080/comment/showComment', { params: params });
  }

  addCommentByTaskID(comment: Comment, id_task: string) {
    let params = new HttpParams();
    params = params.append('id_task', id_task);
    return this.http.post<Comment>('http://localhost:8080/comment/add', comment, { params: params });
  }

  deleteCommentByID(id_comment: string) {
    let params = new HttpParams();
    params = params.append('id', id_comment);
    return this.http.delete('http://localhost:8080/comment/delete', { params: params });
  }

  // file api
  showFileByTaskID(id_task: string) : Observable<FileModel[]> {
    let params = new HttpParams();
    params = params.append('task_id', id_task);
    return this.http.get<Comment[]>('http://localhost:8080/file/showFilebyTaskID', { params: params });
  }
  addFileByTaskID(file: FileModel, id_task: string, formData: FormData) : Observable<void>{
    let params = new HttpParams();
    params = params.append('task_id', id_task);
    return this.http.post<void>('http://localhost:8080/uploadOneFile', formData, { params: params });
  }

  deleteFileByID(id_file: string) {
    let params = new HttpParams();
    params = params.append('id', id_file);
    return this.http.delete('http://localhost:8080/file/delete', { params: params });
  }

}
// https://www.techiediaries.com/angular-9-8-url-query-parameters-with-httpparams-and-fromstring/


