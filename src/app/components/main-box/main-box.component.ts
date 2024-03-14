import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdviceInterface } from 'src/app/models/AdviceModel';
import { AdviceService } from 'src/app/services/Adviceservice.service';


@Component({
  selector: 'app-main-box',
  templateUrl: './main-box.component.html',
  styleUrls: ['./main-box.component.scss']
})
export class MainBoxComponent implements OnInit {

  advices ?: Observable<AdviceInterface>

  constructor(private adviceservice : AdviceService) { 
    this.getAdvice();

    console.log(this.advices)
  }
  
  reloapage() : void {
    this.getAdvice()
  }
  getAdvice() : void {
    this.advices = this.adviceservice.getAdviceFromAPI();
  }
  ngOnInit() :void {
    console.log(this.advices)
  }
}
