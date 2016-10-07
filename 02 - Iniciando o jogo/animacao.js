//Animação
//construtor vazio
function Animacao(context) {
   this.context = context;
   this.sprites = [];
   this.ligado = false;
}

Animacao.prototype = {
	novoSprite: function (sprite){
		this.sprites.push(sprite);
	},

	ligar : function(){
		this.ligado = true;
		this.proximoFrame();
	},

	//adicionar sempre a virgula depois de cada método

	desligar: function () {
		this.ligado = false;
	},

	//proximo frame utilizando o requestAnimationFrame do HTML5
	proximoFrame : function(){
		//Pode continuar
		if( !this.ligado) return;

		//A cada ciclo, limpa a tela e desenha o fundo
		this.limparTela();

		//Atualizar o estado dos prites
	 	for (var i in this.sprites)
     		this.sprites[i].atualizar();
		

		//Desenhando os sprites
		for(var i in this.sprites)
			this.sprites[i].desenhar();

		//Chamando o novo ciclo
		//Não podemos usar requestAnimationFrame(this.proximoframe)
		//por isso referenciamos o objeto em uma vriavel e chamamos /
		//por uma função anonima
		var animacao = this;
		requestAnimationFrame(function() {
			animacao.proximoFrame();
		});
	},

	limparTela: function(){
		var ctx = this.context;
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	}
}