import { Component } from '@angular/core';

interface Skill {
  caminho: string;
  alt: string;
  titulo: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills: Skill[] = [
    { caminho: '/assets/icons/java.png', alt: 'ícone Java', titulo: 'Java' },
    { caminho: '/assets/icons/angular.png', alt: 'ícone Angular', titulo: 'Angular' },
    { caminho: '/assets/icons/flutter.png', alt: 'ícone Flutter', titulo: 'Flutter' },
  ];

}
