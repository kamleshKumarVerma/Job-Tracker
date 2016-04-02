import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./components/app/app.component";
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import {AuthService} from './components/authentication/auth.service';

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, AuthService]);
