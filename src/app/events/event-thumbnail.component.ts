import { Component ,Input,Output,EventEmitter} from "@angular/core";
//import { EventEmitter } from 'events';

@Component ({
    selector:'event-thumbnail',
    template : 
    `
        <h1> my first event list components </h1>
        <hr>
        <div class="well hoverwell thumbnail"> 
            <h2>event name: {{event.name}} </h2>
            
            date : {{event.date}} 

            Exp : {{event.expiry}}

            <div> <button class="btn btn-primary" (click)="handleClickme()" > Click Me! </button> </div>
        </div>
    `

})

export class EventThumbnailComponent {
   @Input() event : any
   @Output() eventclicked = new EventEmitter()

   handleClickme(){
       this.eventclicked.emit(this.event.name)

   }
}