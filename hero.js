class heroSection extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"});
        const hero = document.createElement("section");
        hero.classList.add("hero")

        // Hero Content
        hero.innerHTML = `
            <div class="hero-content">
                <h1>Welcome to Our Platform</h1>
                <p>Your journey to success starts here. Join us and explore endless possibilities.</p>
                <div class="buttons">
                    <button class="primary-btn">Get Started</button>
                    <button class="secondary-btn">Learn More</button>
                </div>
                <div class="social-icons">
                    <a href="#"><img src="facebook.svg" alt="Facebook"></a>
                    <a href="#"><img src="twitter.svg" alt="Twitter"></a>
                    <a href="#"><img src="linkedin.svg" alt="LinkedIn"></a>
                </div>
            </div>
        `;



const style = document.createElement("style");
style.textContent = 
`
            :host {
                --bg-image: url('hero-bg.jpg');
                --text-color: white;
                --button-primary: #ff5733;
                --button-secondary: rgba(255, 255, 255, 0.5);
                --button-hover: #c13a1a;
                --button-radius: 5px;
                --font-family: Arial, sans-serif;
            }

            .hero {
                display: flex;
                height: 90vh;
                background: var(--bg-image) no-repeat center center/cover;
                text-align: center;
                color: var(--text-color);
                padding: 20px;
                position: relative;
                font-family: var(--font-family);
                animation: fadeIn 1.5s ease-in-out;
            }

            .hero-content {
                max-width: 600px;
            }

            h1 {
                font-size: 2.5rem;
                margin-bottom: 10px;
            }

            p {
                font-size: 1.2rem;
                margin-bottom: 20px;
            }

            .buttons {
                display: flex;
                gap: 15px;
                justify-content: center;
                margin-bottom: 20px;
            }

            .primary-btn, .secondary-btn {
                padding: 12px 20px;
                font-size: 1rem;
                border: none;
                border-radius: var(--button-radius);
                cursor: pointer;
                transition: background 0.3s;
            }

            .primary-btn {
                background: var(--button-primary);
                color: white;
            }

            .primary-btn:hover {
                background: var(--button-hover);
            }

            .secondary-btn {
                background: var(--button-secondary);
                color: var(--text-color);
                border: 1px solid white;
            }

            .secondary-btn:hover {
                background: white;
                color: black;
            }

            .social-icons {
                display: flex;
                justify-content: center;
                gap: 15px;
            }

            .social-icons img {
                width: 30px;
                height: 30px;
                cursor: pointer;
                transition: transform 0.3s ease;
            }

            .social-icons img:hover {
                transform: scale(1.1);
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
            }

            @media (max-width: 768px) {
                h1 {
                    font-size: 2rem;
                }
                p {
                    font-size: 1rem;
                }
            }
        `;

this.shadowRoot.append(style, hero);
    }
   
}
customElements.define("hero-section", heroSection);