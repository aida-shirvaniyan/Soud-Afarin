class GoToTop extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <button onclick="topFunction()" id="myBtn">
    <i class="GoTopicon fa fa-arrow-up"></i>
</button>
        `;
    }
}
customElements.define('top-component', GoToTop);
