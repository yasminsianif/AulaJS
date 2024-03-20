/* 
    a) Mostrar na tela os alunos. - JS
    b) Notas Menores que 6 em vermelho, maiores ou iguais em azul - HTML, CSS
    c) A media da P1 da turma
    d) A media da P2 da turma
    e) A média de cada Aluno
    f) A quantidades de aprovados
    g) A quantidade de reprovados
    h) Tudo em uma Tabela
*/

function listaAlunos(){
    var ls = [{
        "nome": "Yasmin",
        "ra": "345678901234",
        "notaP1": 7,
        "notaP2": 6
      },
      {
        "nome": "Larissa",
        "ra": "210987654321",
        "notaP1": 9,
        "notaP2": 8
      },
      {
        "nome": "Danilo",
        "ra": "456789012345",
        "notaP1": 3,
        "notaP2": 4
      },
      {
        "nome": "Aline",
        "ra": "789012345678",
        "notaP1": 5,
        "notaP2": 2
      },
      {
        "nome": "Rafael",
        "ra": "678901234567",
        "notaP1": 10,
        "notaP2": 10
      }];
    
    var table = "<table><thead><tr><th>Nome</th><th>RA</th><th>P1</th><th>P2</th><th>Média</th><th>Aprovação</th></tr></thead><tbody><tr>";

    var media = 0;
    var nota = "boa"; // or ruim
    var aprovados = 0;
    var reprovados = 0;

    for(let i = 0; i < ls.length; i++){
        media = (ls[i].notaP1 + ls[i].notaP2) / 2;

        table += "<td>" + ls[i].nome + "</td>" 
                +  "<td>" + ls[i].ra + "</td>";

        nota = (ls[i].notaP1 < 6) ? "ruim" : "boa";
        table += "<td class='" + nota + "'>" + ls[i].notaP1 + "</td>";

        nota = (ls[i].notaP2 < 6) ? "ruim" : "boa";
        table += "<td class='" + nota + "'>" + ls[i].notaP2 + "</td>";

        nota = (media < 6) ? "ruim" : "boa";
        table += "<td class='" + nota + "'>" + media + "</td>";

        if(nota === "ruim"){
            table += "<td>Não</td>";
            reprovados += 1;
        }else{
            table += "<td>Sim</td>";
            aprovados += 1;
        }
        table += "</tr>";
    }
    table += "<p> Aprovados: " + aprovados + "</p>"
           + "<p> Reprovados: " + reprovados + "</p>";

    document.write(table);
    
}