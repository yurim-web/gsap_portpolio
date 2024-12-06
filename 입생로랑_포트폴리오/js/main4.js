gsap.registerPlugin(ScrollTrigger);

const timeline4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_4",
    markers: true,
    scrub: true,
    start: "top top",
    end: "900% bottom",
    pin: true,
  },
});

timeline4.to(".page_4_img", {
  y: 0,
  duration: 60,
});
