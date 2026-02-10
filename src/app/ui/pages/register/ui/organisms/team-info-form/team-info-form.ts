import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Category } from '../../../../../../core/domain/model/category';
import { Student } from '../../../../../../core/domain/model/student';
import { Team } from '../../../../../../core/domain/model/team';
import { LabeledValue } from '../../../../../../core/utilities/labeled-value';
import { Button } from '../../../../../atoms/button/button';
import { LabeledText } from '../../../../../atoms/labeled-text/labeled-text';
import { Select } from '../../../../../atoms/select/select';
import { TextInput } from '../../../../../atoms/text-input/text-input';
import { InputLabel } from '../../../../../molecules/input-label/input-label';
import { StudentListInput } from '../student-list/student-list.input';

@Component({
  selector: 'hack-team-info-form',
  imports: [
    InputLabel,
    TextInput,
    Select,
    LabeledText,
    FormsModule,
    StudentListInput,
    ReactiveFormsModule,
    Button,
  ],
  templateUrl: './team-info-form.html',
  styleUrl: './team-info-form.css',
})
export class TeamInfoForm implements OnInit {
  protected readonly _form = new FormGroup({
    Name: new FormControl(null, []),
    Campus: new FormControl(null, []),
    Members: new FormControl(new Set<Student>(), []),
  });
  ngOnInit(): void {
    this._form.patchValue({ Members: new Set<Student>([new Student('', -1, '')]) });
  }

  protected _team = new Team();

  protected readonly _categoryOptions: LabeledValue<Category>[] = [
    { icon: 'agriculture', label: 'Agricultura', value: Category.AGRICULTURA },
    { icon: 'science', label: 'Ciencias', value: Category.CIENCIAS },
    { icon: 'humanities', label: 'Humanismo', value: Category.HUMANISMO },
    { icon: 'health', label: 'Salud', value: Category.SALUD },
  ];

  protected _logTeam() {
    console.log(this._team);
  }
}
