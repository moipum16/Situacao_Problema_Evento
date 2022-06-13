const prompt = require('prompt-sync')({ sigint: true }); //ativa o terminal que foi instalado no projeto com o comando: npm install prompt-sync .

const DataPadrao = [parseInt(9), parseInt(10), parseInt(2022)];
const IdadeMinima = parseInt(18);  //Variáveis permanentes de requisitos para participar do evento.
const MaximoDeParticipantes = parseInt(3);

var Participantes = (new Array); //Onde será armazenada a lista de participantes nome + idade.
var Nome = null; //Variável temporária onde será armazenada o nome durante o cadastro.
var Idade = null; //Variável temporária onde será armazenada a idade durante o cadastro.
var Data = new Array; //Variável temporária onde será armazenada a data durante o cadastro.

function DataAtual() {
    Data[0] = (prompt("Digite o dia de hoje: "));
    Data[1] = (prompt("Digite o mês atual: "));
    Data[2] = (prompt("Digite o ano atual: "));
    return (Data);
    //Pergunta ao usuário via terminal, qual a data atual.
}

function SeuNome() {
    Nome = String(prompt("Digite seu nome: "));
    return (Nome);
    //Pergunta ao usuário via terminal, qual o seu nome.
}

function SuaIdade() {
    Idade = parseInt(prompt("Digite sua idade: "));
    return (Idade);
    //Pergunta ao usuário via terminal, qual a sua idade.
}

function Processo() {
    //Valida todos os dados e julga se será feito o cadastro ou não.

    DataAtual();

    if (!Data || Data == "" || Data == null || Data.length < 3 || isNaN(Data[0]) || isNaN(Data[1]) || isNaN(Data[2])) {
        console.log("Digite uma data válida.");
        return (null);
        //Verifica se a data digitada é valida.

    } else if ((parseInt(Data[2]) > (DataPadrao[2])) || ((parseInt(Data[2]) == (DataPadrao[2])) && (parseInt(Data[1]) == (DataPadrao[1])) && parseInt(Data[0]) >= (DataPadrao[0])) || ((parseInt(Data[2]) == (DataPadrao[2])) && (parseInt(Data[1]) > (DataPadrao[1])))) {
        console.log("Não foi possível se cadastrar no evento, pois o mesmo já ocorreu.");
        return (null);
        //Verifica se a data digitado é superior a data em que o evento ocorre.
    }

    else {
        SeuNome();
        if (!Nome || Nome == "" || Nome == null || Nome.length < 3 || !isNaN(Nome)) {
            console.log("Digite um nome válido.");
            return (null);
            //Verifica se o nome digitado é valido.

        } else if (Participantes.includes(`${Nome} ${Idade}`)) {
            console.log("Este participante já está cadastrado.");
            return (null);
            //Verifica e previne que o mesmo participante seja cadastrado repetidamente.

        } else {
            SuaIdade();
            if (!Idade || Idade == "" || Idade == null || Idade < IdadeMinima || isNaN(Idade)) {
                console.log(`A idade mínima para participar é ${IdadeMinima} anos.`);
                return (null);
                //Julga se o participante possui idade suficiente para participar do evento.

            } else {
                Participantes.push(`${Nome} ${Idade}`);
                console.log("Cadastrado com sucesso!");
                console.log(`Lista de Participantes: ${Participantes}.`);
                //Se tudo estiver ok, Adiciona ao cadastro e exibe a lista de participantes.

                if (Participantes.length >= MaximoDeParticipantes) {
                    console.log(`A quantidade máxima de ${MaximoDeParticipantes} participantes já foi atingida.`);
                    //Caso o número de participantes tenha atingido o limite, informa que nenhum cadastro adicional será feito.

                    prompt("Tecle ENTER para sair.");
                    return (null);
                    //Espera até que o usuário tenha lido a última frase e tecle ENTER.
                }
                return (null);
            }
        }
    }
}

do {
    Processo();
} while (Participantes.length < MaximoDeParticipantes);  //executa o evento de cadastro enquanto o numero de participantes for menor que a quantidade máxima de participantes.
