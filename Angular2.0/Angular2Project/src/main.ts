import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {APP_ROUTES_PROVIDER} from './app/app.routes';
import { AppModule } from './app/app.module';
import 'zone.js';
import 'reflect-metadata';




platformBrowserDynamic().bootstrapModule(AppModule, [APP_ROUTES_PROVIDER]);
