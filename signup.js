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
            <style>
                ${document.querySelector('style').innerHTML}
            </style>
        `;
    }
}
customElements.define('signup-form', SignupForm);