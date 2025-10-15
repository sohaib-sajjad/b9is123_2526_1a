
class FilledCircle extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Create shadow root
        const shadow = this.attachShadow({ mode: "open" });

        // Create SVG element
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "100");
        svg.setAttribute("height", "100");

        // Create circle
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", "50");
        circle.setAttribute("cy", "50");
        circle.setAttribute("r", "50");
        circle.setAttribute("fill", this.getAttribute("color") || "black"); // default color

        svg.appendChild(circle);
        shadow.appendChild(svg);
    }
}

// Register the custom element
customElements.define("filled-circle", FilledCircle);