dicas NVDA
zerar volume pra não incomodar ativar caixa de texto
desativar passada do mouse
desativar leitura de letra por letra
Apetar ctrl faz a fala parar 

tecla H navega pelos titulos
verificar semantica dos titulos uso dos H1,H2...
hierarquia do H e se tem informação util

k navega entre os links disponíveis
shift+k volta entreos links

atributo html <h1 lang="en"> faz a frase ser lida na lingua escolhida

tecla G navega pelas imagens

se estiver dentro de um link a tag svg com <desc>usado para descricao e nao
 titulo</desc> ou title dentro do svg não lê corretamente pelo tab
 ou k no mouse sim Nesse caso usar title como atributo do link
 Não usar title e alt juntos
 
 colocar descricao do alt da img passando o contexto do local q está e
 não só descrevendo o conteudo
 para descricao longa usar longdesc linkando um html
 NVDA tem um limite de 128 caracteres
 vrificar se imgem faz sentido ter desc se não colocar alt sem valor
 para o leitor de tela ignorar a img

tecla L lê as listas

no CSS
lista style:disc; faz o leitor de tela ler bolinha antes da palavra
lista style: none; no lugar arruma
não usar todxs ou tod@s mudar o paragramo ex: todas as pessoas

se elemento estiver como display: none ou visibility: hidden 
o nvd não reconhece
Se não quiser que o elemento apareça pode usar display:absolute ou flex
parta desgrudar o elemento da tela e dar uma coordenada para o infinito
como left: -9999px ou opacity:0

criar no inicio da tela um ancora <a> para pular para o conteudo
 principal da página ex: <a href="#conteudoPrincipal"> criar id
 e depois colocar no conteúdo principal <h1 id="conteudoPrincipal">

 para esconder o link no css usamos uma classe assim
 
 .pularNavegacao,	(vai ficar escondido)
 .pularNavegacao:active (se estiver com o clique ativo)
 .pularNavegacao:focus	(se estiver com focus)
 .pularNavegacao:hover{	(se tiver hover)
	text-indent: 100%;
	white-space: nowrap;
	overflow: hidden;
	width 1px;			(largura de 1px)
	height: 1px;		(altura de 1px)
	display: block		(para largira e altura funcionarem)
	color: transparent; (porque a cor é tranparent)
	position: absolute;	(para sair do contexto)
 }
 
 role="" atributo html para mudar o papel da tag
 ex: <div role="button"> a div vai sr interpretada como button pelo 
 leitor de tela, qualquer tag se colocarmos role="main" vira o conteudo
 principal da pagina
 
 Semantica se ouver um img e um <p> sobre o img é bom linkar essas tags
 usando ao inves de uma div um <figure> e ao inves do <p> o <figpcation>
 mas se for um link para ser lido apenas como link e manter o alt da img
 caso a imagem não carregue, usamos no link o atributo 
 aria-labelledby="com o id" colocamos um id no figpcation para linkarmos
 então o nvda vai ler como link o conteudo
 
 wai aria é como um pacote de expanção do html 5, com varios atributos
 para acessib no angular tem o ngaria que facilita a utilizacao desses
 atributos
 
formulários
usar aria-palceholder="" nos campos para informar ao leitor de tela oq
é para digitar ou usar no label um for="nome" e no input usar id="nome"

ao inves de usar o atributo html disable que deixa o campo do formulario
ciza e não selecionavel e nem editavel podemos usar o atributo readonly
o campo sera selecionavel mas não editavel
 