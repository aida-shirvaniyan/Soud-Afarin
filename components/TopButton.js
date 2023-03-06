class GoToTop extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <button onclick="topFunction()" id="myBtn">
    <i class="GoTopicon fa fa-arrow-up"></i>
</button>
<style>

#myBtn {
    position: fixed;
    right: 60px;
    border-radius: 50%;
    z-index: 99;
    opacity: 0;
    width: 50px;
    height: 50px;
    background-color: #8db4f8;
    color: white;
    bottom: 120px;
    cursor: pointer;
    transition: all 0.5s ease;
        box-shadow: 0 0 15px 0 rgba(172,198,221,0.5);
}

.GoTopicon {
    font-size: large;
    color: white;
}

#myBtn:hover {
    transition: background-color 0.4s ease-in-out;
    background-color: cornflowerblue;
}
</style>
        `;
    }
}
customElements.define('top-component', GoToTop);
