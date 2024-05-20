$(document).ready(function(){
let wt = $(window).width();
if(wt >= 320 && wt<1200){
    mo()
}else{
    pc()
}
function mo(){
/*
.gnb>li>a 를 클릭하면 
형제.sub가 펼쳐지고slideToggle(
    .sub의 다른형제요소들은 slideUp()
*/
$(".gnb>li>a").on("click",function(){
    $(this).siblings(".sub").slideToggle();
    $(this).parent().siblings().find(".sub").slideUp()
})


$(".all_btn").on("click",function(){
$("aside").animate({"left":0})
})
$(".close").on("click",function(){
    $("aside").animate({"left":"-100%"})
})



}//모바일함수끝
function pc(){
//.gnb에 마우스올리면sub가 fadeIn()
//.gnb>li>a마우스벗어나면 sub가 fadeOut()

$(".gnb>li").on("mouseover",function(){
    $(this).find(".sub").stop().fadeIn();
}).on("mouseout",function(){
    $(this).find(".sub").stop().fadeOut();

})












}//pc끝
//.top을 클릭하면 최상단으로 1.5초안에 에니메이트
$(".top").on("click",function(e){
    $("html, body").animate({
        "scrollTop" : 0
    },1500)
    //animaite({"속성 : "속성값},시간)

})
$(".top").on("click",function(){
    e.preventDefault();
    //브라우저의 기본동작을 실행하지않도록하는매소드
    //a태그 클릭시href속성에 적힌 url로 이동되지않도록함
})
/*
1.f_lang 누르면 팝업뜨기(on클래스)
2.l_pop 내부의 a를 누르면 a내부의 텍스트text()가
.select영역에 뜨게만들기
*/
$(".f_lang").on("click",function(){
   $(this).toggleClass("on")
})
$(".l_pop a").on("click",function(e){
    e.preventDefault();
    
    let txt=$(this).text();
    $(".select").text(txt);
})



//브라우저가 리사이징될떄마다 실행시키기

$(window).on("resize",function(){
    let resized = $(window).width();
    if(resizeW < 1200){
        mo()

    }else{
        pc()
    }
})




















})//document



