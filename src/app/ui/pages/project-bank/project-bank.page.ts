import { Component, ViewChild } from '@angular/core';
import { Page } from '../../../core/abstract/page.abstract';
import { Campus } from '../../../core/domain/model/campus';
import { Project } from '../../../core/domain/model/project';
import { Button } from '../../atoms/button/button';
import { Gallery } from '../../atoms/gallery/gallery';
import { Panel } from '../../atoms/panel/panel';
import { Text } from '../../atoms/text/text';
import { Title } from '../../atoms/title/title';
import { Intersectable } from '../../directives/intersectable/intersectable';
import { PageLink } from '../../directives/page-link/page-link';
import { DevAdvice } from '../../molecules/dev-advice/dev-advice';

@Component({
  selector: 'hack-project-bank',
  imports: [Title, Text, Button, Panel, Intersectable, DevAdvice, PageLink],
  templateUrl: './project-bank.page.html',
  styleUrl: './project-bank.page.css',
})
export class ProjectBankPage extends Page {
  name = 'project-bank';
  protected _projects: Project[] = [project1, project2, project1, project2];
  @ViewChild(Gallery) protected _gallery!: Gallery;
}

const project1 = new Project();
project1.Name = 'Portal de estudiantes';
project1.Team = 'Equipo Leones';
project1.Campus = Campus.TEQUILA;
project1.Description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam';
project1.Likes = 12;

const project2 = new Project();
project2.Name = 'App de ventas';
project2.Team = 'Equipo Tigres';
project2.Campus = Campus.TEHUIPANGO;
project2.Description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam';
project2.Likes = 8;
