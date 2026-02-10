import { Component } from '@angular/core';
import { Icon } from '../../atoms/icon/icon';
import { Subtitle } from '../../atoms/subtitle/subtitle';
import { Text } from '../../atoms/text/text';

@Component({
  selector: 'hack-dev-advice',
  templateUrl: './dev-advice.html',
  imports: [Icon, Subtitle, Text],
  styleUrl: './dev-advice.css',
})
export class DevAdvice { }
