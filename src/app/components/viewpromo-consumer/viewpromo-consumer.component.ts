import { Component, OnInit } from '@angular/core';
import { InvitadoService } from 'src/app/services/invitado.service';

@Component({
  selector: 'app-viewpromo-consumer',
  templateUrl: './viewpromo-consumer.component.html',
  styleUrls: ['./viewpromo-consumer.component.css']
})
export class ViewpromoConsumerComponent implements OnInit {

  constructor(private invitedService:InvitadoService) { }

  ngOnInit() {
    
  }

}
