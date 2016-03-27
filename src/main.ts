import 'es6-shim';
import 'angular2/bundles/angular2-polyfills';
import 'reflect-metadata';
import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";
import {Layout} from "./layout/components/layout";
import {CharacterList} from "./characters/components/character-list";
import {CharacterService} from "./characters/services/character-service";
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'app',
  directives: [Layout],
  templateUrl: '../src/partials/main.html'

})

export class App{}


bootstrap(App, [HTTP_PROVIDERS,CharacterService])
