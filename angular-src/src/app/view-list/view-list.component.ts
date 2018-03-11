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
  private stubList: List = {
    description: 'Test',
    isChecked: false,
    dueDate: null,
    _id: '0'

};

  constructor(private listServ: ListService) { }

  ngOnInit() {
    this.lists = [this.stubList];
    // Load all list on init
    this.loadLists();
  }

  public loadLists() {

    // Get all lists from server and update the lists property
    this.listServ.getAllLists().subscribe(
        response => this.lists = response.concat(this.stubList), );
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

}
