import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { formatDate } from "@angular/common";
import {interval, Subscription} from 'rxjs';
import { List } from "../models/list.model";
import { HomeService } from "./home.service";
import { Task } from "../models/task.model";
import { Subtask } from "../models/subtask.model";
import { Comment } from "../models/comment.model";
import { FileModel } from "../models/file.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  list: List;
  task: Task;
  subTask: Subtask;
  comment: Comment;
  file: FileModel;
  public user_id: string;
  public username: string;
  public id_list: string;
  public title_list: string;
  public id_task: string;
  public title_task: string;
  public task_createDate: string;
  public id_subTask: string;
  public title_subTask: string;
  public id_comment: string;
  public title_comment: string;
  public id_file: string;
  public title_file: string;
  public inputAddTask: string;
  public inputAddSubTask: string;
  public inputAddComment: string;
  public inputSearch: string;
  public statusAbove = '0';
  public statusBelow = '1';
  public unStarred = '0';
  public starred = '1';
  secondsCounter;
  showEditList = true;
  showAddList = true;
  showDeleteListButton = true;
  showDeleteListConfirm = true;
  showDeleteTaskButton = true;
  showDeleteTaskConfirm = true;
  showDeleteSubTaskConFirm = true;
  showDeleteCommentConFirm = true;
  showDeleteFileConfirm = true;
  showLogoutButton = true;
  showAlertLayout = true;
  showRight = true;
  public autoLoad: string;
  selectedFile = null;
  event: MouseEvent;
  clientX = 0;
  clientY = 0;
  public middleStyle;
  public currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  public currentTime = formatDate(new Date(), 'HH:mm', 'en');
  public listArray: List[] = [];
  public taskArrayAbove: Task[] = [];
  public taskArrayBelow: Task[] = [];
  public taskDetailArray: Task[] = [];
  public subTaskArray: Subtask[] = [];
  public commentArray: Comment[] = [];
  public fileArray: FileModel[] = [];
  public searchResultArray: Task[] = [];
  subscription: Subscription;
  constructor(private homeService: HomeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    // session user login
    this.username = sessionStorage.getItem('username');
    this.user_id = sessionStorage.getItem('user_id');

    // declare list
    this.list = new List();

    // auto load list
    this.showList();

    // declare task
    this.task = new Task();

    // declare subTask
    this.subTask = new Subtask();

    // declare comment
    this.comment = new Comment();

    // declare file
    this.file = new FileModel();
  }

  // style
  clickOutside() {
    this.showDeleteListButton = true;
    this.showDeleteTaskButton = true;
    this.showLogoutButton = true;
  }

  toggleAddList() {
    this.showAddList = !this.showAddList;
    this.showEditList = true;
  }

  toggleEditList(id_list: string,title_list: string) {
    this.showEditList = !this.showEditList;
    this.showAddList = true;
    this.list.title = title_list; // list value
    this.id_list = id_list; // id_list
  }

  toggleDeleteList(id_list: string, title_list:string, event: MouseEvent) {
    this.showDeleteListButton = !this.showDeleteListButton;
    this.showAddList = this.showEditList = true;
    event.preventDefault();
    this.id_list = id_list;
    this.title_list = title_list;
    this.event = event;
    this.clientX = event.clientX;
    this.clientY = event.clientY;
  }

  toggleDeleteListConfirm() {
    this.showDeleteListConfirm = !this.showDeleteListConfirm;
    this.showDeleteListButton = true;
  }

  toggleDeleteTaskButton(id_task: string, title_task: string, event: MouseEvent) {
    event.preventDefault();
    this.event = event;
    this.clientX = event.clientX;
    this.clientY = event.clientY;
    this.showDeleteTaskButton = !this.showDeleteTaskButton;
    this.id_task = id_task;
    this.title_task = title_task;
  }

  toggleDeleteTaskConfirm() {
    this.showDeleteTaskConfirm = !this.showDeleteTaskConfirm;
    this.showDeleteTaskButton = true;
  }

  clickListToShowTask(id_list: string, title_list: string) {
    this.title_list = title_list;
    this.id_list = id_list;
    this.task.title = '';
    this.showTaskUncompleted();
    this.showTaskCompleted();
    this.inputSearch = '';
    this.searchResultArray = null;
    this.autoLoad = 'true';
    if (this.autoLoad === 'true') {
      this.secondsCounter = interval(3000);
      this.subscription = this.secondsCounter.subscribe(success => {
        this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
        this.currentTime = formatDate(new Date(), 'HH:mm', 'en');
        this.showAlertLayout = true;
        this.showTaskUncompleted();
        this.showTaskCompleted();
        console.log(this.autoLoad+" --- subscribe")
      });
    } else {
        this.subscription.unsubscribe();
        console.log(this.autoLoad+" --- unsubscribed");
    }
  }

  toggleShowRight() {
    this.showRight = !this.showRight;
    if (this.showRight == true) {
      this.middleStyle = 0;
    }
    else {
      this.middleStyle = 367;
    }
  }

  clickToHideRight() {
    this.showRight = true;
    this.middleStyle = 0;
  }

  toggleDeleteSubTaskButton(id_subTask: string, title_subTask) {
    this.id_subTask = id_subTask;
    this.title_subTask = title_subTask;
    this.showDeleteSubTaskConFirm = !this.showDeleteSubTaskConFirm;
  }

  toggleDeleteCommentButton(id_comment: string, title_comment) {
    this.id_comment = id_comment;
    this.title_comment = title_comment;
    this.showDeleteCommentConFirm = !this.showDeleteCommentConFirm;
  }

  toggleDeleteFileButton(id_file: string, title_file: string) {
    this.id_file = id_file;
    this.title_file = title_file;
    this.showDeleteFileConfirm = !this.showDeleteFileConfirm;
  }

  toggleAlertLayout() {
    this.showAlertLayout = false;
  }

  toggleLogoutButton() {
    this.showLogoutButton = !this.showLogoutButton;
  }

  //logout
  logOut() {
    this.router.navigate(['index']);
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('user_id');
  }

  // list function
  showList() {
    this.homeService.showListByUser(this.user_id).subscribe(data => {
        this.listArray = data;
      },error => { alert('Server error') }
    )
  }

  addNewList() {
    if (this.list.title.trim() == '') {
      alert("List Name cannot be null")
    }
    else {
      this.showAddList = !this.showAddList;
      this.homeService.addList(this.list,this.user_id).subscribe(
        success => {
          this.showList();
          this.title_list = this.list.title;
          this.list.title = '';
        },error => { alert("Server error") }
      )
    }
  }

  editList() {
    if (this.list.title.trim() == '') {
      alert("List Name cannot be null")
    }
    else {
      this.showEditList = !this.showEditList;
      this.homeService.editListByID(this.list, this.id_list).subscribe(
        success => {
          this.showList();
          this.title_list = this.list.title;
          this.list.title = '';
        },error => { alert("Server error")}
      )
    }
  }

  deleteList() {
    this.homeService.deleteListByID(this.id_list).subscribe(
      success => {
        this.showList();
        this.showTaskUncompleted();
        this.showTaskCompleted();
        this.showDeleteListConfirm = true;
        this.title_list = '';
      },error => { alert('Server error') }
    )
  }

  // task function
  showTaskUncompleted() {
    this.homeService.showTaskByList(this.id_list, this.statusAbove).subscribe(
      data => {
        this.taskArrayAbove = data;
      },error => { alert('Server error') }
    )
  }

  showTaskCompleted() {
    this.homeService.showTaskByList(this.id_list, this.statusBelow).subscribe(
      data => {
        this.taskArrayBelow = data;
      },error => { alert('Server error') }
    )
  }

  markAsCompleted(id_task: string, title_task:string) {
    this.homeService.changeTaskStatus(this.task, this.statusBelow, id_task).subscribe(
      success => {
        this.showTaskUncompleted();
        this.showTaskCompleted();
        this.showTaskDetail(id_task, title_task);
      },error => { alert('Server error') }
    )
  }

  markAsUncompleted(id_task: string, title_task: string) {
    this.homeService.changeTaskStatus(this.task, this.statusAbove, id_task).subscribe(
      success => {
        this.showTaskUncompleted();
        this.showTaskCompleted();
        this.showTaskDetail(id_task, title_task);
      },error => { alert('Server error') }
    )
  }

  markAsStar(id_task: string, title_task: string) {
    this.homeService.changeTaskStar(this.task, this.starred, id_task).subscribe(
      success => {
        this.showTaskUncompleted();
        this.showTaskCompleted();
        this.showTaskDetail(id_task, title_task);
      },error => { alert('Server error') }
    )
  }

  markAsUnStar(id_task: string, title_task: string) {
    this.homeService.changeTaskStar(this.task, this.unStarred, id_task).subscribe(
      success => {
        this.showTaskUncompleted();
        this.showTaskCompleted();
        this.showTaskDetail(id_task, title_task);
      },error => { alert('Server error') }
    )
  }

  addTask() {
    this.task.title = this.inputAddTask;
    if (this.inputAddTask.trim() == '') {
      alert("Task name cannot be null")
    }
    else {
      this.homeService.addTaskByList(this.task, this.id_list).subscribe(
        success => {
          this.inputAddTask = '';
          this.showTaskUncompleted();
          this.showTaskDetail(success.id, this.task.title)
        },error => { alert("Server error") }
      )
    }
  }

  editTask() {
    if (this.task.title.trim() == '') {
      alert("Task name cannot be null")
    }
    else {
      this.homeService.editTaskByID(this.task, this.id_task).subscribe(
        success => {
          this.showTaskDetail(this.id_task, this.task.title);
          this.showTaskUncompleted();
          this.showTaskCompleted();
        },error => { alert("Server error") }
      )
    }
  }

  deleteTask() {
    this.homeService.deleteTaskByID(this.id_task).subscribe(
      success => {
        this.showTaskUncompleted();
        this.showTaskCompleted();
        this.showTaskDetail(this.id_task, this.title_task)
        this.showDeleteTaskConfirm = true;
        this.showRight = true;
        this.middleStyle = 0;
      },error => { alert('Server error') }
    )
  }

  // task right function
  showTaskDetail(id_task: string, title_task: string) {
    this.task.title = title_task;
    this.title_task = this.task.title;
    this.id_task = id_task;
    this.homeService.showTaskDetail(id_task).subscribe(
      data => {
        this.taskDetailArray = data;
        this.showSubTask();
        this.showComment();
        this.showFile();
        console.log(this.taskDetailArray)
      },error => { alert('Server error') }
    )
  }

  showTaskCreateDate(createDate: string) {
    this.task_createDate = createDate;
  }

  editTaskDueDate(dueDate: string, title_task: string) {
    this.title_task = title_task;
    this.task.duedate = dueDate;
    this.homeService.updateDateByID(this.task, this.id_task).subscribe(
      success => {
        this.showTaskUncompleted();
        this.showTaskCompleted();
        this.showTaskDetail(this.id_task, this.title_task);
      },error => { alert('Server error') }
    )
  }

  editTaskReminder(reminder: string, title_task: string) {
    this.title_task = title_task;
    this.task.reminder = reminder;
    this.homeService.updateReminderByID(this.task, this.id_task).subscribe(
      success => {
        this.showAlertLayout = true;
        this.showTaskUncompleted();
        this.showTaskCompleted();
        this.showTaskDetail(this.id_task, this.title_task);
      },error => { alert('Server error') }
    )
  }

  // subTask function
  showSubTask() {
    this.homeService.showSubTaskByTaskID(this.id_task).subscribe(
      data => {
        this.subTaskArray = data;
      },error => { alert('Server error') }
    )
  }

  addSubTask() {
    this.subTask.title = this.inputAddSubTask;
    if (this.inputAddSubTask.trim() == '') {
      alert("SubTask cannot be null");
    }
    else {
      this.homeService.addSubTaskByTask(this.subTask, this.id_task).subscribe(
        success => {
          this.inputAddSubTask = '';
          this.showTaskDetail(this.id_task, this.title_task);
        },error => { alert('Server error') }
      )
    }
  }

  editSubTask(id_subTask: string, title_subTask: string) {
    this.subTask.title = title_subTask;
    this.homeService.editSubTaskByID(this.subTask, id_subTask).subscribe(
      success => {
        this.showSubTask();
      },error => { alert('Server error') }
    )
  }

  markAsChecked(id_subTask: string) {
    this.homeService.changeSubTaskStatus(this.subTask, id_subTask, this.statusBelow).subscribe(
      success => {
        this.showSubTask();
      },error => { alert('Server error') }
    )
  }

  markAsUnChecked(id_subTask: string) {
    this.homeService.changeSubTaskStatus(this.subTask, id_subTask, this.statusAbove).subscribe(
      success => {
        this.showSubTask();
      },error => { alert('Server error') }
    )
  }

  deleteSubTask() {
    this.homeService.deleteSubTaskByID(this.id_subTask).subscribe(
      success => {
        this.showDeleteSubTaskConFirm = true;
        this.showSubTask();
      },error => { alert('Server error') }
    )
  }

  // comment function
  showComment() {
    this.homeService.showCommentByTaskID(this.id_task).subscribe(
      data => {
        this.commentArray = data;
      },error => { alert('Server error') }
    )
  }

  addComment() {
    this.comment.title = this.inputAddComment;
    if (this.inputAddComment.trim() == '') {
      alert('Comment cannot be null');
    }
    else {
      this.homeService.addCommentByTaskID(this.comment, this.id_task).subscribe(
        success => {
          this.inputAddComment = '';
          this.showComment();
        },error => { alert('Server error') }
      )
    }
  }

  deleteComment() {
    this.homeService.deleteCommentByID(this.id_comment).subscribe(
      success => {
        this.showDeleteCommentConFirm = true;
        this.showComment();
      }
    )
  }

  // file function
  onFileSelected(files : File[]) {
    this.selectedFile = files;
    this.addFile(files);
  }

  showFile() {
    this.homeService.showFileByTaskID(this.id_task).subscribe(
      data => {
        this.fileArray = data;
      },error => { alert('Server error') }
    )
  }

  addFile(files: File[]) {
    const formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', f));
    this.file.title = this.selectedFile.name;
    this.homeService.addFileByTaskID(this.file, this.id_task, formData).subscribe(
      event => {
        console.log("success");
        this.showFile();
      },error => { alert('Server error') }
    )
  }

  deleteFile(title_file: string) {
    this.homeService.deleteFileByID(this.id_file, title_file).subscribe(
      success => {
        this.showDeleteFileConfirm = true;
        this.showFile();
      },error => { alert('Server error') }
    )
  }

  // show search result
  searchResult(inputSearch: string) {
    this.autoLoad = 'false';
    console.log(this.autoLoad+" --- run search input")
    this.inputSearch = inputSearch;
    if (this.inputSearch.trim() == '') {
      this.homeService.searchTask(this.inputSearch).subscribe(
        data => {
          this.searchResultArray = null;
        }
      )
    } else {
      this.homeService.searchTask(this.inputSearch).subscribe(
        data => {
          this.searchResultArray = data;
          this.taskArrayAbove = null;
          this.taskArrayBelow = null;
        }
      )
    }

  }
}

//https://stackblitz.com/edit/angular-file-upload?file=app%2Fapp.component.ts
