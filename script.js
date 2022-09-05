const buys = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalclose =document.querySelector('.js-modal-close')
const modalcontainer=document.querySelector('.js-modal-container')
// hàm hiển thi ham modal
function showBuyTickets(){
    modal.classList.add('open')
}
// đóng hiển thị modal
function hideBuyTickets(){
    modal.classList.remove('open')
}
// lặp qua từng thẻ button và nghe hành vi click
for(const buy of buys ){
    buy.addEventListener('click',showBuyTickets)
}
// nghe hành vu click vào nut clone
modalclose.addEventListener('click',hideBuyTickets)
modal.addEventListener('click',hideBuyTickets)
modalcontainer.addEventListener('click', function(event){
    event.stopPropagation()
})
// đóng mỏ menu-mobi
var header= document.getElementById('header')
var mobileMenu= document.getElementById('mobile-menu')
var hederHeight=header.clientHeight
mobileMenu.onclick=function(){
   var isClone=header.clientHeight === hederHeight;
   if(isClone){
       header.style.height='auto';
   } else{
    header.style.height=null;
   }
}
// tự động đống menu
var menuItems=document.querySelectorAll('#nav li a[href*="#"]');
for( var i = 0; i < menuItems.length;i++ ){
    var menuItem=menuItems[i];
    // console.log(menuItem.nextElementSibling);
    menuItem.onclick = function(event){
    var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
    if(isParentMenu){
        event.preventDefault();
        console.log(this);
    } else{
        header.style.height = null; 

    }
}
}
