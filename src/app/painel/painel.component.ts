import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { Frases } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases:Frase[] = Frases
  public instrucao:String = "Traduza a frase:"
  public resposta:String = ""

  public rodada:number = 0
  public rodadaFrase: Frase

  public progresso:number = 0

  constructor() { 
    this.rodadaFrase = this.frases[this.rodada]
     console.log(this.rodadaFrase) }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta:Event):void{
    this.resposta = ((<HTMLInputElement>resposta.target).value)
  }

  public verificarResposta():void{
    if(this.resposta == this.rodadaFrase.frasePtbr){
      alert("Acertou!")

      //trocar pergunta da rodada
      this.rodada++

      //Incrementa barra de progresso
      this.progresso = this.progresso + (100/this.frases.length)
      console.log(this.progresso)

      //atualiza frase na tela
      this.rodadaFrase = this.frases[this.rodada]

      //limpar resposta
      this.resposta = ""
      
    } else{
      alert("Errou!")
    }
  }

}
