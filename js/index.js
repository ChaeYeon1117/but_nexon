$(function(){
	maintab();
	tabSlider();

	//tab
	function maintab(){
		$(".js-tab-content").hide();
		$(".js-tab-content:first").show();
		$("#js-tab a").click(function(event) {
			event.preventDefault(); //주소에 #숨김
			$(this).parent().addClass("current");
			$(this).parent().siblings().removeClass("current");
			var tab = $(this).attr("href");
			$(".js-tab-content").not(tab).css("display", "none");
			$(tab).fadeIn();
		});
	};
	
	//tab in slider
	function tabSlider(){
		var sliderObj = { 
		  controls:false,
		  infiniteLoop:true,
		  pager: false,
		  autoControls: false, 
		  pause: 3000,
		  auto: true,
		  touchEnabled:false
		}
		var bxSlider1 = $('#js-tabSlider1').bxSlider(sliderObj);
		var bxSlider2 = $('#js-tabSlider2').bxSlider(sliderObj);
		var bxSlider3 = $('#js-tabSlider3').bxSlider(sliderObj);
		var bxSlider4 = $('#js-tabSlider4').bxSlider(sliderObj);
		var bxSlider5 = $('#js-tabSlider5').bxSlider(sliderObj);
		var bxSlider6 = $('#js-tabSlider6').bxSlider(sliderObj);
		var bxSlider7 = $('#js-tabSlider7').bxSlider(sliderObj);
		var bxSlider8 = $('#js-tabSlider8').bxSlider(sliderObj);
		$(".js-slider-tab1").click(function(){
			bxSlider1.redrawSlider();
			bxSlider2.stop();
			bxSlider3.stop();
			bxSlider4.stop();
		});
		$(".js-slider-tab2").click(function(){
			bxSlider2.reloadSlider();
			bxSlider1.stop();
			bxSlider3.stop();
			bxSlider4.stop();
		});
		$(".js-slider-tab3").click(function(){
			bxSlider3.reloadSlider();
			bxSlider1.stop();
			bxSlider2.stop();
			bxSlider4.stop();
		});
		$(".js-slider-tab4").click(function(){ 
			bxSlider4.reloadSlider();
			bxSlider1.stop();
			bxSlider2.stop();
			bxSlider3.stop();
		});
		$(".js-slider-tab5").click(function(){
			bxSlider1.redrawSlider();
			bxSlider2.stop();
			bxSlider3.stop();
			bxSlider4.stop();
		});
		$(".js-slider-tab6").click(function(){
			bxSlider2.reloadSlider();
			bxSlider1.stop();
			bxSlider3.stop();
			bxSlider4.stop();
		});
		$(".js-slider-tab7").click(function(){
			bxSlider3.reloadSlider();
			bxSlider1.stop();
			bxSlider2.stop();
			bxSlider4.stop();
		});
		$(".js-slider-tab8").click(function(){ 
			bxSlider4.reloadSlider();
			bxSlider1.stop();
			bxSlider2.stop();
			bxSlider3.stop();
		});
	}

});

