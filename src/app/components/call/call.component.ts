import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent {
isAudioMuted: any;
isVideoMuted: any;
  constructor(private router: Router, private callService: CallService) {}
  ngOnInit(): void {
    this.callService.moveRoom(this.callService.namePrincipalRoom, true);
  }

  executeCommand(data: any) {
    console.log(
      'this.jitsiService.getParticipants():',
      this.callService.getParticipants()
    );

    this.callService.api.executeCommand(
      'sendEndpointTextMessage',
      this.callService.getParticipants(),
      'mover a principal'
    );
  }
}
