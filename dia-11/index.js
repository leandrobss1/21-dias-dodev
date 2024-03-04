//Criando variáveis sobre coletar notas de aluno e calcular a média total ao final

let nomes = [];
let notas = [];
let prosseguir = 's';

while(prosseguir === 's') {
    let nome = prompt('Digite o nome do aluno:');
    let nota = parseFloat(prompt('Digite a nota do aluno:'));
    
    nomes.push(nome);
    notas.push(nota);
    
    prosseguir = prompt('Deseja inserir mais alunos? (s/n)');
}

let soma = notas.reduce((a, b) => a + b, 0);
let media = soma / notas.length;

console.log('Notas individuais:');
for(let i = 0; i < nomes.length; i++) {
    console.log(nomes[i] + ': ' + notas[i]);
}

console.log('Média da turma: ' + media);


// Criando variáveis e armazenando cada um e seu devido array - Concessionária de carros

let modelos = []
let anos = []
let valores = []
let continuar = true
let contador = 0

// Criando o LoopWhile

while(continuar){
    let modelo = prompt('Digite o modelo do carro:')
    modelos[contador] = modelo
    let ano = prompt('Digite o ano do carro:')
    anos[contador] = ano
    let valor = parseFloat(prompt('Digite o valor do carro: '))
    valores[contador] = valor
    contador ++

    let resposta = prompt('Deseja inserir outro carro? (s/n)')
    if (resposta == 'n')
        continuar = false
}

// Exibindo informações ordenada dos modelos

console.log("Carros cadastrados: ")
for (let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i])
}

// Exibindo informações ordenadas por preço

for (let i = 0; i < valores.length - 1; i++) {
    for (let j = 0; j < valores.length - i - 1; j++) {
        if (valores[j] > valores[j + 1]) {

            let modeloMaiorValor = modelos[j]
            modelos[j] = modelos[j +1]
            modelos[j + 1] = modeloMaiorValor

            let anoMaiorValor = anos[j]
            anos[j] = anos[j + 1]
            anos[j + 1] = anoMaiorValor

            let maiorValor = valores[j]
            valores[j] = valores[j + 1]
            valores[j + 1] = maiorValor
        }
    }
}

console.log("Carros ordenados pelo preço: ")
for (let i = 0; i < modelos.length; i++) {
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i]) 
}