function Spritesheet(context, imagem, linhas, colunas) { 
   this.context = context; 
   this.imagem = imagem; 
   this.numLinhas = linhas; 
   this.numColunas = colunas; 
   this.intervalo = 0; 
   this.linha = 0; 
   this.coluna = 0; 
} 

Spritesheet.prototype = {
	proximoQuadro : function(){
		//necessário considerar o tempo de cada quadro
		//para isso vamos manter um historico da ultima mudança

		//momento atual
		var agora = new Date().getTime();

		//Se ainda não tem último tempo medido
		if(! this.ultimoTempo) 
			this.ultimoTempo = agora;

		//Perguntar se já é o momento de mudar a coluna

		if(agora - this.ultimoTempo < this.intervalo)
			return;

		if(this.coluna < this.numColunas -1 )
			this.coluna++;
		else
			this.coluna = 0;

		this.ultimoTempo = agora;
	},
	desenhar : function(x,y){
		var largura = imgSonic.width / this.numColunas;
		var altura = imgSonic.height / this.numLinhas;

		this.context.drawImage(
			this.imagem,
			largura * this.coluna,
			altura * this.linha,
			largura,
			altura,
			x, //posição da largura onde eu vou fazer o desenho
			y, //posição da altura onde eu vou fazer o desenho
			largura,
			altura
			);
		/*
		Com esse codigo atual temos condições de visualizar o Sonic correndo
		sem alturar a sua posição no nosso quadro do canvas
		*/

	}
}