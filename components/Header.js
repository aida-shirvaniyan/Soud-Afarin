class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <header id="Header">
    <div class="logo">
        <img src="assets-list/logo.svg" alt="logo">
    </div>
    <div class="Header-top">
    <div class="container">
        <div class="row justify-content-lg-end justify-content-sm-center justify-content-end">
             <div class="information col-lg-4 col-xl-3 col-md-6 col-sm-10 col-10">
                  <div class="phoneNumber">
                       <p>88035947 - (021)</p>
                       <img src="assets-list/phone.png" alt="phone">
                  </div>
                  <p>تحت نظارت سازمان بورس و اوراق بهادار</p>
              </div>
              <a href="https://pm.soudafarin.ir/auth/login" target="_blank" class="Login">ورود سرمایه گذار</a>
        </div>
        </div>
        <div class="menuContainer" onclick="MobileMenu()">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
              </div>
    </div>
    <div id="Header_bottom">
                 <ul class="menuList ">
                     <li><a href="./index.html">صفحه اصلی</a></li>
                     <li class="parentmenu">
                          رویه‌های سبدگردانی اختصاصی
                         <i class="fa fa-angle-down"></i>
                         <ul class="submenu">
                              <li><a href="./PortfolioManagement.html">معرفی سبدگردانی</a></li>
                              <li><a href="./investmentProcedure.html">فرایند سرمایه گذاری در سبد</a></li>
                              <li><a href="./investmentStage.html">مراحل سرمایه گذاری</a></li>
                              <li><a href="./Forms.html">دانلود فرم ها</a></li>
                              <li class="SubmenuParent">
                                    سایر
                                    <i class="fa fa-angle-up UpAngel"></i>
                                    <ul class="Newsubmenu">
                                        <li><a href="./information.html">منابع اطلاعاتی مورد استفاده سبدگردان </a></li>
                                        <li><a href="./analysisMethods.html">روش های مورد استفاده در تجزیه و تحلیل</a></li>
                                        <li><a href="./securitiesTypes.html">انواع اوراق بهادار تحت مدیریت در سبد های اختصاصی</a></li>
                                        <li><a href="./securitiesAnalysis.html">روش های تحلیل اوراق بهادار و منابع تحلیل</a></li>
                                        <li><a href="./conflictOfInterest.html"> کنترل تضاد منافع سبد گردان و مشتریان </a></li>
                                        <li><a href="./aboutBasketManagement.html">درباره سبد گردانی اختصاصی</a></li>
                                        <li><a href="./wage.html">کارمزد سبد گردان چقدر است </a></li>
                                        <li><a href="./riskAssessment.html"> ارزیابی ریسک مشتریان</a></li>
                                        <li><a href="./whySoudAfarin.html"> چرا سبد گردان سود آفرین </a></li>
                                    </ul>
                              </li>
                              </ul>
                     </li>
                     <li><a href="./marketAnalysis.html">تحلیل بازار سرمایه</a></li>
                     <li class="parentmenu">
                         درباره سودآفرین
                         <i class="fas fa-angle-down"></i>
                         <ul class="submenu">
                              <li><a href="./Team.html">تیم سبدگردان</a></li>
                              <li><a href="./introduce.html">معرفی سودآفرین</a></li>
                              <li><a href="./Board.html">هیئت مدیره</a></li>
                              <li><a href="./licenses.html">مجوزها</a></li>
                         </ul>
                     </li>
                     <li><a href="#Connect">ارتباط با سودآفرین</a></li>
                 </ul>
<!--             <div class="searchBox">-->
<!--                 <input class="searchInput"type="text" name="" placeholder="جستجو...">-->
<!--                 <button class="searchButton" href="#">-->
<!--                     <img width="30px" src="assets/magnify.png" alt="magnify">-->
<!--                 </button>-->
<!--             </div>-->
    </div>
</header>
            `;
    }
}

customElements.define('header-component', Header);
