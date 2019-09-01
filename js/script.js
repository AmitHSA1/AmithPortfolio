$(document).ready(function() {
    
    let line1 = $(".one"),
        line2 = $(".two"),
        line3 = $(".three"),
        hamburger = $("#hamburger"),
        sideNav = $(".sideNav"),
        present = $(".present"),
        titleSmall = $(".titleSmall"),
        title = $(".title"),
        work = $("#work"),
        myImg = $(".myImg"),
        design = $(".design");
    
    // presenting screen //
    
    let startPresentation = new TimelineMax({paused:true, reversed:true})
        startPresentation.to(present,1,{height:"0px",ease:Power4.easeInOut})
                         .from(titleSmall,1,{opacity:0,y:100,ease:Power4.easeInOut},titleSmall)
                         .from(title,1,{opacity:0,y:100,ease:Power4.easeInOut,delay:0.2},titleSmall)
                         .from(work,1,{opacity:0,y:100,ease:Power4.easeInOut,delay:0.4},titleSmall)
                         .to(myImg,1,{width:"100%",ease:Power4.easeInOut,delay:0.6},titleSmall)
                        
    setTimeout(() => {
        startPresentation.play()
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
    }, 1000);
    
    // hamburger animations //
    let hamChange = new TimelineMax({paused:true, reversed:true});
        hamChange.to(line1,1,{marginLeft: "10px",ease:Power3.easeOut})
                 .to(line2,0.5,{margin: "auto",width:"50%",ease:Power3.easeOut},line1)
                 .to(line3,0.5,{marginLeft: "0px",ease:Power3.easeOut},line1).timeScale(2)

    HamHoverCross = () => {
        hamChangeCross.reversed() ? hamChangeCross.play() : hamChangeCross.reverse();
    }
    HamHover = () => {
		hamChange.reversed() ? hamChange.play() : hamChange.reverse();
    }

    hamburger.hover(function() {
        HamHover();
    })

    let sideNavAni = new TimelineMax({paused:true, reversed:true});
        sideNavAni.to(sideNav,1,{width: "100%",ease:Power4.easeInOut}) 
    
    sideNavVisi = () => {
        sideNavAni.reversed() ? sideNavAni.play() : sideNavAni.reverse();
    }

    hamburger.click(function() {
        sideNavVisi();
    })
    


})