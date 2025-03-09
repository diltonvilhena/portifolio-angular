import { Component, Input } from '@angular/core';

interface Projeto {
  imagemSrc: string;
  imagemAlt: string;
  titulo: string;
  descricao: string;
  linkGitHub: string;
}

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent {

  @Input() projeto: Projeto = {

    imagemSrc: '',
    imagemAlt: '',
    titulo: '',
    descricao: '',
    linkGitHub: ''
  }

}
