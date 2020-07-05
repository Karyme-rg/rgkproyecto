document.head.innerHTML += 
  `<style>
    mi-footer {display: block}
  </style>`;

customElements.define("mi-footer", class extends HTMLElement {

  connectedCallback() {
    this.textContent = "Copyright © 2020 Karyme Romero Galvez";
  }
});