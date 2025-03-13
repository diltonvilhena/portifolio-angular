import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contatos = [
    {
      tipo: 'Whatsapp',
      icon: 'whatsapp.png',
      link: 'https://wa.me/+5591980465126',
      numero: '+55 91 98046-5126'
    },
    {
      tipo: 'Email',
      icon: 'email.png',
      link: 'mailto:diltonvilhena@gmail.com',
      numero: 'diltonvilhena@gmail.com'
    }
  ];

  redes = [
    {
      nome: 'Linkedin',
      link: 'https://www.linkedin.com/in/diltonvilhena/',
      icon: 'linkedin-rodape.png'
    },
    {
      nome: 'Github',
      link: 'https://github.com/DiltonVilhena',
      icon: 'github-rodape.png'
    }
  ];

}
