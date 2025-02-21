class SignupForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <div class="signup-container">
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
            </div>
        `;
        const style = document.createElement("style")
        style.textContent = 
            `
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
                        background: url('https://source.unsplash.com/600x800/?nature') no-repeat center;
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
                    }
            `;
            this.shadowRoot.append(style,SignupForm)
        
    }
}
customElements.define('signup-form', SignupForm);