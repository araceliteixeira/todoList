import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ListService } from '../services/list.service';
import { List } from '../model/List';
import { ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
  @ViewChild('content') private content;
  // lists property which is an array of List type
  private lists: List[] = [];
  private editing = false;
  private stubList: List = {
    description: '',
    isChecked: false,
    dueDate: null,
    _id: '-1'
  };
  private editList: List = this.stubList;
  private editDate: Date = new Date();
  private editTime: Date = new Date();
  private message: String = '';

  constructor(private listServ: ListService, private modalService: NgbModal) { }

  ngOnInit() {
    // Load all list on init
    this.loadLists();
  }

  public loadLists() {

    // Get all lists from server and update the lists property
    this.listServ.getAllLists().subscribe(
        response => this.lists = response, );
  }

  public open(content) {
    this.modalService.open(content);
  }

  private showMessage(message) {
    this.message = message;
    this.open(this.content);
  }

  // deleteList. The deleted list is being filtered out using the .filter method
  public deleteList(list: List) {
    this.listServ.deleteList(list._id).subscribe(
      response =>    this.lists = this.lists.filter(lists => lists !== list), );
  }

  public onAddList(newList) {
    // this.lists = this.lists.concat(newList);
    this.loadLists();
  }

  public onChangeCheckbox(list) {
    list.isChecked = !list.isChecked;
    this.listServ.editList(list).subscribe(
      response => {
          console.log(response);
          if (response.success) {
            this.loadLists();
          }
      },
    );
  }

  public startEditing(list) {
    this.editList = list;
    this.editDate = list.dueDate;
    this.editTime = list.dueDate;
    this.editing = true;
  }

  public cancelEditing() {
    this.editList = this.stubList;
    this.editing = false;
  }

  parseDueDate(str) {
    if (str != null && str !== '') {
      const dsplit = str.toString().split('-');
      this.editDate = new Date(Number(dsplit[0]), Number(dsplit[1]) - 1, Number(dsplit[2]));
    } else {
      this.editDate = null;
    }
  }

  parseDueTime(str) {
    if (str != null && str !== '') {
      const hsplit = str.toString().split(':');
      this.editTime = new Date();
      this.editTime.setHours(Number(hsplit[0]), Number(hsplit[1]));
    } else {
      this.editTime = null;
    }
  }

  public saveEditing() {
    if (this.editList.description === '') {
      this.showMessage('Description must not be empty.');
      return;
    }

    if (this.editDate != null) {
      this.editList.dueDate = new Date(this.editDate);

      if (this.editTime == null) {
        this.editTime = new Date();
        this.editTime.setHours(23, 59);
      } else {
        this.editTime = new Date(this.editTime);
      }

      this.editList.dueDate.setHours(this.editTime.getHours(), this.editTime.getMinutes());

    } else if (this.editTime != null) {
      this.editTime = new Date(this.editTime);
      this.editList.dueDate = new Date();
      this.editList.dueDate.setHours(this.editTime.getHours(), this.editTime.getMinutes());

    } else {
      this.editList.dueDate = null;
    }

    if (this.editList.dueDate != null && this.editList.dueDate < new Date()) {
      this.showMessage('Due date/time can\'t be in the past.');
      return;
    }

    this.editing = false;
    this.listServ.editList(this.editList).subscribe(
      response => {
          console.log(response);
          if (response.success) {
            this.editList = this.stubList;
            this.loadLists();
          }
      },
    );
  }
}
