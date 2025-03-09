import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projetos = [
    {
      imagemSrc: '/assets/icons/java.png',
      imagemAlt: 'Em produção',
      titulo: 'Em produção',
      descricao: 'Descrição do projeto',
      linkGitHub: 'https://github.com/projeto1',
    },
     ];

}
