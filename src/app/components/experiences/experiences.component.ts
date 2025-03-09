import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {

  isModalVisible: boolean = false;
  selectedExperience: any = {};

  experiences = [
    {
      title: 'Analista de TI - Junior (SEFA - PA)',
      date: 'Fev 2024 - Atual',
      description: `
        - Desenvolvimento e manutenção de APIs RESTful com <strong>Spring Boot</strong>.<br>
        - Criação de testes automatizados com <strong>Mockito</strong> e <strong>JUnit</strong>.<br>
        - Documentação técnica e uso de <strong>Swagger</strong> para facilitar integrações.<br>
        - Suporte e melhorias em sistemas legados (Visual Basic).<br>
        - Participação ativa em times ágeis, contribuindo para otimização de processos e produtos.<br>
      `,
    },

    {
      title: 'Analista de TI - Trainee (SEFA-PA)',
      date: 'Jan 2023 - Jan 2024',
      description: `
        - <strong>Flutter:</strong> Desenvolvimento do app de consulta de pendências do IPVA.</br>
        - <strong>Angular 16:</strong> Modernização do portal da SEFA, melhorando usabilidade e acessibilidade.</br>
        - <strong>Frontend e Banco de Dados:</strong> Desenvolvimento de interfaces dinâmicas e integração com Oracle.</br>
        - <strong>Suporte Web:</strong> Manutenção e melhorias de sites institucionais em WordPress e Joomla.
      `,
    }
  ];

  openModal(experience: any) {
    this.selectedExperience = experience;
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
