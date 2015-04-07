$(document).ready(function(){
	var keys = $(".keys");
	var delkey = $(".delkey");
	var target_num = $("#target_num");

	var timer = "";
	keys.on("mousedown", function(){

		var that = $(this);
		var type = that.attr("type");
		var v = that.attr("val");
		var now = target_num.html();

		that.addClass("tap");
		if(type == "num" && now.length < 16){
			that.on("mouseup", function(){
				now += v;
				target_num.html(now);
				setTimeout(function(){
					that.removeClass("tap");
				}, 100);
				that.off("mouseup");
				$(window).off("mouseup");
			})
		}else if(type == "del"){
			timer = setTimeout(function(){
				target_num.html("");
				timer = "";
				$(window).off("mouseup");
				that.removeClass("tap");
			}, 1000);
			$(window).on("mouseup", function(){
				if(timer != ""){
					now = now.slice(0, now.length - 1);
					target_num.html(now);
					clearTimeout(timer);
					timer = "";
					setTimeout(function(){
						that.removeClass("tap");
					}, 100);
					$(window).off("mouseup");
				}
			})
			return;
		}else if(type == "call"){
			that.on("mouseup", function(){
				setTimeout(function(){
					that.removeClass("tap");
				}, 100);
				that.off("mouseup");
				$(window).off("mouseup");
				console.log("tel://" + target_num.html());
				location.href = "tel://" + target_num.html();
			})
		}

		$(window).on("mouseup", function(){
			setTimeout(function(){
				that.removeClass("tap");
			}, 100);
			that.off("mouseup");
			$(window).off("mouseup");
		})
	})
})