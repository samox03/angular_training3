import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data: {name: string; age: number; job: string; employed: boolean}[] = [
    {name: 'James', age: 24, job: 'Designer', employed: true},
    {name: 'Selim', age: 32, job: 'Chef', employed: true},
    {name: 'Aiyesh', age: 28, job: 'Engineer', employed: false}
  ];
  headers: {key: string, label: string}[] = [
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
