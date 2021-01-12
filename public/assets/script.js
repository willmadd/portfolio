console.log("1234");

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });


  gsap.timeline({
    scrollTrigger: {
      trigger: "#work",
      start: "center center",
      end: "bottom top",
      scrub: true,
      pin: true
    }
  })
    .from("#casio",  { y: innerHeight * 1.5 })
    .from("#osprey", { y: innerHeight * 1.5 })
    .from("#regis", { y: innerHeight * 1.5 })
    .from("#sc", { y: innerHeight * 1.5 })
    .from("#maharishi", { y: innerHeight * 1.5 })
    .from("#viewgpx", { y: innerHeight * 1.5 })
    .from("#pnr", { y: innerHeight * 1.5 })
    .from("#bop", { y: innerHeight * 1.5 });
});

