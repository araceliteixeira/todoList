import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from '../model/List';
import { ListService } from '../services/list.service';
import { ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  @ViewChild('content') private content;
  private newList: List;
  private dueDate: Date;
  private dueTime: Date;
  private message: String = '';

  @Output() addList: EventEmitter<List> = new EventEmitter<List>();

  constructor(private listServ: ListService, private modalService: NgbModal) { }

  ngOnInit() {
    this.initFields();
  }

  private initFields() {
    this.newList = {
      description: '',
      isChecked: false,
      dueDate: null,
      _id: ''
    };
    this.dueDate = null;
    this.dueTime = null;
  }

  public open(content) {
    this.modalService.open(content);
  }

  private showMessage(message) {
    this.message = message;
    this.open(this.content);
  }

  parseDueDate(str) {
    if (str != null && str !== '') {
      const dsplit = str.toString().split('-');
      this.dueDate = new Date(Number(dsplit[0]), Number(dsplit[1]) - 1, Number(dsplit[2]));
    } else {
      this.dueDate = null;
    }
  }

  parseDueTime(str) {
    if (str != null && str !== '') {
      const hsplit = str.toString().split(':');
      this.dueTime = new Date();
      this.dueTime.setHours(Number(hsplit[0]), Number(hsplit[1]));
    } else {
      this.dueTime = null;
    }
  }

  public onSubmit() {
    if (this.newList.description === '') {
      this.showMessage('Description must not be empty.');
      return;
    }

    if (this.dueDate != null) {
      this.newList.dueDate = new Date(this.dueDate);

      if (this.dueTime == null) {
        this.dueTime = new Date();
        this.dueTime.setHours(23, 59);
      } else {
        this.dueTime = new Date(this.dueTime);
      }

      this.newList.dueDate.setHours(this.dueTime.getHours(), this.dueTime.getMinutes());

    } else if (this.dueTime != null) {
      this.dueTime = new Date(this.dueTime);
      this.newList.dueDate = new Date();
      this.newList.dueDate.setHours(this.dueTime.getHours(), this.dueTime.getMinutes());

    } else {
      this.newList.dueDate = null;
    }

    if (this.newList.dueDate != null && this.newList.dueDate < new Date()) {
      this.showMessage('Due date/time can\'t be in the past.');
      return;
    }

    this.listServ.addList(this.newList).subscribe(
      response => {
          console.log(response);
          if (response.success) {
            this.addList.emit(this.newList);
            this.initFields();
          }
      },
    );
  }
}
