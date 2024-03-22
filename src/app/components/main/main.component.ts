import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit, ViewChild, ElementRef  } from "@angular/core";
import { NgxFileDropEntry } from "ngx-file-drop/lib/ngx-file-drop-entry";
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
   
  }
 
  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          
          // You could upload it like this:
          const formData = new FormData()
          formData.append('file', file, 'name')

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

      
          this.convertApiService.sendFile(formData).subscribe(()=> {
            console.log('uderzono na backedn');
          })
       

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event: Event){
    console.log(event);
  }

  public fileLeave(event: Event){
    console.log(event);
  }
}
