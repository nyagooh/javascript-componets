class CustomNavbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        // Create navbar container
        const navbar = document.createElement("nav");
        navbar.classList.add("navbar");

        // Navbar HTML structure
        navbar.innerHTML = `
            <div class="logo">MyLogo</div>
             <input type="checkbox" id="menu-toggle" class="menu-toggle">
            <label for="menu-toggle" class="hamburger">&#9776;</label>

            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <button class="nav-button">Click Me</button>
        `;

        // Add styles
        const style = document.createElement("style");
        style.textContent = `
            .navbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: var(--navbar-bg, #333);
                color: var(--navbar-text, white);
                padding: 10px 20px;
                font-family: Arial, sans-serif;
            }
            .logo {
                font-size: 20px;
                font-weight: bold;
            }
            .nav-links {
                list-style: none;
                display: flex;
                gap: 20px;
                padding: 0;
                margin: 0;
            }
            .nav-links li {
                display: inline;
            }
            .nav-links a {
                text-decoration: none;
                color: var(--navbar-text, white);
                font-size: 16px;
            }
            .nav-button {
                background: var(--button-bg, blue);
                color: white;
                padding: 8px 15px;
                border: none;
                cursor: pointer;
                font-size: 14px;
                transition: 0.3s;
            }
            .nav-button:hover {
                background: var(--button-hover, darkblue);
            }
                /* Dropdown */
            .dropdown-menu {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                background: var(--navbar-bg);
                list-style: none;
                padding: 5px;
                border-radius: 5px;
                width: 120px;
            }
            .dropdown:hover .dropdown-menu {
                display: block;
            }

            /* Hamburger Menu (Mobile) */
            .hamburger {
                display: none;
                font-size: 24px;
                cursor: pointer;
            }
            
        `;

        // Append styles & navbar to Shadow DOM
        this.shadowRoot.append(style, navbar);

        // Button click event
        const button = navbar.querySelector(".nav-button");
        button.addEventListener("click", () => {
            alert("Button Clicked!");
        });
    }
}

// Register the component
customElements.define("custom-navbar", CustomNavbar);
