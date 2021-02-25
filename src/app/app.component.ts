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
  userConfigs: Config[];
  tabMenu = TabSettings;
  currentTab;

  userMenuNodes = [
    {
      id: 1,
      name: 'Text Editor',
      children: [
        { id: 2, name: 'Cursor' },
        { id: 3, name: 'Find' },
        { id: 4, name: 'Font' },
        { id: 5, name: 'Formatting' },
        { id: 6, name: 'Diff Editor' },
        { id: 7, name: 'Minimap' },
        { id: 8, name: 'Suggestions' },
        { id: 9, name: 'Files' },
      ],
    },
    {
      id: 10,
      name: 'Workbench',
      children: [
        { id: 11, name: 'Appearance' },
        { id: 12, name: 'Breadcrumbs' },
        { id: 13, name: 'Editor Management' },
        { id: 14, name: 'Settings Editor' },
        { id: 15, name: 'Zen Mode' },
        { id: 16, name: 'Screencast Mode' },
      ],
    },
    {
      id: 17,
      name: 'Window',
      children: [{ id: 18, name: 'New Window' }],
    },
    {
      id: 19,
      name: 'Features',
      children: [
        { id: 20, name: 'Explorer' },
        { id: 21, name: 'Search' },
        { id: 22, name: 'Debug' },
        { id: 23, name: 'SCM' },
        { id: 24, name: 'Extensions' },
        { id: 25, name: 'Terminal' },
        { id: 26, name: 'Task' },
        { id: 27, name: 'Problems' },
        { id: 28, name: 'Output' },
        { id: 29, name: 'Comments' },
        { id: 30, name: 'Remote' },
        { id: 31, name: 'Timeline' },
        { id: 32, name: 'Notebook' },
      ],
    },
    {
      id: 33,
      name: 'Application',
      children: [
        { id: 34, name: 'Proxy' },
        { id: 35, name: 'Keyboard' },
        { id: 36, name: 'Update' },
        { id: 37, name: 'Telemetry' },
        { id: 38, name: 'Settings Sync' },
      ],
    },
    {
      id: 39,
      name: 'Entension',
      children: [
        { id: 40, name: 'Docker' },
        { id: 41, name: 'HTML' },
        { id: 42, name: 'Java' },
        { id: 43, name: 'JSON' },
      ],
    },
  ];

  workspaceMenuNodes = [
    {
      id: 1,
      name: 'Text Editor',
      children: [
        { id: 2, name: 'Cursor' },
        { id: 3, name: 'Find' },
        { id: 4, name: 'Font' },
        { id: 5, name: 'Formatting' },
        { id: 6, name: 'Diff Editor' },
        { id: 7, name: 'Minimap' },
        { id: 8, name: 'Suggestions' },
        { id: 9, name: 'Files' },
      ],
    },
    {
      id: 10,
      name: 'Workbench',
      children: [
        { id: 11, name: 'Appearance' },
        { id: 12, name: 'Breadcrumbs' },
        { id: 13, name: 'Editor Management' },
        { id: 14, name: 'Settings Editor' },
        { id: 15, name: 'Zen Mode' },
        { id: 16, name: 'Screencast Mode' },
      ],
    },
    {
      id: 17,
      name: 'Window',
    },
    {
      id: 19,
      name: 'Features',
      children: [
        { id: 20, name: 'Explorer' },
        { id: 21, name: 'Search' },
        { id: 22, name: 'Debug' },
        { id: 23, name: 'SCM' },
        { id: 24, name: 'Extensions' },
        { id: 25, name: 'Terminal' },
        { id: 26, name: 'Task' },
        { id: 27, name: 'Problems' },
        { id: 28, name: 'Output' },
        { id: 29, name: 'Comments' },
        { id: 30, name: 'Remote' },
        { id: 31, name: 'Timeline' },
        { id: 32, name: 'Notebook' },
      ],
    },
    {
      id: 33,
      name: 'Application',
      children: [
        { id: 34, name: 'Proxy' },
        { id: 35, name: 'Keyboard' },
        { id: 36, name: 'Telemetry' },
      ],
    },
    {
      id: 37,
      name: 'Entension',
      children: [
        { id: 38, name: 'Docker' },
        { id: 39, name: 'HTML' },
        { id: 40, name: 'Java' },
        { id: 41, name: 'JSON' },
      ],
    },
  ];

  options = {};

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

    this.userConfigs = [
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
      {
        key: 'cursorStyle',
        groupName: 'Editor',
        name: 'Cursor Style',
        remark: '',
        details: 'Controls the cursor style.',
        type: ConfigType.dropdown,
        arrValue: [
          'line',
          'block',
          'underline',
          'line-thin',
          'block-outline',
          'underline-thin',
        ],
      },
    ];
  }

  selectTab(tab: TabSettings) {
    this.currentTab = tab;
  }
}
