import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'event-list',
    template :
    ` 
    <div> 
    <event-thumbnail  (eventclicked) = "handleEventClicked($event)" [event] = "event1"> 
    </event-thumbnail>
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

        handleEventClicked(data)
        {
            //console.log(data)

            alert (data)

        }

}
