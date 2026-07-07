/* Shared behavior: header state, mobile nav, scroll reveals.
   Safety pattern: everything ships visible. This script adds .pre (hidden)
   only to elements still below the fold, then IntersectionObserver removes it.
   No JS, no IO, or reduced motion: nothing is ever hidden. */
(function(){
  "use strict";
  document.documentElement.classList.add("js");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Header border on scroll */
  var header = document.getElementById("siteHeader");
  if(header){
    var ticking = false;
    var onScroll = function(){
      header.classList.toggle("scrolled", window.scrollY > 4);
      ticking = false;
    };
    window.addEventListener("scroll", function(){
      if(!ticking){ ticking = true; requestAnimationFrame(onScroll); }
    }, {passive:true});
    onScroll();
  }

  /* Mobile nav */
  var menuBtn = document.getElementById("menuBtn");
  var siteNav = document.getElementById("siteNav");
  if(menuBtn && siteNav){
    menuBtn.addEventListener("click", function(){
      var open = siteNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    siteNav.addEventListener("click", function(e){
      if(e.target.closest("a")){
        siteNav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded","false");
        menuBtn.setAttribute("aria-label","Open menu");
      }
    });
  }

  /* Scroll reveals (enhance only) */
  var reveals = document.querySelectorAll(".reveal");
  if(!reduceMotion && "IntersectionObserver" in window){
    var vh = window.innerHeight;
    reveals.forEach(function(el){
      var r = el.getBoundingClientRect();
      if(r.top > vh * 0.92){ el.classList.add("pre"); }
    });
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.remove("pre"); io.unobserve(en.target); }
      });
    },{threshold:.1, rootMargin:"0px 0px -6% 0px"});
    reveals.forEach(function(el){ io.observe(el); });
  }
})();
