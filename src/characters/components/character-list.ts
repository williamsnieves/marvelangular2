import {Component} from 'angular2/core';

import {CharacterService} from "../services/character-service";

@Component({
  selector: 'character-list',
  templateUrl: '../src/partials/character-list.html'
})

export class CharacterList{
  public characters:any;
  public comics:any;
  constructor(public character:CharacterService){
    character.getCharacters().subscribe(
      character => this.characters = character.data.results,
      console.error,
      () => console.log('Completed!', this.characters)
    )
  }
  getComics(currentCharacter:any){
    //console.log("clickkk", character.id);
    this.character.getComics(currentCharacter.id).subscribe(
      comic => this.comics = comic.data.results,
      console.error,
      () => console.log('Completed!', this.comics)
    )
  }

}
