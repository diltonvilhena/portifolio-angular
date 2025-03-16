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
    { caminho: '/assets/icons/spring-boot.png', alt: 'ícone Spring Boot', titulo: 'Spring Boot' },
    { caminho: '/assets/icons/typescript.png', alt: 'ícone typescript', titulo: 'Typescript' },
    { caminho: '/assets/icons/angular.png', alt: 'ícone Angular', titulo: 'Angular' },
    { caminho: '/assets/icons/sql.png', alt: 'ícone SQL', titulo: 'SQL' },
    { caminho: '/assets/icons/git.png', alt: 'ícone GIT', titulo: 'GIT' },
    { caminho: '/assets/icons/dart.png', alt: 'ícone Dart', titulo: 'Dart' },
    { caminho: '/assets/icons/flutter.png', alt: 'ícone Flutter', titulo: 'Flutter' },
    { caminho: '/assets/icons/wordpress.png', alt: 'ícone WordPress', titulo: 'WordPress' },
  ];

}
