import { Component, OnInit, Input} from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  title:string = "List of Posts";
  messpost: string = "Message Post";

  @Input() fromParent!:string;
  
  constructor() {}

  ngOnInit(): void {
      
  }

}
