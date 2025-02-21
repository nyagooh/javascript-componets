class LoginForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const container = document.createElement("div");
        container.classList.add("login-container");

        container.innerHTML = `
            <div class="login-box">
                <h2>Welcome Back</h2>
                <p>Enter your details to log in.</p>
                <form>
                    <input type="email" placeholder="Email" required>
                    <input type="password" placeholder="Password" required>
                    <div class="forgot-password">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit">Log in</button>
                </form>
            </div>
        `;

        const style = document.createElement("style");
        style.textContent = `
            :host {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
                width: 100vw;
                background: url('https://images.unsplash.com/photo-1734531352669-11c2b2ddea3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExNXx8fGVufDB8fHx8fA%3D%3D') no-repeat center') no-repeat center;
                background-size: cover;
            }
            .login-container {
                display: flex;
                justify-content: center;
                align-items: center;
                background: rgba(0, 0, 0, 0.7);
                padding: 40px;
                border-radius: 10px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                width: 350px;
                color: white;
            }
            .login-box {
                width: 100%;
                text-align: center;
            }
            h2 {
                margin-bottom: 10px;
            }
            p {
                font-size: 14px;
                margin-bottom: 20px;
            }
            input {
                width: 100%;
                padding: 10px;
                margin: 10px 0;
                border: none;
                border-radius: 5px;
                background: rgba(255, 255, 255, 0.2);
                color: white;
            }
            input::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
            .forgot-password {
                text-align: right;
                margin-bottom: 15px;
            }
            .forgot-password a {
                color: #a9a9ff;
                text-decoration: none;
            }
            button {
                width: 100%;
                padding: 10px;
                border: none;
                border-radius: 5px;
                background: #6b46c1;
                color: white;
                cursor: pointer;
            }
        `;

        this.shadowRoot.append(style, container);
    }
}

customElements.define('login-form', LoginForm);