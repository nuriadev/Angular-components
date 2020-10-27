import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  paramValue = "";
  name="";

  constructor(private _route: Router,
    private _actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._actRoute.paramMap.subscribe(
      (params) => {
        this.paramValue = params.get("name");
        this.name = this.paramValue;
      }
    )
    }

    actors = [
      {name: "John Travolta",birth:"18/02/1954",pelis:["Pulp fiction","Grease","Hairspray"]},
      {name: "Marlon Brando",birth:"03/04/1924", pelis:["El padrino","Apocalypse Now","Superman"]},
      {name: "Roberto Benigni",birth:"27/10/1952", pelis:["La vida es bella", "Pinocho", "El monstruo"]},
      {name: "Edward Norton",birth:"18/08/1969", pelis:["El club de la lucha","American History X","Primal Fear"]}
    ]
}
