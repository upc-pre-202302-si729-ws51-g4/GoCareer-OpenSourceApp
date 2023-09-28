import { Component } from '@angular/core';

@Component({
  selector: 'app-principal-page-specialist',
  templateUrl: './principal-page-specialist.component.html',
  styleUrls: ['./principal-page-specialist.component.css']
})
export class PrincipalPageSpecialistComponent {
  card1 = {
    imageUrl: "https://pic.onlinewebfonts.com/thumbnails/icons_503713.svg",
    text: 'Tienes una nueva prueba para calificar',
    title: "Hola"
  }

  card2 = {
    imageUrl: "https://pic.onlinewebfonts.com/thumbnails/icons_319579.svg",
    text: 'Conoce a los nuevos alumnos que se registraron contigo'
  }
}