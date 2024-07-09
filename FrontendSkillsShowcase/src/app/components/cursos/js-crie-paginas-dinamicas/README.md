tag audio do html usada para importar audio ja tem estilo proprio e é
diferente para cada navegador, mas so aparece os botoes de play/pause
volume se adicionarmos o atributo controls a tag

em uma tag html o atribulo onclick="" serve para dar uma função ao botão
podendo adicionar codigo javascript dentro das aspas, mas o ideal é
criar um arquivo .js e importar no html

main.js é normalmente o nome do arquivo principal .js de um projeto

função querySelector('') faz uma busca pelo seletor, como no css se
o seletor for uma tag colocamos o nome da tag se for uma classe
colocamos o .nome_da_classe se for um id usamos #nome_do_id sempre entre
parenteses

document é uma palavra reservado do javascript que representa todo
documento html, para usarmos o querySelector chamamos primeiro o
document.querySelector('') podemos testar no console para ver o retorno

exemplo de selector document.querySelector('input[type=tel]') seleciona uma
tag input com o atributo type=tel, [] são usadas para atributos html e css

apos carregar o audio no html com a tag audio acessamos o arquivo pelo JS
com querySelector('#id_do_arquivo').play() o colocar o ponto depois de selecionar
o arquivo estamos acessando as funcionalidades dele por isso podemos usar a 
função play

a leitura da pagina pelo navegador é feita linha por linha de cima para baixo
então se chamarmos o arquivo .js com a tag script antes de um arquivo carregado
no html que queremos usar como um audio,video, temos que chamar o arquivo .js
depois deste arquivo ex: carregamos um <audio src"a.mp3"> na linha 50 do codigo
então temos que carregar o arquivo .js que vai chamar esse arquivo apartir da
linha 51 normalmente podemos por na ultima linha dentro do body

document.querySelector('.classe').onclick = funcão_com_audio;

o seletor pega uma classe atribuida a um botão, com o ponto podemos
 acessar os atributos dele usamos onclick e com = atribuimos o valor
 de uma função que esta puxando um arquivo de audio que foi carregado no html
 mas apenas atribuimos o valor da função por isso não colocamos ()
 
document.querySelectorAll('') busca todos os elementos com aquele seletor
podemos usar uma tag html como button mas não é uma boa prática o ideal é
usar classes por exemplo, uma classe atrelada a varios elementos essa função
busca esses elementos e os organiza como um array

para atribuirmos um valor que a principio não vai mudar como uma lista de teclas
usamos uma constante const listaDeTeclas, funciona igual uma variavel para
 atribuir valor mas ja informa que o valor é fixo e não variavel
esta const pode receber  = document.querySelectorAll('.tecla') e chamar essas
infos igual um array listaDeTeclas[] e a posição do elemento se essa classe
se referice a botoes poderia usar o atributos deles listaDeTeclas[1].onclick

estrutura de repetição while
let contador = 0;//declarar variavel para comparação
while(contador < contador.length){	 // verifica condição para realizar a repetição
	alert(hello world)	//codigo a ser executado em loop
	contador ++ 	// adiciona o valor do contatdor + 1
};

Função com parametro
function tocaSom(idElementoAudio) { // função recebe parametro varialvel
	document.querySelector(idElementoAudio).play(); // executa função play de
//um arquivo de audio que foi chamado, ao usar essa função chamamos 
//tocaSom('#som_tecla_pom')// o elemento de audio com esse id vai executar a
//função play();
};

Funções Anônimas são funções sem nome que são declaradas function(){codigoDaFunção}
So pode ser usadas como valor de algum atributo ou quando são armazenadas dentro de
uma variavel ou constante
button.onclick = function(){tocaSom('#som_tecla_pom')}; // usada como valor 
do parametro onclick

classList atributo que lista as classe de um elemento organizadas em um array
listaDeTeclas[0].classList[1] // no item 0 da listaDeTeclas está sendo usado
o classList que esta com o valor 1 que é referente a segunda classe atribuida
a este elemento, sendo possivel acessa-la

Template string usada para imprimir variaveis junto com strings
`#som_${instrumento}`; entre crases está sendo concatenado o id #som_ com
a const instrumento que tem um valor dinamico montando assim o valor
#som_tecla_pom depois #som_tecla_clap e assim por diante, o conteudo tem
sempre q estar dentro das crases e as variaveis com ${var} sifrão e conchetes

const listaDeTeclas = document.querySelectorAll('.tecla'); listaDeTeclas recebe
o valor da classe tecla q é atribuida a varios botoes na tela.
usando for (contador = 0; contador < listaDeBotoes.length; contador ++){
		listaDeTeclas[contador];} os botoes ficam armazenados em um array
e conforme o contador altera o valor ele acessa um botao diferente

Podemos adicionar uma classe a um elemento acessando a função add de classList
evento onkeydown ocorre quando uma tecla é precionada no teclado
ex: tecla é uma const que tem o valores em um array classList acessa a lista
de classe e depois com .add ela adiciona uma classe já existente a um elemento 
tecla.onkeydown = function (){ 
	tecla.classList.add('ativa')}
Podemos remover uma classe de um elemento acessando a função remove do classList
evento onkeyup ocorre quando paramos de precionar uma tecla do teclado	
tecla.onkeyup = function () {
    tecla.classList.remove('ativa')}

em uma função anonima diretamente ligada a um evento podemos colocar um parametro.
Para usarmos os detalhes do evento foi criado o parametro evento
tecla.onkeydown = function(evento){ 

	if(evento.code === 'Enter' || evento.code === 'Space') {
		tecla.classList.add('ativa');
	}
a condição do if é o evento.code o .code tem o valor da tecla precionada
console.log(evento.code), com o parametro evento definido se usarmos o
 console.log retorna o valor code da tecla clicada e podemos usar esse valor
 para atribuir eventos
 
Para comparar valores usamos 1 == 1 se forem do mesmo tipo, mas se for 1 === '1'
1 numero e 1 string o == vai dar true mas o === vai dar false pois precisa ter
o mesmo valor e ter o mesmo tipo

|| representa o operador or ou
!= operador diferente
&& operador and e

if(elemento != null){}condição if para elemento que não é nulo
mas não precisamos colocar o != o javscript já verica isso
if(elemento){}condição if para elemento que não é nulo

 


