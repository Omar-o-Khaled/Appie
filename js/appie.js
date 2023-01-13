const header=document.querySelector(".header");
const nav_menu_icon=document.querySelector(".nav_menu_icon");


nav_menu_icon.addEventListener("click",function(){
    header.classList.toggle("nave_open");
})




const section_two=document.querySelector(".how_work");

const parent_section=document.querySelector(".parent_section");

const obs=new IntersectionObserver(function(entries){
    const ent = entries[0];
    if(ent.isIntersecting === false){
        document.body.classList.add("sticky");
        document.querySelector(".move_up").style.position="fixed";

    }else{
        document.body.classList.remove("sticky");
        document.querySelector(".move_up").style.position="absolute";
    }

},{
    root: null,
    threshold: 0,
    rootMargin:'-80px',
})

obs.observe(parent_section);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
