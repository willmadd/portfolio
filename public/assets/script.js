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

  const changeSection = (scrollclass) => {
    console.log('section change')
    console.log(scrollclass);
    $('#site-wrapper').removeClass().addClass(`${scrollclass} site-wrapper`);
  }

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

    gsap.timeline({
        scrollTrigger: {
          trigger: "#skills",
          start: "center center",
          end: "bottom top",
          scrub: true,
          pin: true
        }
      })
        .from("#react",  { 
            y: '-240px',
            x: '240px',
            opacity:0
        })
        

    const contentSections = document.querySelectorAll("[data-scrollclass]");
    contentSections.forEach((contentSection, i) => {

      const prevClass = i === 0 ? "about__lead" : contentSections[i - 1].dataset.scrollclass

      gsap.timeline({
        scrollTrigger: {
          trigger: contentSection,
          start: "top center",
          end: "bottom top",
          scrub: true,
          onEnter: () => changeSection(contentSection.dataset.scrollclass),
          onLeaveBack: () => changeSection(prevClass),
        }
      });
    });
});
