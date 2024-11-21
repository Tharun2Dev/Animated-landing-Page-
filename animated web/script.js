
let cursor=document.querySelector(".cursor");
let cursorblur=document.querySelector(".cursor-blur");
let navh4=document.querySelectorAll(".nav h4");

navh4.forEach(function(elem){
    elem.addEventListener("mousemove",function(){
        cursor.style.scale=3;
        cursor.style.border="1px solid white";
        cursor.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale=1;
        cursor.style.border="0px solid  #95c11e";
        cursor.style.backgroundColor="#95c11e"
    })

})

document.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x+"px";
    cursor.style.top=dets.y+"px";
    cursorblur.style.left=dets.x - 150+"px";
    cursorblur.style.top=dets.y - 150+"px";
})


gsap.to(".nav",{
    backgroundColor:"black",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1

    }
})
gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from(".about-us img,about-info",{
    y:50,
    opacity:0,
    duration:4,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from(".card",{
    scale:0.8,
    // transform:rotate3D(-1,1,0,20),
    opacity:0,
    duration:4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from(".page3",{
    scale:0.8,
    opacity:0,
    duration:4,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        scrub:1
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from(".page4 h1",{
    y: 70,
    scrollTrigger: {
      trigger: ".page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 85%",
      scrub: 4,
    },
    
})