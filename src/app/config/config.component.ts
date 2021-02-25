import { Component, OnInit, Input } from '@angular/core';
import { Config, ConfigType } from '../model/config';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
})
export class ConfigComponent implements OnInit {
  @Input() configItem: Config;
  configType = ConfigType;

  constructor() {
    // this.configItem = new Config();
    // this.configItem.name = 'Correct';
    // this.configItem.details = 'This is my details';
    // this.configItem.type = ConfigType.dropdown;
  }

  ngOnInit(): void {}
}
