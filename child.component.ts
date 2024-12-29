import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

 @Input()
 ParentData : String=' ';

 childData :String='Data From Child component';
@Output()
childevent :EventEmitter<String>=new EventEmitter();



   sendData(){
    alert("Send data clicked");
   
    this.childevent.emit(this.childData);
  
  }



}