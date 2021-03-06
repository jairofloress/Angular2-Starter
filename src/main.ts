import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Kinvey } from 'kinvey-angular2-sdk';

import { AppModule } from './app/app.module';

const config: Kinvey.ClientConfig = {
  appKey: '<appKey>',
  appSecret: '<appSecret>'
};

Kinvey.initialize(config)
  .then(() => {
    enableProdMode();
    platformBrowserDynamic().bootstrapModule(AppModule);
  });
