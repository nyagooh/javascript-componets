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
                <li class="dropdown">
                    <a href="#">About ⌄</a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Our Story</a></li>
                    </ul>
                </li>
                <li><input type="text" placeholder="Search..." class="search"></li>
                <li><button class="theme-toggle">🌗</button></li>
            </ul>
        `;

        // Add styles
        const style = document.createElement("style");
        style.textContent = `
            :host {
                --navbar-bg: #222;
                --navbar-text: white;
                --button-bg: crimson;
                --button-hover: darkred;
            }

            .navbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: var(--navbar-bg);
                color: var(--navbar-text);
                padding: 10px 20px;
                font-family: Arial, sans-serif;
                position: relative;
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
                align-items: center;
            }
            .nav-links li {
                display: inline-block;
                position: relative;
            }
            .nav-links a {
                text-decoration: none;
                color: var(--navbar-text);
                font-size: 16px;
                padding: 5px;
            }
            .nav-links .search {
                padding: 5px;
                border-radius: 5px;
                border: none;
            }
            .theme-toggle {
                background: var(--button-bg);
                color: white;
                padding: 8px 12px;
                border: none;
                cursor: pointer;
                font-size: 14px;
                transition: 0.3s;
            }
            .theme-toggle:hover {
                background: var(--button-hover);
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
            .menu-toggle {
                display: none;
            }
            @media (max-width: 768px) {
                .hamburger {
                    display: block;
                }
                .nav-links {
                    display: none;
                    flex-direction: column;
                    position: absolute;
                    top: 50px;
                    left: 0;
                    background: var(--navbar-bg);
                    width: 100%;
                    padding: 10px 0;
                }
                .menu-toggle:checked + .hamburger + .nav-links {
                    display: flex;
                }
            }
        `;

        // Append styles & navbar to Shadow DOM
        this.shadowRoot.append(style, navbar);
        const hamburger = navbar.querySelector(".hamburger");
        const navLinks = navbar.querySelector(".nav-links");

        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });

        // Dark Mode Toggle
        const themeToggleBtn = navbar.querySelector(".theme-toggle");
        themeToggleBtn.addEventListener("click", () => {
            const isDark = this.getAttribute("theme") === "dark";
            this.setAttribute("theme", isDark ? "light" : "dark");
        });
    }

    static get observedAttributes() {
        return ["theme"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "theme") {
            const isDark = newValue === "dark";
            this.shadowRoot.host.style.setProperty("--navbar-bg", isDark ? "#fff" : "#222");
            this.shadowRoot.host.style.setProperty("--navbar-text", isDark ? "#000" : "white");
            this.shadowRoot.host.style.setProperty("--button-bg", isDark ? "blue" : "crimson");
            this.shadowRoot.host.style.setProperty("--button-hover", isDark ? "darkblue" : "darkred");
        }
    }
}

// Register the component
customElements.define("custom-navbar", CustomNavbar);
