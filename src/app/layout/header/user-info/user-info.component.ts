import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserInfoComponent implements OnInit {

  @Input() statusLogging: boolean;
  @Output() logOut = new EventEmitter<boolean>();

  messages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  panelOpenState = false;

  languages = ['VNI', 'EN'];
  selectedLang = 'VNI';

  constructor() { }

  ngOnInit(): void {
  }

  trackByFn(index: number, item: any): number {
    return index;
  }

  handleLogOut(): void {
    this.logOut.emit(true);
  }

}
