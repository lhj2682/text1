$(document).ready(function(){

var cachedWidth = $(window).width();
$(window).resize(function(){
    var newWidth = $(window).width();
    if(newWidth !== cachedWidth){
    var delay = 300;
    var re_timer = null;
    $(window).on('resize', function(){
        clearTimeout(re_timer);
        re_timer = setTimeout(function(){
        document.location.reload();
        }, delay);
    });

        cachedWidth = newWidth;
    }
});

//마우스휠로페이지이동
$("main>div").on("mousewheel",function(e,d){
    if(d<0){//->마우스휠을 내렸다는뜻
        let nxt =$(this).next().offset().top;
        $("html,body").stop().animate({"scrollTop":nxt})
        console.log(nxt)
    }else if(d>0){
        let prv=$(this).prev().offset().top;
        $("html,body").stop().animate({"scrollTop":prv})
    }
    })


/*********************************************************** *

    화면의 너비에 따라 글자가 왼쪽,오른쪽으로 움직임*/
    // const ani1 = gsap.timeline();
// ani1.from(".main1 h3", { y: innerWidth * 1 })
//     .from(".main1 h2", { y: innerWidth * 1 })
//    ani1.from(".main1 ul", { y: innerWidth * 1 });

// ScrollTrigger.create({
//     animation: ani1,
//     trigger: ".main1",
//     pin: true,
//     anticipatePin: 1,
//     scrub: true,
//     start: "top top",
//     end: "+=3000",
//     markers: true
// });

// //2-1-스크롤이 내려오면 스케일이 커져서 화면에 꽉차기->투명도 
// const ani2_1=gsap.timeline();
// ani2_1.to(".main2>img",{scale:1.25,autoAlpha:0})
// ScrollTrigger.create({
//     animation:ani2_1,
//     trigger:".main2",
//     pin:true,
//     anticipatePin:1,
//     scrub:true,
//     start:"top top",
//     end:"+=2000",
//     markers:true
// });
// const ani2_1 = gsap.timeline({
//     defaults: { ease: "power1.inOut" } // 애니메이션의 기본 이징 설정
// });

// ani2_1.to(".main2 > img", { scale: 1.8, autoAlpha: 1 }); // 이미지를 화면을 따라 스케일이 커지고 투명도를 조절하여 화면을 꽉 채우도록 설정

// ScrollTrigger.create({
//     animation: ani2_1,
//     trigger: ".main2",
//     start: "top top", // 시작 지점을 조정하여 애니메이션을 시작할 때 이미지가 화면 상단에서 나타나도록 함
//     end: "+=1000", // 끝 지점을 조정하여 애니메이션의 지속 시간을 설정함
//     scrub: true,
//     markers: true
// });

// const ani2 = gsap.timeline();
// ani2.from(".main2 h3", { y: innerWidth * 1 })
//     .from(".main2 h2", { y: innerWidth * 1 })
//     .from(".main2 ul", { y: innerWidth * 1 });

// ScrollTrigger.create({
//     animation: ani2,
//     trigger: ".main2",
//     pin: true,
//     anticipatePin: 1,
//     scrub: true,
//     start: "top top",
//     end: "+=2500",
//     markers: true
// });

// const ani3 = gsap.timeline();
// ani3.from(".main3 h3", { y: innerWidth * 1,opacity:0.3 })
//     .from(".main3 h2", { y: innerWidth * 1,pacity:0.3 })
//     .from(".main3 ul", { y: innerWidth * 1,pacity:0.3 });

// ScrollTrigger.create({
//     animation: ani3,
//     trigger: ".main3",
//     pin: true,
//     anticipatePin: 1,
//     scrub: 1,
//     start: "top 100",
//     end: "+=2500",
//     markers: true
// });

// const ani4 = gsap.timeline();
// ani4.from(".main4>h3,main4>h2", { y: innerWidth * 1 })
//     // .from(".main4 h2", { y: innerWidth * 1 })
//     .from(".main4 .container", { y: innerWidth * 1 });

// ScrollTrigger.create({
//     animation: ani4,
//     trigger: ".main4",
//     pin: true,
//     anticipatePin: 1,
//     scrub: true,
//     start: "top top",
//     end: "bottom bottom",
//     markers: true
// });
   

//////////gsap////////////////////////////////////////////////
// const panell=document.querySelector(".item")
// ScrollTrigger.create({
//     trigger:panell,
//     start:"top top",
//     pin:true,
//     pinSpacing:false,
//     markers:true
// })


/***************************************************** */
let wt = $(window).width();
if(wt >=100 && wt<836){
    mo()
}else{
    pc()
}
function mo(){
    //메뉴버튼을 클릭하면 aside가 왼쪽에서 오른쪽으로 나와야함
    $(".gnb").on("click",function(){
       $("nav").animate({"left":"0"})
   })
   //close버튼을 클릭하면 aside가 오른쪽에서 왼쪽으로 사라져야함
   $(".close").on("click",function(){
     $("nav").css("left", "-100%")
   })
   //펼쳐지는것
   $(".util>li>a").on("click",function(){  

 $(this).siblings(".sub").stop().slideToggle();
       $(this).parent().siblings().find(".sub").slideUp();
       
    //    $(this).siblings(".sub").stop().toggleClass("on");
    //    $(this).parent().siblings().find(".sub").removeClass("on");
       
   })
 



   

}//mo

function pc(){
    $(".util>li").on("mouseover",function(){
        $(".util>li").children(".sub").stop().show()
        $(".bg").stop().show()
    })

    $(".util>li").on("mouseout",function(){
        $(".util>li").children(".sub").stop().hide()
        $(".bg").stop().hide()
    })

  
    

 
   

}//pc






})//document





