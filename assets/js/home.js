/**
 * File home.js.
 *
 */
document.addEventListener("DOMContentLoaded", function () {
	if (window.innerWidth >= 1024) {
		var controller = new ScrollMagic.Controller();

		var horizontalSlide = new TimelineMax()
			.to(".projects .columns", 1, { x: "-10%", ease: Power1.easeInOut })
			.to(".projects .columns", 1, { x: "-20%", ease: Power1.easeInOut })
			.to(".projects .columns", 1, { x: "-30%", ease: Power1.easeInOut })
			.to(".projects .columns", 1, { x: "-40%", ease: Power1.easeInOut })
			.to(".projects .columns", 1, { x: "-50%", ease: Power1.easeInOut })
			.to(".projects .columns", 1, { x: "-60%", ease: Power1.easeInOut })
			.to(".projects .columns", 1, { x: "-67.5%", ease: Power1.easeInOut });
		new ScrollMagic.Scene({
			triggerElement: ".projects",
			triggerHook: "onLeave",
			duration: "500%",
		})
			.setPin(".projects")
			.setTween(horizontalSlide)
			// .addIndicators()
			.addTo(controller);
	}
	else {
		TweenMax.killAll();
	}
});
