function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos. Busca o elemento HTML com o ID "resultados-pesquisa" e armazena em uma variável.
    // Este elemento será utilizado para exibir os resultados da pesquisa.
    let section = document.getElementById
    ("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    //valor do campo de pesquisa com letra minúscula
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    // A cada iteração do loop, novos elementos HTML serão adicionados a esta string.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada elemento (dado) do array "dados". Itera sobre cada dado da lista de dados.
    // Este array contém os dados dos castelos a serem exibidos.
    for (let dado of dados) {
      //deixa os dados de titulo em letra minuscula
      titulo = dado.titulo.toLowerCase()
      //deixa os dados de descricao em letra minuscula
      descricao = dado.descricao.toLowerCase()
      //deixa os dados de tags em letra minuscula
      tags = dado.tags.toLowerCase()

      // Verifica se o termo de pesquisa está presente em algum dos campos do dado.
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        
        // Cria um novo elemento HTML para cada resultado. // Cria um novo elemento HTML para exibir o resultado da pesquisa.
        // Cada elemento contém o título, descrição e link.
        resultados += `
          <div class="item-resultado">
            <h2>
              <a>${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank"> Mais informações </a>
          </div>
        `;
       }
      
    }

    // Se o campo de pesquisa estiver vazio, exibe uma mensagem.
    if (!campoPesquisa) {
      section.innerHTML = "<h4>Parece que você esqueceu a palavra mágica! Tente novamente...</h4>"
      return}

// Se nenhum resultado foi encontrado, exibe uma mensagem.
     if (!resultados) {
      resultados = "<h4>O Mapa do Maroto não encontrou nada sobre isso. Que tal uma nova busca?</h4>"
       };
       
    // Atribui o conteúdo HTML gerado ao elemento "section". Atribui os resultados gerados à seção HTML.// Atualiza o conteúdo da seção com os resultados da pesquisa.
    section.innerHTML = resultados;
}
