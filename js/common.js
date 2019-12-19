$(document).ready(function() {

  $(".owl-1").owlCarousel({
    items: 3,
    center: true,
    loop: true,
    nav: true,
    dots: false,
    smartSpeed : 1000,
    navText: ["", ""]
  });

	$('.owl-2').each(function() {
		var owl2 = $(this);
		owl2.owlCarousel({
		  items: 1,
		  margin: 20,
		  nav: true,
		  autoHeight: true,
		  smartSpeed : 1000,
		  navText: ["", ""],
		  onInitialized: function(e) {
		    var index = e.item.index + 1,
		        count = e.item.count;
		    owl2.find(".owl-prev").after("<span class='info'><span class='index'>" + index + "</span> / <span class='count'>" + count + "</span></span>");
		  },
		});
		owl2.on('changed.owl.carousel', function(e) {
		  owl2.find(".info").find(".index").text(e.item.index + 1);
		});
	});

	$(".owl-3").owlCarousel({
    items: 1,
    dots: false,
    smartSpeed : 1000,
  });

	$(".play-button").on("click", function(){
		$(this).parent().fadeOut();
	});

	$("#step-2").on("click", function(){
		$(".progress-wrapper").addClass("step-2-active");
	});

	$("#step-2").on("click", function(){
		$(".progress-wrapper-2").addClass("step-2-active");
	});
	$("#step-3").on("click", function(){
		$(".progress-wrapper-2").addClass("step-3-active");
	});
	$("#step-4").on("click", function(){
		$(".progress-wrapper-2").addClass("step-4-active");
	});

	$(".img-password").on("click", function(){
		$(this).siblings("input").attr("type", "text");
	});

	$('#myTab .nav-link').on('shown.bs.tab', function (e) {
		var href = $(e.target).attr("data-href");
		$('[data-href="' + href + '"]').trigger("click");
	});

});