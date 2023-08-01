import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AngTrip';
  parmes:string = "Zło kutas i zniszczenie";
  message:string ="elo";
  fromChildOutput:string="";

  @ViewChild(PostComponent) childComp!:PostComponent;

  constructor() {
    console.log(this.childComp)
  }

  ngAfterViewInit() {
    console.log(this.childComp)
    this.message = this.childComp.childMessage;
  }

  reciveMessage($event: string){
    this.fromChildOutput = $event;
  }
}
