import { Component, OnInit } from "@angular/core";
import { ConverterAPIServiceService } from "src/app/services/converter-apiservice.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private convertApiService: ConverterAPIServiceService){

  }

  ngOnInit(): void {
      this.convertApiService.sendFile().subscribe(()=> {
        console.log('uderzono na backedn');
      })
  }
}
