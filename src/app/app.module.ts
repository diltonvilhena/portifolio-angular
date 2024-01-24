import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CardProjectComponent } from './components/projects/card-project/card-project.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AboutComponent,
    ProjectsComponent,
    ExperiencesComponent,
    ContactComponent,
    SkillsComponent,
    CardProjectComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
