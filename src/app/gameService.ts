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
    var typeOfCards = ["b", "b", "b", "b", "b", "b", "b", "b", "r", "r", "r", "r", "r", "r", "r", "r", "r", "n", "n", "n", "n", "n", "n", "n", "x"];

    var shuffledTypeOfCards = shuffle(typeOfCards);

    /******************************************************************/


/*
    request(url, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred 
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
      //console.log('body:', body); // Print the HTML for the Google homepage. 

      var randomWords = JSON.parse(body);
      for (var i = 0; i < 25; i++) {
        wordArray[i] = randomWords[i].word;

      }
      var shuffledArray = shuffle(wordArray);
      //console.log(shuffledArray);

      var cards = [];
      for (i = 0; i < 25; i++) {
        cards[i] = ({ cardType: shuffledTypeOfCards[i], word: shuffledArray[i] });
      }

      console.log("CARDS: ", cards);


    });*/