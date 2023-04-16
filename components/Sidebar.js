class Sidebar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="Sidebar">
            <div class="Close" onclick="CloseMenu()">
                <div class="Bar1"></div>
                <div class="Bar2"></div>
                <div class="Bar3"></div>
              </div>
               <a href="https://pm.soudafarin.ir/auth/login" class="LoginSidebar" target="_blank">ورود سرمایه گذار</a>
                <ul>
                     <li><a class="Menu" href="./index.html">صفحه اصلی</a></li>
                     <li>
                        <div class="Menu">
                        رویه‌های سبدگردانی اختصاصی
                          <i class="fa fa-angle-down"></i>
                        </div>
                         <ul class="SubMenu">
                              <li><a href="./PortfolioManagement.html">معرفی سبدگردانی</a></li>
                              <li><a href="./investmentProcedure.html">فرایند سرمایه گذاری در سبد</a></li>
                              <li><a href="./investmentStage.html">مراحل سرمایه گذاری</a></li>
                              <li><a href="./Forms.html">دانلود فرم ها</a></li>
<!--                              <li><a href="./information.html">منابع اطلاعاتی مورد استفاده سبدگردان </a></li>-->
<!--                              <li><a href="./analysisMethods.html">روش های مورد استفاده در تجزیه و تحلیل</a></li>-->
<!--                              <li><a href="./securitiesTypes.html">انواع اوراق بهادار تحت مدیریت در سبد های اختصاصی</a></li>-->
<!--                              <li><a href="./securitiesAnalysis.html">روش های تحلیل اوراق بهادار و منابع تحلیل</a></li>-->
<!--                              <li><a href="./conflictOfInterest.html"> کنترل تضاد منافع سبد گردان و مشتریان </a></li>-->
<!--                              <li><a href="./aboutBasketManagement.html">درباره سبد گردانی اختصاصی</a></li>-->
<!--                              <li><a href="./wage.html">کارمزد سبد گردان چقدر است </a></li>-->
<!--                              <li><a href="./riskAssessment.html"> ارزیابی ریسک مشتریان</a></li>-->
<!--                              <li><a href="./whySoudAfarin.html"> چرا سبد گردان سود آفرین </a></li>                        -->
                         </ul>
                     </li>
                     <li><a href="./marketAnalysis.html" class="Menu">تحلیل بازار سرمایه</a></li>
                     <li>
                        <div class="Menu">
                        درباره سودآفرین
                         <i class="fa fa-angle-down"></i>
                        </div>
                       <ul class="SubMenu">
                              <li><a href="./Team.html">تیم سبدگردان</a></li>
                              <li><a href="./introduce.html">معرفی سودآفرین</a></li>
                              <li><a href="./Board.html">هیئت مدیره</a></li>
                              <li><a href="./licenses.html">مجوزها</a></li>
                       </ul>
                     </li>
                     <li><a class="Menu" href="#Connect">ارتباط با سودآفرین</a></li>
                </ul>
            </div>
        `;
    }
}

customElements.define('sidebar-component', Sidebar);

let Menu = document.getElementsByClassName("Menu");
for (let i = 0; i < Menu.length; i++) {
    Menu[i].addEventListener("click", function () {
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
