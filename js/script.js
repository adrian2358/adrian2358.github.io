onload = () => {
  const header = document.getElementsByTagName("header")[0];
  const contenido = document.getElementById("contenido");

  document.getElementById("asd")?.addEventListener("click", function (ev) {
    ev.preventDefault();
    contenido.scrollIntoView(true);
    this.blur();
  });

  onscroll = () => {
    header.style.opacity = 1 - window.scrollY / (window.innerHeight * 0.8);
  };
  onscroll();
};
