import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private dialogRef : MatDialog) {

 

  }

  ngOnInit(): void {
    this.openDialog();
  }
  openDialog(){
    this.dialogRef.open(BoasVindasComponent)
  }

  title = 'app1';

  public jogoEmAndamento:Boolean = true

  public tipoEncerramento: String = ""

  public encerrarJogo(tipo: String):void{
    this.jogoEmAndamento = false
    this.tipoEncerramento = tipo
  }
  public reiniciarJogo():void{
    this.jogoEmAndamento = true
    this.tipoEncerramento = ""
  }
}
