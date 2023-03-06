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
                <ul>
                     <li><a class="Menu" href="./index.html">صفحه اصلی</a></li>
                     <li>
                        <div class="Menu">
                        رویه‌های سبدگردانی اختصاصی
                          <i class="fa fa-angle-down"></i>
                        </div>
                         <ul class="SubMenu">
                              <li><a href="./PortfolioManagement.html">معرفی سبدگردانی</a></li>
                              <li><a href="">فرایند سرمایه گذاری در سبد</a></li>
                              <li><a href="./investmentStage.html">مراحل سرمایه گذاری</a></li>
                              <li><a href="./Forms.html">دانلود فرم ها</a></li>
                              <li><a href="">سایر</a></li>
                         </ul>
                     </li>
                     <li>
                     <div class="Menu">
                     تحلیل بازار سرمایه
                       <i class="fa fa-angle-down"></i>
                     </div>
                       <ul class="SubMenu">
                       <li><a href="./information.html">منابع اطلاعاتی مورد استفاده سبدگردان </a></li>
                       <li><a href="./analysisMethods.html">روش های مورد استفاده در تجزیه و تحلیل</a></li>
                       <li><a href="./securitiesTypes.html">انواع اوراق بهادار تحت مدیریت در سبد های اختصاصی</a></li>
                       <li><a href="./securitiesAnalysis.html">روش های تحلیل اوراق بهادار و منابع تحلیل</a></li>
                       </ul>
                     </li>
                     <li>
                        <div class="Menu">
                        درباره سودآفرین
                         <i class="fa fa-angle-down"></i>
                        </div>
                       <ul class="SubMenu">
                              <li><a href="./Team.html">تیم سبدگردان</a></li>
                              <li><a href="./introduce.html">معرفی سودآفرین</a></li>
                              <li><a href="./Board.html">هیئت مدیره</a></li>
                       </ul>
                     </li>
                     <li><a class="Menu" href="#Connect">ارتباط با سودآفرین</a></li>
                </ul>
            </div>
            <style>
             #Sidebar{
                background-color: rgba(1,1,43,0.85);
                height: 100%;
                width: 300px;
                position:fixed;
                color: white;
                z-index: 1000;
                right: -300px;
                top: 0;
                transition: all ease 0.5s;
                display: none;
             }
             .Close {
                 margin: 15px;
                 cursor: pointer;
             }

            .Bar1, .Bar2  , .Bar3{
              border-radius: 25px;
              width: 30px;
              height: 5px;
              margin: 6px 0;
              transition: 0.4s;
              background-color: white;
            }
            .Bar1{
             transform: translate(0, 11px) rotate(-45deg);
            } 
            .Bar2{
               opacity: 0;
            }
            .Bar3{
             transform: translate(0, -11px) rotate(45deg);
            }
             #Sidebar ul{
                padding: 20px;
             }
           
             .Menu{
                padding: 15px;
                cursor: pointer;
                display: block;
                transition: all ease 0.5s;
                position: relative;
                text-decoration: none;
                color: white;

             }
             .Menu:hover{
                 background-color: #7286D3;
                 text-decoration: none;
                 color: white;
             }
             .Menu i{
                position: absolute;
                font-size: small;
                margin:5px 3px 0 0;
                left: 15px;
             }
             .SubMenu{
                 max-height: 0;
                 overflow: hidden;
                 transition: max-height 0.5s ease-out;
             }
             .SubMenu li{
                padding:15px 40px;
             }
             @media screen and (max-width: 900px) {
                #Sidebar{
                   display: block;
                }
             }
            </style>
        `;
    }
}

customElements.define('sidebar-component', Sidebar);