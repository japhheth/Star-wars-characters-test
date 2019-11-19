import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';



@Injectable({providedIn: 'root'})


export class PersonsService {

 personsChanged = new Subject<string[]>();
   persons: string[];

  addPerson(name: string) {
    this.persons.push(name);
    console.log(this.persons);

    this.personsChanged.next(this.persons);
  }

  removePersons(name: string) {
    this.persons = this.persons.filter( person => {
        return person !== name;
    });

    this.personsChanged.next(this.persons);
  }

  constructor(private http: HttpClient) {}

  fetchPersons() {
      this.http.get<any>('https://swapi.co/api/people').pipe(map(resData => {
        return resData.results.map( character => character.name);
      })
      ).subscribe( resData => {
        this.personsChanged.next(resData);
      });
  }


}
