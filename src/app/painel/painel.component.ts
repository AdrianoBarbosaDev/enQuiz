import { Component, OnInit, EventEmitter, Output,OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { Frases } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit,OnDestroy {

  public frases:Frase[] = Frases
  public instrucao:String = "Traduza a palavra:"
  public resposta:String = ""

  public rodada:number = 0
  public rodadaFrase: Frase

  public progresso:number = 0

  public tentativas:number = 3

  @Output() public encerrarJogo: EventEmitter<String> = new EventEmitter()

  constructor() {
    this.rodadaFrase = this.frases[this.rodada]
     console.log(this.rodadaFrase) }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  public atualizaResposta(resposta:Event):void{
    this.resposta = ((<HTMLInputElement>resposta.target).value)
  }

  public verificarResposta():void{
    if(this.resposta.toLowerCase == this.rodadaFrase.frasePtbr.toLowerCase){

      //trocar pergunta da rodada
      this.rodada++

      //Incrementa barra de progresso
      this.progresso = this.progresso + (100/this.frases.length)

      //Verificar vitória
      if(this.rodada === 4){
        this.encerrarJogo.emit("vitoria")
      }

      //atualiza frase na tela
      this.rodadaFrase = this.frases[this.rodada]

      //limpar resposta
      this.resposta = ""

    } else{
      this.tentativas--

      if(this.tentativas === -1){
        this.encerrarJogo.emit("derrota")
      }


    }
  }

}
