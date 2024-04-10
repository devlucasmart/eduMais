function verificarRespostas() {
    var respostasCorretas = ["c", "c", "b"];
    var pontuacao = 0;

    var form1 = document.getElementById("quizForm1");
    var form2 = document.getElementById("quizForm2");
    var form3 = document.getElementById("quizForm3");
    var formData1 = new FormData(form1);
    var formData2 = new FormData(form2);
    var formData3 = new FormData(form3);

    var i = 1;
    for (let [pergunta, resposta] of formData1) {
        if (resposta === respostasCorretas[i - 1]) {
            pontuacao++;
        }
        i++;
    }

    for (let [pergunta, resposta] of formData2) {
        if (resposta === respostasCorretas[i - 1]) {
            pontuacao++;
        }
        i++;
    }

    for (let [pergunta, resposta] of formData3) {
        if (resposta === respostasCorretas[i - 1]) {
            pontuacao++;
        }
        i++;
    }

    var notaFinal = (10 / 3) * pontuacao;

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "Você acertou " + pontuacao + " de 3 perguntas. Sua nota é: " + notaFinal.toFixed(2);
}
