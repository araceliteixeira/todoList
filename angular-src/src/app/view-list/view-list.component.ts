import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ListService } from '../services/list.service';
import { List } from '../model/List';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

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

  constructor(private listServ: ListService) { }

  ngOnInit() {
    // Load all list on init
    this.loadLists();
  }

  public loadLists() {

    // Get all lists from server and update the lists property
    this.listServ.getAllLists().subscribe(
        response => this.lists = response, );
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
    this.editing = true;
  }

  public cancelEditing() {
    this.editList = this.stubList;
    this.editing = false;
  }

  public saveEditing() {
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
