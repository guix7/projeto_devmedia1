import entradaDados from 'readline-sync'

console.log("Aplicação de Juros: \n\n");

let valor = entradaDados.question("Informe o valor devido: R$");


if (Number(valor > 0)) {

    let dias = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ");

    if (Number(dias) === 0) {
        console.log("Você está em dia!")
    }

    else if (Number(dias) <= 15) {
        let juros = 0.05;
        let valor_juros = Number(valor) * juros;
        let valor_final = Number(valor) + valor_juros;

        console.log("\n\nValor original da dívida: R$" + valor);
        console.log("Dias atrasados: " + dias);
        console.log("Taxa de juros: 5%");
        console.log("Valor total com juros: " + valor_final);
    }

    else {
        let juros = 0.1;
        let valor_juros = Number(valor) * juros
        let valor_final = Number(valor) + valor_juros;

        console.log("\n\nValor original da dívida: R$" + valor);
        console.log("Dias atrasados: " + dias);
        console.log("Taxa de juros: 10%");
        console.log("Valor total com juros: " + valor_final);

    }
}
else {
    console.log("Digite um valor válido");
}




