import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{

  title:string = "List of Posts";
  messpost: string = "Message Post";
  postParentMessage:string = "Message coming from the post parent";

  childMessage:string = 'From child component'

  outputChildMessage: string= " Message from child component via output"

  @Input() fromParent!:string;

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage)
  }
  
      
  }


