import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  constructor(private router: Router, private location: Location) {}
  // @Input() buttonText: string;
  isOutbound: boolean = false;


  ngOnInit() {
    this.isOutbound = this.link.startsWith('http'); 
  }

  click() {
    this.location.replaceState(this.link);
  }

  @Input() link: string;
  @Input() text: string;
  @Input() isOutlined: boolean;
  @Input() isInverted: boolean;
  @Input() theme: string = '';
  @Input() isRounded: boolean;
}
