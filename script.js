function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // Adicionar a classe 'rotate' para fazer a imagem girar
  img.classList.add("rotate-animation");

  // Alterar a imagem após 2 segundos
  setTimeout(function() {
    if (html.classList.contains("light")) {
      // Se estiver em light mode, trocar para a imagem light
      img.setAttribute("src", "./assets/bruno-light.png");
    } else {
      // Se não estiver em light mode, trocar para a imagem normal
      img.setAttribute("src", "./assets/bruno.png");
    }
    // Remover a classe 'rotate' para parar a animação de rotação
    img.classList.remove("rotate-animation");
  }, 2000);
}