import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
export class GameService {
  // getWordsArray() {
  //     var fake: string[] = ["cat", "dog", "apple"]; 
  //     return fake;
  // }

  // getColorsArray() {
  //     var fake: string[] = ["r", "b", "n"]; 
  //     return fake;
  // }

    constructor(ng 
      private http: Http) {
    }
    url = "http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=noun&excludePartOfSpeech=proper-noun&minCorpusCount=15700&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=4&minLength=3&maxLength=10&limit=25&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
    getWords(): Promise<Response> {
      //this.logService.log("Getting products");
      
    console.log("RETURN: ", this.http.get);
      return this.http.get
        (this.url).toPromise();
    }

}





    /*var url = "http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=noun&excludePartOfSpeech=proper-noun&minCorpusCount=15700&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=4&minLength=3&maxLength=10&limit=25&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
    

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    var wordArray = [];

import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { CardDetails } from './CardDetails';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GameService {
  constructor(
    private http: Http) {
  }
  url = "http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=noun&excludePartOfSpeech=proper-noun&minCorpusCount=15700&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=4&minLength=3&maxLength=10&limit=25&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
  getData(): Promise<Response> {
    //  this.logService.log("Getting products");

    return this.http.get
      (this.url).toPromise();
  }
  getWordsArray() {
    var fake: string[] = [];
    return fake;
  }

  getFakeColorsArray() {
    var fake: string[] = ["r", "b", "n"];
    return fake;
  }



  getColorsArray() {
>>>>>>> 8f5fa0654d7d1fc951a23972608af9b701531385
    var typeOfCards = ["b", "b", "b", "b", "b", "b", "b", "b", "r", "r", "r", "r", "r", "r", "r", "r", "r", "n", "n", "n", "n", "n", "n", "n", "x"];

    var currentIndex = typeOfCards.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = typeOfCards[currentIndex];
      typeOfCards[currentIndex] = typeOfCards[randomIndex];
      typeOfCards[randomIndex] = temporaryValue;
    }
    return typeOfCards;
    
  }


}




