class CustomButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
  
      const button = document.createElement("button");
      button.textContent = this.getAttribute("label") || "Click Me";
  
      const style = document.createElement("style");
      style.textContent = `
        button {
          background: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          border-radius: 5px;
          width: 5%;
          max-width: 300px;
        }
        button:hover {
          background: #0056b3;
        }
        @media (max-width: 600px) {
          button {
            font-size: 14px;
            padding: 8px 16px;
          }
        }
      `;
  
      this.shadowRoot.append(style, button);
    }
  }
  
  customElements.define("custom-button", CustomButton);
  