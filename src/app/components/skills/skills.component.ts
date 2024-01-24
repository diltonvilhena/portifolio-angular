import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills: {caminho:string , alt:string, titulo:string}[] = [
    {caminho:'/assets/icons/html.png',alt: 'ícone HTML',titulo:'HTML'},
    {caminho:'/assets/icons/css.png',alt: 'ícone CSS',titulo:'CSS'},
    {caminho:'/assets/icons/angular.png',alt: 'ícone Angular',titulo:'Angular'},
    {caminho:'/assets/icons/java.png',alt: 'ícone Java',titulo:'JAVA'},
    {caminho:'/assets/icons/flutter.png',alt: 'ícone Flutter',titulo:'Flutter'},
    {caminho:'/assets/icons/wordpress.png',alt: 'ícone Wordpress',titulo:'Wordpress'},
    {caminho:'/assets/icons/joomla.png',alt: 'ícone Joomla',titulo:'Joomla'},
  ]

}
