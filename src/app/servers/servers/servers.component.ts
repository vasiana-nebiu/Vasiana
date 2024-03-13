import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverNumber: number = 2;
  serverName!:string;
  serverCreationStatus!: string;
  isDisabled: boolean=false;
  imgUrl:string='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png';


  onUpdateServer(event: Event):void {
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
    this.isDisabled=true;
  }
  onCreateServer(event:any):void{
    console.log(event);
    this.serverCreationStatus = 'Server created'
  }
}
