$(document).ready(function(){
	$(".callbutton").on("mousedown", function(){
		var that = $(this);
		that.addClass("tap");
		$(window).on("mouseup", function(){
			setTimeout(function(){
				that.removeClass("tap");
			}, 100);
			that.off("mouseup");
			$(window).off("mouseup");
		})
		that.on("mouseup", function(){
			setTimeout(function(){
				that.removeClass("tap");
			}, 100);
			location.href = "tel://" + that.attr("num");
			that.off("mouseup");
			$(window).off("mouseup");
		})
	})

	$("#homemenu ul li").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
		}else{
			$(this).addClass("active");
			$("#is_loading").prop("checked", true);
			setTimeout(function(){
				$("#homemenu ul li").removeClass("active");
			}, 500)
			setTimeout(function(){
				$("#is_loading").prop("checked", false);
			}, 2000)
		}
	})
})