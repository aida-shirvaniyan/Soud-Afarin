class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer id="Connect" class="Footer">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-4 footerColumn">
                <img width="50px" src="assets/placeholder.png" alt="address">
                <h3>آدرس</h3>
                <p class="Address">آدرس : تهران ، میدان ونک ، خیابان ملاصدرا ، بین خیابان خوارزمی و خیابان شیخ بهایی ، پلاک 232 طبقه
                    دوم </p>
            </div>
            <div class="col-lg-4 col-md-4 col-10 footerColumn">
                <img width="50px" src="assets/phone.png" alt="phone">
                <h3>شماره تماس</h3>
                <ul>
                    <li>02188691365</li>
                    <li>02188583219</li>
                    <li>02188035947</li>
                    <li>soudafarin@soudafarin.ir</li>
                </ul>
            </div>
            <div class="col-lg-4 col-md-4  col-10 footerColumn">
                <img width="50px" src="assets/link.png" alt="link">
                <h3>پیوندهای مفید</h3>
                <ul>
                    <li>قوانین و مقررات</li>
                    <li>سوالات متداول</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footerSince">
        2023 &#169;
    </div>
</footer>
<style>
.Footer{
    background-color: #010129;
    padding: 80px 0 30px;
}
.footerColumn{
    color: white;
    text-align: center;
    font-family: IRANSansWebFaNum !important;
}
.footerColumn h3{
    margin: 20px 0;
}
.footerColumn ul li{
    margin-top: 15px;
    cursor: pointer;
}
.footerSince{
    margin-top: 20px;
    padding: 25px 0 0;
    text-align: center;
    color: white;
    border-top: #1d133c 1px solid;
}
</style>
        `
    }
}

customElements.define('footer-component', Footer);
