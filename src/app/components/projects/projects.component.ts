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
      imagemAlt: 'Task Manager',
      titulo: 'Task Manager',
      descricao: 'Um sistema de gerenciamento de tarefas desenvolvido com Spring Boot e H2 Database',
      linkGitHub: 'https://github.com/diltonvilhena/task-manager',
    },
     ];
}
