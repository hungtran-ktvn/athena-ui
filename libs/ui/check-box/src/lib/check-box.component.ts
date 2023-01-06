import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'athena-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
