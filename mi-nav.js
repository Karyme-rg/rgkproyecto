
document.head.innerHTML += 
  `<style>
    mi-nav {display: block}
  </style>`;

customElements.define("mi-nav", class extends HTMLElement {
  
  connectedCallback() {
    this.innerHTML =  
      `<a class="btn btn-link" href="index.html">Materias</a>
      <a class="btn btn-link" href="usuarios.html">Usuarios</a>`;
  }
});