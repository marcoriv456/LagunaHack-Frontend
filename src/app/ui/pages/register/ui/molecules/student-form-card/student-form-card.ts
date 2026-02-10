import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Campus } from '../../../../../../core/domain/model/campus';
import { Career } from '../../../../../../core/domain/model/career';
import { Student } from '../../../../../../core/domain/model/student';
import { IconedLabeledValue, LabeledValue } from '../../../../../../core/utilities/labeled-value';
import { Button } from '../../../../../atoms/button/button';
import { LabeledText } from '../../../../../atoms/labeled-text/labeled-text';
import { Panel } from '../../../../../atoms/panel/panel';
import { Select } from '../../../../../atoms/select/select';
import { TextInput } from '../../../../../atoms/text-input/text-input';
import { InputLabel } from '../../../../../molecules/input-label/input-label';

@Component({
  selector: 'hack-student-form-card',
  imports: [Panel, LabeledText, InputLabel, Select, TextInput, FormsModule, Button],
  templateUrl: './student-form-card.html',
  styleUrl: './student-form-card.css',
})
export class StudentFormCard {
  @Input({ required: true }) Student!: Student;
  @Output() Change = new EventEmitter<Student>();
  @Output() Remove = new EventEmitter<void>();

  protected readonly _semesterOptions: IconedLabeledValue<number, 'calendar'>[] = [
    { icon: 'calendar', label: 'Semestre', value: -1 },
    { icon: 'calendar', label: 'Segundo', value: 2 },
    { icon: 'calendar', label: 'Cuarto', value: 4 },
    { icon: 'calendar', label: 'Sexto', value: 6 },
    { icon: 'calendar', label: 'Octavo', value: 8 },
  ];
  protected readonly _careerOptions: LabeledValue<Career>[] = [
    { value: 'null' as any, icon: 'student-hat', label: 'Carrera' },
    { value: Career.ISC, icon: 'isc', label: 'ISC' },
    { value: Career.IDC, icon: 'idc', label: 'IDC' },
    { value: Career.IF, icon: 'if', label: 'IF' },
    { value: Career.IGE, icon: 'ige', label: 'IGE' },
    { value: Career.IIAS, icon: 'iias', label: 'IIAS' },
    { value: Career.IC, icon: 'ic', label: 'IC' },
  ];

  protected readonly _campusOptions: IconedLabeledValue<Campus, 'institution'>[] = [
    { value: 'null' as any, label: 'Campus', icon: 'institution' },
    { value: Campus.TEHUIPANGO, label: 'Tehuipango', icon: 'institution' },
    { value: Campus.NOGALES, label: 'Nogales', icon: 'institution' },
    { value: Campus.TEQUILA, label: 'Tequila', icon: 'institution' },
    { value: Campus.ZONGOLICA, label: 'Zongolica', icon: 'institution' },
  ];
}
