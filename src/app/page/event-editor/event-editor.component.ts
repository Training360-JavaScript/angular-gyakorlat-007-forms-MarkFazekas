import {Component, OnInit} from '@angular/core';
import {EventService} from "../../service/event.service";
import {ActivatedRoute} from "@angular/router";
import {Event} from "../../model/event";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

  event: Event;

  constructor(public eventService: EventService,
              public activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params =>
        this.eventService.get(params["id"]).subscribe(
          event => {
            console.log(event);
            this.event = event || new Event();
          }
        )
    );
  }

  onUpdate(form: NgForm): void {
    console.log(form.value);
    this.eventService.update(form.value).subscribe();
  }

}
