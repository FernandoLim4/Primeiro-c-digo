function buscar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada dado da pesquisa e cria o HTML correspondente
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        campoPesquisa = campoPesquisa.toLowerCase()
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            if(!campoPesquisa) {
                section.innerHTML = "Digite algo no campo de pesquisa"
                return
            }
            if (campoPesquisa )

            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações sobre</a>
            </div>
        `;
        }
    }

    if (!resultados){
        section.innerHTML = "Nada foi encontrado"
        return
    }
    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
}