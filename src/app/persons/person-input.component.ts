import { Component } from '@angular/core';

import { PersonsService} from './persons.service';



@Component({
    selector: 'app-person-input',
    templateUrl: './person-input.component.html',
    styleUrls : ['./person-input.component.css']
})

export class PersonInputComponent{

    userInput = '';

   
    constructor(private personsService : PersonsService){}

    onCreate(){
        this.personsService.addPerson(this.userInput)
        
        this.userInput = '';
        
        
    }

   
}