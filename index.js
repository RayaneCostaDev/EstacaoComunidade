// Pega o ano atual
const currentYear = new Date().getFullYear();

// Insere o ano atual no elemento de copyright
document.getElementById('copyright').innerHTML = `&copy; ${currentYear} EstaçãoComunidade. Todos os direitos reservados.`;

function preencherFormulario(atividadeSelecionada) {
    const atividadeInput = document.getElementById("atividade");
  
    if (atividadeInput) {
      atividadeInput.value = atividadeSelecionada;
    }
  
    const secaoContato = document.getElementById("contato");
    if (secaoContato) {
      secaoContato.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Seção de contato não encontrada.");
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-pesquisa");
    const campoPesquisa = document.getElementById("campo-pesquisa");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o comportamento padrão de recarregar a página

        const termo = campoPesquisa.value.trim().toLowerCase();

        if (termo === "") {
            alert("Digite algo para pesquisar!");
            return;
        }

        // Redirecionar para uma página de resultados com o termo (exemplo simples)
        window.location.href = `resultados.html?busca=${encodeURIComponent(termo)}`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const campoPesquisa = document.getElementById("campo-pesquisa");
  const sugestoesContainer = document.getElementById("sugestoes");
  const form = document.getElementById("form-pesquisa");

  const termos = [
      "Jogo da Tradimemória",
      "Trilha da Cultura",
      "Cursos Gratuitos",
      "Blog Educacional",
      "Meio Ambiente",
      "História da Comunidade",
      "Educação Infantil",
      "Oficinas Culturais",
      "Reciclagem",
      "Sustentabilidade"
  ];

  campoPesquisa.addEventListener("input", function () {
      const termo = campoPesquisa.value.trim().toLowerCase();
      sugestoesContainer.innerHTML = "";

      if (termo === "") {
          return;
      }

      const resultados = termos.filter(item => item.toLowerCase().includes(termo));

      resultados.forEach(resultado => {
          const item = document.createElement("button");
          item.classList.add("list-group-item", "list-group-item-action");
          item.textContent = resultado;
          item.addEventListener("click", function () {
              campoPesquisa.value = resultado;
              sugestoesContainer.innerHTML = "";
              form.dispatchEvent(new Event("submit"));
          });
          sugestoesContainer.appendChild(item);
      });
  });

  // Enviar formulário normalmente
  form.addEventListener("submit", function (e) {
      e.preventDefault();
      const termo = campoPesquisa.value.trim().toLowerCase();

      if (termo === "") {
          alert("Digite algo para pesquisar!");
          return;
      }

      window.location.href = `resultados.html?busca=${encodeURIComponent(termo)}`;
  });
});