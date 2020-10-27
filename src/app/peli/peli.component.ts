import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-peli',
  templateUrl: './peli.component.html',
  styleUrls: ['./peli.component.css']
})
export class PeliComponent implements OnInit {
  paramValue = "";
  title="";
  constructor(private _route: Router,
    private _actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._actRoute.paramMap.subscribe(
      (params) => {
        this.paramValue = params.get("title");
        this.title = this.paramValue;
      }
    )
  }

  pelis = [
    {titol:"Pulp fiction",genere:["thriller","crimen","comedia negra"], estrena:"1994", actors:["John Travolta"],
    sinopsis:"Jules y Vincent, dos asesinos a sueldo con no demasiadas luces, trabajan para el gángster Marsellus Wallace. Vincent le confiesa a Jules que Marsellus le ha pedido que cuide de Mia, su atractiva mujer. Jules le recomienda prudencia porque es muy peligroso sobrepasarse con la novia del jefe. Cuando llega la hora de trabajar, ambos deben ponerse manos a la obra. Su misión: recuperar un misterioso maletín.",
    director:"Quentin Tarantino"},
    {titol:"El padrino",genere:["drama","crimen","película de culto"], estrena:"1972", actors:["Marlon Brando"],
    sinopsis:"América, años 40. Don Vito Corleone (Marlon Brando) es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York. Tiene cuatro hijos: Connie (Talia Shire), el impulsivo Sonny (James Caan), el pusilánime Fredo (John Cazale) y Michael (Al Pacino), que no quiere saber nada de los negocios de su padre. Cuando Corleone, en contra de los consejos de 'Il consigliere' Tom Hagen (Robert Duvall), se niega a participar en el negocio de las drogas, el jefe de otra banda ordena su asesinato. Empieza entonces una violenta y cruenta guerra entre las familias mafiosas.",
    director:"Francis Ford Coppola"},
    {titol:"La vida es bella",genere:["comedia","drama","comedia dramática"], estrena:"1997", actors:["Roberto Benigni"],
    sinopsis:"En 1939, a punto de estallar la Segunda Guerra Mundial (1939-1945), el extravagante Guido llega a Arezzo, en la Toscana, con la intención de abrir una librería. Allí conoce a la encantadora Dora y, a pesar de que es la prometida del fascista Rodolfo, se casa con ella y tiene un hijo. Al estallar la guerra, los tres son internados en un campo de exterminio, donde Guido hará lo imposible para hacer creer a su hijo que la terrible situación que están padeciendo es tan sólo un juego.",
    director:"Roberto Benigni"},
    {titol:"El club de la lucha",genere:["drama","thriller","sátira"], estrena:"1999", actors:["Edward Norton"],
    sinopsis:"Un joven hastiado de su gris y monótona vida lucha contra el insomnio. En un viaje en avión conoce a un carismático vendedor de jabón que sostiene una teoría muy particular: el perfeccionismo es cosa de gentes débiles; sólo la autodestrucción hace que la vida merezca la pena. Ambos deciden entonces fundar un club secreto de lucha, donde poder descargar sus frustaciones y su ira, que tendrá un éxito arrollador.",
    director:"David Fincher"}
]
}
