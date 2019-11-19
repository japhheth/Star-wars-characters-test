import { Component, OnInit, OnDestroy,  } from '@angular/core'
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';



@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
    styleUrls : ['./persons.component.css']
})



export class PersonsComponent implements OnInit, OnDestroy {

    personList : string[];

    private personListSubs : Subscription;

    constructor(private prsService : PersonsService){
  
        
    }
 
    ngOnInit(){
        this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
            this.personList = persons
        })
        this.prsService.fetchPersons()

    }

    onRemovePersons(personName : string){
        this.prsService.removePersons(personName)
    }

    ngOnDestroy(){
        this.personListSubs.unsubscribe();

    }




}