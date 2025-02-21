class SignupForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const container = document.createElement("div");
        container.classList.add("signup-container");

        container.innerHTML = `
            <div class="left-section">
                <h2>Capturing Moments, Creating Memories</h2>
            </div>
            <div class="right-section">
                <h2>Create an account</h2>
                <form>
                    <input type="text" placeholder="First Name">
                    <input type="text" placeholder="Last Name">
                    <input type="email" placeholder="Email">
                    <input type="password" placeholder="Enter your password">
                    <button type="submit">Create Account</button>
                </form>
            </div>
        `;

        const style = document.createElement("style");
        style.textContent = `
            :host {
                --primary-color: #6b46c1;
                --input-bg: #2d3748;
                --input-border: #4a5568;
                --text-color: #ffffff;
            }
            .signup-container {
                display: flex;
                max-width: 900px;
                width: 100%;
                background: #2d2d2d;
                border-radius: 10px;
                overflow: hidden;
            }
            .left-section {
                width: 50%;
                background: url('https://images.unsplash.com/photo-1739376076282-0d91754091e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D') no-repeat center;
                background-size: cover;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 20px;
            }
            .right-section {
                width: 50%;
                padding: 40px;
            }
            input, button {
                width: 100%;
                margin: 10px 0;
                padding: 10px;
                border-radius: 5px;
                border: 1px solid var(--input-border);
                background: var(--input-bg);
                color: var(--text-color);
            }
            button {
                background: var(--primary-color);
                cursor: pointer;
                color: white;
                border: none;
            }
        `;

        this.shadowRoot.append(style, container);
    }
}

customElements.define('signup-form', SignupForm);
