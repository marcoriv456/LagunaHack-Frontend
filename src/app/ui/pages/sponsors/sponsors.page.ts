import { Component } from '@angular/core';
import { Gallery } from '../../atoms/gallery/gallery';
import { Text } from '../../atoms/text/text';
import { Title } from '../../atoms/title/title';
import { Intersectable } from '../../directives/intersectable/intersectable';

@Component({
  selector: 'hack-sponsors',
  imports: [Title, Text, Gallery, Intersectable],
  templateUrl: './sponsors.page.html',
  styleUrl: './sponsors.page.css',
})
export class SponsorsPage { }
