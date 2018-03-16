import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from '../model/List';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  private newList: List;
  private dueDate: Date;
  private dueTime: Date;

  @Output() addList: EventEmitter<List> = new EventEmitter<List>();

  constructor(private listServ: ListService) { }

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

  public onSubmit() {
    if (this.newList.description === '') {
      alert('Description must not be empty.');
      return;
    }
    if (this.dueDate != null) {
      this.newList.dueDate = this.dueDate;

      if (this.dueTime == null) {
        this.dueTime = new Date();
        this.dueTime.setHours(23, 59);
      }

      this.newList.dueDate.setHours(this.dueTime.getHours(), this.dueTime.getMinutes());
    } else if (this.dueTime != null) {
      this.newList.dueDate = this.dueTime;
    }
    if (this.newList.dueDate != null && this.newList.dueDate < new Date()) {
      alert('Due date/time can\'t be in the past.');
    } else {
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
}
