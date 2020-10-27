import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.component.html',
  styleUrls: ['./pelis.component.css']
})
export class PelisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  pelis = [
    {titol:"Pulp fiction",genere:["thriller","crimen","comedia negra"], estrena:"1994", actors:["John Travolta"]},
    {titol:"El padrino",genere:["drama","crimen","película de culto"], estrena:"1972", actors:["Marlon Brando"]},
    {titol:"La vida es bella",genere:["comedia","drama","comedia dramática"], estrena:"1997", actors:["Roberto Benigni"]},
    {titol:"El club de la lucha",genere:["drama","thriller","sátira"], estrena:"1999", actors:["Edward Norton"]}
]

}
