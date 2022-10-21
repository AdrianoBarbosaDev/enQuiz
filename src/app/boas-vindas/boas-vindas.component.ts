import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-boas-vindas',
  templateUrl: './boas-vindas.component.html',
  styleUrls: ['./boas-vindas.component.css']
})
export class BoasVindasComponent implements OnInit {
  

  constructor(private dialogRef : MatDialog) {

 

   }
  //  openDialog(){
  //   this.dialogRef.open(BoasVindasComponent)
  // }

  ngOnInit(): void {
  }

}
