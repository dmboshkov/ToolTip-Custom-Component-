class Tooltip extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      
      // Leer atributos
      const text = this.getAttribute('text') || 'Tooltip predeterminado';
      const position = this.getAttribute('position') || 'top';
      
      // Crear el HTML del componente
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: inline-block;
            position: relative;
          }
          .tooltip-text {
            visibility: hidden;
            background-color: #333;
            color: #fff;
            text-align: center;
            border-radius: 4px;
            padding: 5px 10px;
            position: absolute;
            z-index: 1;
            font-size: 14px;
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.3s;
          }
          :host(:hover) .tooltip-text {
            visibility: visible;
            opacity: 1;
          }
            
          /* Posiciones */
          .top {
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 5px;
          }
          .right {
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
            margin-left: 5px;
          }
          .bottom {
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            margin-top: 5px;
          }
          .left {
            right: 100%;
            top: 50%;
            transform: translateY(-50%);
            margin-right: 5px;
          }
        </style>
        <slot></slot>
        <span class="tooltip-text ${position}">${text}</span>
      `;
    }
  }

  customElements.define('tool-tip', Tooltip);