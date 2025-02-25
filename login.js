class LoginForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const container = document.createElement("div");
        container.classList.add("login-container");

        container.innerHTML = `
        <div class="left-section">
             <h2>Capturing Moments, Creating Memories</h2>
                    </div>
         <div class="right-section">
                        <h2>Welcome Back</h2>
                        <p>Please Enter your Account details</p>
                            <input type="email" placeholder="Email">
                            <input type="password" placeholder="Enter your password">
                           <div class="terms">
                                <a href="#">Forgot Password?</a>
                            </div>
                            <button type="submit">Login</button>
                        </form>
                        <p>Or register with</p>
                        <button class="social-btn">
                        <text class = "google-text" x="10" y="30" font-family="Poppins, Arial, sans-serif"  font-weight="bold">
                                <span class="blue">G</span>
                                <span class="red">o</span>
                                <span class="yellow">o</span>
                                <span class="blue">g</span>
                                <span class="green">l</span>
                                <span class="red">e</span>
                        </text>
                        </button>
                        <button class="social-btn facebook">
                      <img src="https://img.icons8.com/fluency/28/facebook-new.png" alt="Facebook" />
                    </button>
                     <div class="create-account">
                  <p>Don't have an account? <a href="#">Create an account</a></p>
                </div>
         </div>

        `;

        const style = document.createElement("style");
        style.textContent = `
            .login-container {
                        display: flex;
                        max-width: 900px;
                        width: 100%;
                        background:var(bg-color);
                        border-radius: 10px;
                        overflow: hidden;

                    }
                    .left-section {
                        width: 50%;
                        background: url('https://images.unsplash.com/photo-1734531352669-11c2b2ddea3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExNXx8fGVufDB8fHx8fA%3D%3D') no-repeat center;
                        background-size: cover;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        padding: 20px;
                    }
                    .right-section {
                        width: 50%;
                        padding: 40px;
                        background-color:var(--text-color);
                    }
                    input, button {
                        width: 100%;
                        margin: 10px 0;
                        padding: 10px;
                        border-radius: 5px;
                        border: 1px solid var(--input-border);
                        background: var(--bd-color);
                        color: var(--bg-color);
                    }
                    button {
                        background: var(--primary-color);
                        cursor: pointer;
                    }
                  .google-text {
                        font-family: Poppins, Arial, sans-serif;
                        font-size: 23px;
                        font-weight: bold;
                    }

                    .blue { color: #4285F4; }
                    .red { color: #EA4335; }
                    .yellow { color: #FBBC05; }
                    .green { color: #34A853; }
                  .terms {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        font-size: 14px;
                    }
                    .terms input {
                        width: 16px;
                        height: 16px;
                    }
                    .social-btn {
                        background: white;
                        color: black;
                    }

                    @media (max-width: 768px) {
                        .signup-container {
                            flex-direction: column;
                            height: auto;
                            text-align: center;
                            padding: 20px;
                        }

                        .left-section {
                            width: 100%;
                            height: 200px;
                        }

                        .right-section {
                            width: 100%;
                            padding: 20px;
                        }

                        .name-fields {
                            display: flex;
                            flex-direction: column;
                        }
                    }

                    @media (max-width: 480px) {
                        .signup-container {
                            width: 95%;
                        }

                        .right-section {
                            padding: 15px;
                        }

                        input, button {
                            padding: 8px;
                        }
                    }`;

        this.shadowRoot.append(style, container);
    }
}

customElements.define('login-form', LoginForm);