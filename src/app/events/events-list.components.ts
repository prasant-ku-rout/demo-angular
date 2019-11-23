import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'event-list',
    templateUrl: './events-list.components.html'
})

export class EventListComponent  {
    
        event = {
            id: 1 ,
            name: 'Angular',
            date: '20/6/1922',
            expiry: '31/12/2020'
        } 
}
