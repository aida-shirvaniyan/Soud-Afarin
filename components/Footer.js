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
                <img width="50px" src="assets-list/placeholder.png" alt="address">
                <h3>آدرس</h3>
                <p class="Address">آدرس : تهران ، میدان ونک ، خیابان ملاصدرا ، بین خیابان خوارزمی و خیابان شیخ بهایی ، پلاک 232 طبقه
                    دوم </p>
            </div>
            <div class="col-lg-4 col-md-4 col-10 footerColumn">
                <img width="50px" src="assets-list/phone.png" alt="phone">
                <h3>شماره تماس</h3>
                <ul>
                    <li>02188691365</li>
                    <li>02188583219</li>
                    <li>02188035947</li>
                    <li>soudafarin@soudafarin.ir</li>
                </ul>
            </div>
            <div class="col-lg-4 col-md-4  col-10 footerColumn">
                <img width="50px" src="assets-list/link.png" alt="link">
                <h3>پیوندهای مفید</h3>
                <ul>
                    <li>قوانین و مقررات</li>
                    <li>سوالات متداول</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footerSince">
        کلیه حقوق این سایت متعلق به شرکت سودآفرین می باشد
    </div>
    <!-- Front-end development and design by Aida Shirvaniyan-->
    <!-- visit my website => https://aida-shirvaniyan.github.io -->
</footer>

        `
    }
}

customElements.define('footer-component', Footer);
