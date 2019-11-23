import { Component, OnInit } from '@angular/core';
//import {Component} from './event-thumbnail.component';


@Component({
    selector: 'event-list',
    template :
    ` 
    <div> 
    <event-thumbnail [event] = "event1"> </event-thumbnail>
    </div>
    `
})

export class EventListComponent  {
    
        event1 = {
            id: 1 ,
            name: 'Angular',
            date: '20/6/1922',
            expiry: '31/12/2020'
        } 
}
