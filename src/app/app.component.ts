import { Component } from '@angular/core';
import { Config, ConfigType } from './model/config';

export enum TabSettings {
  user,
  workspace,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  workspaceConfigs: Config[];
  tabMenu = TabSettings;
  currentTab;

  constructor() {
    this.currentTab = TabSettings.user;
    this.workspaceConfigs = [
      {
        key: 'autoSave',
        groupName: 'Files',
        name: 'Auto Save',
        remark: '(Modified in: User)',
        details:
          'Controls auto save of dirty files. Read more about autosave here.',
        type: ConfigType.dropdown,
        arrValue: ['off', 'afterDelay', 'onFocusChange', 'onWindowChange'],
      },
      {
        key: 'autoSaveDelay',
        groupName: 'Files',
        name: 'Auto Save Delay',
        remark: '',
        details:
          'Controls the delay in ms after which a dirty file is saved automatically.',
        type: ConfigType.text,
      },
      {
        key: 'fontSize',
        groupName: 'Editor',
        name: 'Font Size',
        remark: '',
        details: 'Controls the font size in pixels.',
        type: ConfigType.text,
      },
      {
        key: 'fontFamily',
        groupName: 'Editor',
        name: 'Font Family',
        remark: '(Modified in: User)',
        details: 'Controls the font family.',
        type: ConfigType.text,
      },
      {
        key: 'tabSize',
        groupName: 'Editor',
        name: 'Tab Size',
        remark: '',
        details:
          'The number of spaces a tab is equal to. This setting is overridden based on the file contents when Editor: Detect Indentation is on.',
        type: ConfigType.text,
      },
      {
        key: 'renderWhitespace',
        groupName: 'Editor',
        name: 'Render Whitespace',
        remark: '',
        details: 'Controls how the editor should render whitespace characters.',
        type: ConfigType.dropdown,
        arrValue: ['none', 'boundary', 'selection', 'trailing', 'all'],
      },
    ];
  }

  selectTab(tab: TabSettings) {
    this.currentTab = tab;
  }
}
