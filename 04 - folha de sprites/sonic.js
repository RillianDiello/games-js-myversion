//arquivo: sonic.js
var SONIC_DIREITA = 1;
var SONIC_ESQUERDA = 2;
function Sonic(context, teclado, imagem){
  this.context = context;
  this.teclado = teclado;
  this.x = 0;
  this.y = 0;

  //Criando a spritesheet a partir da imagem recebida
  this.sheet = new Spritesheet(context, imagem, 3, 8);
  this.sheet.intervalo = 60;

  //Configurando o estado inicial
  this.andando = false;
  this.direcao = SONIC_DIREITA;
  this.velocidade = 10;
}

Sonic.prototype = {

  atualizar : function (){
    //movendo-se para a direita
    if(this.teclado.pressionada(SETA_DIREITA)){

      //Se já não esta nesse estado
      if(!this.andando || this.direcao != SONIC_DIREITA){
        //Selecion o quadro da spritesheet
        this.sheet.linha = 1;
        this.sheet.coluna = 0;
      }
      //Configurando o estado atual
      this.andando = true;
      this.direcao = SONIC_DIREITA;

      //Nesse estado, a animação da spritesheet deve rodar
      this.sheet.proximoQuadro();

      //Deslocar o sonic
      this.x += this.velocidade;


    }

    //movendo-se para a esquerda
    else if (this.teclado.pressionada(SETA_ESQUERDA)){

      if(!this.andando || this.direcao != SONIC_ESQUERDA){
        this.sheet.linha = 2;
        this.sheet.coluna = 0;
      }

      this.andando = true;
      this.direcao = SONIC_ESQUERDA;
      this.sheet.proximoQuadro();
      this.x -= this.velocidade;
    }
    //parado
    else {
      if(this.direcao == SONIC_DIREITA)
        this.sheet.coluna = 0;
      else if (this.direcao == SONIC_ESQUERDA)
        this.sheet.coluna = 1;

      this.sheet.linha = 0;
      this.andando = false;
    }



  },

  desenhar : function (){
    this.sheet.desenhar(this.x, this.y);
  }
}
