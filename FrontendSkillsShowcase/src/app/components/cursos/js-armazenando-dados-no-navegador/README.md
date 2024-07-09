Por padrão quando um formulario é enviado ele recarrega a pagina e envia os dados para o cabeçalho(ulr) da pagina
form.addEventListener('submit',(evento)=>{
evento.preventDefault(); para que o formulario não recaregue a pagina e pegue o evento
}) para pegar um campo de formulario pelo seu nome podemo usar o evento de submit apiturado evento.target['atributo name'.value
Após capturar os valores digitados podemos colocalos na tela usando o createElement assim:
const novoItem = document.createElement('li') criamos o elemento
novoItem.classList.add('item') colocamos a classe
novoItem.innerHTML = nome adicionamos o elemento ao html
Para adicionar um elemto html dentro de outro usamos o appendChild()
novoItem.appendChild(numeroItem) o numeroItem é um elemento <strong>1</strong> com fica assim: <li><strong>1<strong><li> podemos adicionar o texto do <li> assim: novoItem.innerHTML += nome nome é uma string, capturando um elemento existente na tela e usando o appendChild conseguimos inserir o elemento na tela
localStorage do navegador
localstorage.setItem(chave, valor) insere um obj no localStorage precisa passar chave e valor, chave é oq sera usado para acessar o obj e valor é oq sera inserido

// Armazenando um valor simples
localStorage.setItem('nome', 'Jhon');

// Armazenando um número
localStorage.setItem('idade', 25);

// Armazenando um booleano
localStorage.setItem('ativo', true);

// Armazenando um array (convertido para string)
const interesses = ['desenvolvimento', 'tecnologia'];
localStorage.setItem('interesses', JSON.stringify(interesses));

// Armazenando um objeto (convertido para string)
const usuario = { nome: 'Jhon', idade: 25, ativo: true };
localStorage.setItem('usuario', JSON.stringify(usuario));

// Recuperando valores
const nome = localStorage.getItem('nome');
const idade = localStorage.getItem('idade');
const ativo = localStorage.getItem('ativo');
const interesses = JSON.parse(localStorage.getItem('interesses'));
const usuario = JSON.parse(localStorage.getItem('usuario'));

localstorage.removeItem("curso") remove um obj do localStorage
localStorage.clear() limpa geral o localStorage ele retrona vazio
const totalItens = localStorage.length; retrona o número total de itens armazenados
const primeiraChave = localStorage.key(0); retorna a chave do primeiro item

Diferentes tipos de armazenamento
localStorage guarda informações de forma persistente no navegador, sendo em média 5MB de armazenamento padrão, podendo variar dependendo do navegador utilizado. Este limite pode ser aumentado pelo usuário quando necessário, no entanto apenas alguns navegadores suportam isso. Os dados salvos são apenas do tipo string texto.

Cookies guardam informações de forma persistente no navegador, sendo até 4KB de armazenamento por Cookie, bem menos que localStorage. Cada cookie é como se fosse um arquivo criado que guarda as informações de acesso da pessoa usuária, por exemplo, de qual local o site foi acessado, qual e-mail foi utilizado ao realizar login no navegador, e quais produtos de um site foram clicados. Para acessá-los, muitas empresas criam pop ups para confirmar a autorização do uso dessas informações, pois são consideradas sensíveis.

sessionStorage é similar ao localStorage, sua diferença é que os dados não são salvos de forma persistente, ou seja, ao fechar o navegador eles são perdidos. Este tipo de armazenamento é utilizado quando queremos que a pessoa usuária utilize os dados apenas enquanto estiver com o site aberto.
const existe = itens.find( elemento => elemento.nome === nome.value ) metodo find para encontrar itens no array nesse caso esta buscando um elemeto que tenha o nome igaul a do nome.value e guarda o objeto na const existe

