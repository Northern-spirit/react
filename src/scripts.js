window.addEventListener('scroll', function(){
    if(window.scrollY > 0) {
        document.querySelector("#top_menu").classList.add("top_menu")
        document.querySelector("#top_menu_plug").classList.add("top_menu_plug")
    } else {
        document.querySelector("#top_menu").classList.remove("top_menu")
        document.querySelector("#top_menu_plug").classList.remove("top_menu_plug")
    }
    if(window.scrollY > 212) {
        document.querySelector("#EmotionTabs").classList.add("EmotionTabs_fix")
        document.querySelector("#EmotionsTabs_plug").classList.add("EmotionTabs_fix_plug")
    } else {
        document.querySelector("#EmotionTabs").classList.remove("EmotionTabs_fix")
        document.querySelector("#EmotionsTabs_plug").classList.remove("EmotionTabs_fix_plug")
    }
})

document.addEventListener('DOMContentLoaded', function(){
    if(window.outerWidth < 720) {
        document.querySelector(".MainTopMenuItems").classList.add("hide")
        document.querySelector(".MainTopMenuRight").classList.add("hide")
        document.querySelector(".MainTopMenuRight_mobile").classList.remove("hide")    
    } else {
        document.querySelector(".MainTopMenuItems").classList.remove("hide")
        document.querySelector(".MainTopMenuRight").classList.remove("hide")
        document.querySelector(".MainTopMenuRight_mobile").classList.add("hide")
        document.querySelector(".Mobile_menu").classList.add("hide")
    }
    
})

window.addEventListener('resize', function(){
    if(window.outerWidth < 720) {
        document.querySelector(".MainTopMenuItems").classList.add("hide")
        document.querySelector(".MainTopMenuRight").classList.add("hide")
        document.querySelector(".MainTopMenuRight_mobile").classList.remove("hide")
    } else {
        document.querySelector(".MainTopMenuItems").classList.remove("hide")
        document.querySelector(".MainTopMenuRight").classList.remove("hide")
        document.querySelector(".MainTopMenuRight_mobile").classList.add("hide")
        document.querySelector(".Mobile_menu").classList.add("hide")
    }
})
