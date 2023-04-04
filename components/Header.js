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
<style>

#Header{
    height: 140px;
    position: absolute;
    top:0;
    z-index: 60;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.Header-top{
    background: white;
    display: flex;
    align-items: center;
    height: 70px;
    font-size: small;
}
.information{
    margin: 0 20px;
    justify-content: start;
    display: flex;
    flex-direction: column;
}
.information>p{
    margin: 10px 0 0 0;
    font-family: IRANSansWeb_Light , Nunito-Light;
}
.phoneNumber{
    position: relative;
}
.phoneNumber p{
    display: inline-block;
    font-family: IRANSansWebFaNum , Nunito-Regular;
    margin-bottom: 0;
}

.Login , .Login:hover{
    width: 120px;
    padding:0 15px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    border-radius: 7px;
    color: white;
    background-color: cornflowerblue;
    transform: scale(1);
    transition: all ease 0.5s;
}
.Login:active{
    transform: scale(1.1);
}
.menuContainer {
  top: 15px;
  cursor: pointer;
  position:absolute;
  right: 15px;
  display: none;
}

.bar1, .bar2, .bar3 {
  border-radius: 25px;
  width: 30px;
  height: 5px;
  margin: 6px 0;
  transition: 0.4s;
  background-color: #2d2d81;
}

#Header_bottom{
    background-color: transparent;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.menuList>li{
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    transition: all ease 0.5s;
}
.menuList>li>i{
    font-size: small;
    margin-right: 3px;
}
.menuList>li a{
    color: black;
    text-decoration: none;
    transition: all ease 0.5s;
}
.menuList>li a:hover , .menuList>li:hover{
    color: cornflowerblue;
}
.submenu , .Newsubmenu{
    border-radius: 15px;
    position: absolute;
    background-color: white;
    opacity: 0;
    visibility: hidden;
    transition: all ease 1s;
    width: 220px;
    box-shadow: 0 5px 15px 0 rgba(0,0,0,.15);
    transform: translateY(-50px);
}
.Newsubmenu{
    margin:100px 210px 0;
    width: 320px;
}
.submenu>li>a , .Newsubmenu li a ,.SubmenuParent{ 
    padding: 15px;
    transition: all linear 0.4s;
    font-size: small;
    color: #4e4e4e;
    border-bottom: 3px solid transparent;
    text-decoration: none;
    display: block;
}
.submenu>li:first-child>a , .Newsubmenu li:first-child a {
    border-radius: 15px 15px 0 0;
}
.submenu>li:last-child>a , .Newsubmenu li:last-child a , .SubmenuParent {
    border-radius: 0 0 15px 15px;
}
.submenu>li>a:hover, .Newsubmenu li a:hover , .SubmenuParent:hover{
    background-color: #e2eaff;
    color: #4e4e4e;
    text-decoration: none;
}
.parentmenu:hover .submenu , .SubmenuParent:hover  .Newsubmenu{
    opacity: 1;   
    visibility: visible;
    transform: scale(1) translateY(10px);
}
.SubmenuParent{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.logo{
    position: absolute;
    background-color: #ffffff;
    margin:0 5%;
    padding: 20px;
    border-radius: 0 0 0 20px;
}
.logo img{
    width: 200px;
}
.searchBox {
    position: absolute;
    left: 7rem;
    background: white;
    height: 40px;
    border-radius: 40px;
}

.searchBox:hover > .searchInput {
    width: 240px;
    padding: 0 6px;
}

.searchBox:hover > .searchButton {
  background: white;
  color : #2f3640;
}

.searchButton , .mobileMenu{
    color: white;
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
}

.searchInput {
    border:none;
    background: none;
    outline:none;
    float:left;
    padding: 0;
    color: black;
    font-size: 16px;
    transition: 0.4s;
    line-height: 40px;
    width: 0px;
    caret-color: #212121;

}

@media screen and (max-width: 1300px) {
.logo{
    margin: 0 2%;
}
.logo img{
    width: 160px;
}
.menuList>li{
    font-size: 14px;
    margin-right: 10px;
}
}
@media screen and (max-width: 1000px) {
.logo{
    top:70px;
    margin:0;
    width: 100%;
    display: flex;
    justify-content: center;
}
.menuContainer{
    display: inline;
}
.Login{
   display: none;
 }
.menuList{
    display: none;
}
}
</style>
            `;
    }
}

customElements.define('header-component', Header);
