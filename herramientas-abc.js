customElements.define("herramientas-abc", class extends HTMLElement {
    /** Se invoca al agregar este element a la página. */
    connectedCallback() {
      this.innerHTML =  
        `<button id="agregar" type="button" class="btn btn-success" onclick="agrega()">
          Agregar...
        </button>
        <button class="btn btn-info" type="submit">Guardar</button>
        <button  id="eliminar" type="button" onclick="elimina()">Eliminar</button>`;
    }
  });