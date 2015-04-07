
var Key_board = function(){

	var kana = {
		"あ": {
			pattern: [
				"あ", "ぁ"
			]
		},
		"い": {
			pattern: [
				"い","ぃ"
			]
		},
		"う": {
			pattern: [
				"う","ぅ"
			]
		},
		"え": {
			pattern: [
				"え","ぇ"
			]
		},
		"お": {
			pattern: [
				"お","ぉ"
			]
		},
		"か": {
			pattern: [
				"か","が"
			]
		},
		"き": {
			pattern: [
				"き","ぎ"
			]
		},
		"く": {
			pattern: [
				"く","ぐ"
			]
		},
		"け": {
			pattern: [
				"け","げ"
			]
		},
		"こ": {
			pattern: [
				"こ","ご"
			]
		},
		"さ": {
			pattern: [
				"さ","ざ"
			]
		},
		"し": {
			pattern: [
				"し","じ"
			]
		},
		"す": {
			pattern: [
				"す","ず"
			]
		},
		"せ": {
			pattern: [
				"せ","ぜ"
			]
		},
		"そ": {
			pattern: [
				"そ","ぞ"
			]
		},
		"た": {
			pattern: [
				"た","だ"
			]
		},
		"ち": {
			pattern: [
				"ち","ぢ"
			]
		},
		"つ": {
			pattern: [
				"つ","っ","づ"
			]
		},
		"て": {
			pattern: [
				"て","で"
			]
		},
		"と": {
			pattern: [
				"と","ど"
			]
		},
		"な": {
			pattern: [
				"な"
			]
		},
		"に": {
			pattern: [
				"に"
			]
		},
		"ぬ": {
			pattern: [
				"ぬ"
			]
		},
		"ね": {
			pattern: [
				"ね"
			]
		},
		"の": {
			pattern: [
				"の"
			]
		},
		"は": {
			pattern: [
				"は","ば","ぱ"
			]
		},
		"ひ": {
			pattern: [
				"ひ","び","ぴ"
			]
		},
		"ふ": {
			pattern: [
				"ふ","ぶ","ぷ"
			]
		},
		"へ": {
			pattern: [
				"へ","べ","ぺ"
			]
		},
		"ほ": {
			pattern: [
				"ほ","ぼ","ぽ"
			]
		},
		"ま": {
			pattern: [
				"ま"
			]
		},
		"み": {
			pattern: [
				"み"
			]
		},
		"む": {
			pattern: [
				"む"
			]
		},
		"め": {
			pattern: [
				"め"
			]
		},
		"も": {
			pattern: [
				"も"
			]
		},
		"や": {
			pattern: [
				"や","ゃ"
			]
		},
		"br": {
			pattern: [
				""
			]
		},
		"ゆ": {
			pattern: [
				"ゆ","ゅ"
			]
		},
		"br2": {
			pattern: [
				""
			]
		},
		"よ": {
			pattern: [
				"よ","ょ"
			]
		},
		"ら": {
			pattern: [
				"ら"
			]
		},
		"り": {
			pattern: [
				"り"
			]
		},
		"る": {
			pattern: [
				"る"
			]
		},
		"れ": {
			pattern: [
				"れ"
			]
		},
		"ろ": {
			pattern: [
				"ろ"
			]
		},
		"わ": {
			pattern: [
				"わ"
			]
		},
		"br3": {
			pattern: [
				""
			]
		},
		"を": {
			pattern: [
				"を"
			]
		},
		"br4": {
			pattern: [
				""
			]
		},
		"ん": {
			pattern: [
				"ん"
			]
		}
	}

	var alfa = {
		"n1": {
			pattern: [
				"1"
			]
		},
		"n2": {
			pattern: [
				"2"
			]
		},
		"n3": {
			pattern: [
				"3"
			]
		},
		"n4": {
			pattern: [
				"4"
			]
		},
		"n5": {
			pattern: [
				"5"
			]
		},
		"n6": {
			pattern: [
				"6"
			]
		},
		"n7": {
			pattern: [
				"7"
			]
		},
		"n8": {
			pattern: [
				"8"
			]
		},
		"n9": {
			pattern: [
				"9"
			]
		},
		"n0": {
			pattern: [
				"0"
			]
		},
		"a": {
			pattern: [
				"a"
			]
		},
		"b": {
			pattern: [
				"b"
			]
		},
		"c": {
			pattern: [
				"c"
			]
		},
		"d": {
			pattern: [
				"d"
			]
		},
		"e": {
			pattern: [
				"e"
			]
		},
		"f": {
			pattern: [
				"f"
			]
		},
		"g": {
			pattern: [
				"g"
			]
		},
		"h": {
			pattern: [
				"h"
			]
		},
		"i": {
			pattern: [
				"i"
			]
		},
		"j": {
			pattern: [
				"j"
			]
		},
		"k": {
			pattern: [
				"k"
			]
		},
		"l": {
			pattern: [
				"l"
			]
		},
		"m": {
			pattern: [
				"m"
			]
		},
		"n": {
			pattern: [
				"n"
			]
		},
		"o": {
			pattern: [
				"o"
			]
		},
		"p": {
			pattern: [
				"p"
			]
		},
		"q": {
			pattern: [
				"q"
			]
		},
		"r": {
			pattern: [
				"r"
			]
		},
		"s": {
			pattern: [
				"s"
			]
		},
		"t": {
			pattern: [
				"t"
			]
		},
		"u": {
			pattern: [
				"u"
			]
		},
		"v": {
			pattern: [
				"v"
			]
		},
		"w": {
			pattern: [
				"w"
			]
		},
		"x": {
			pattern: [
				"x"
			]
		},
		"y": {
			pattern: [
				"y"
			]
		},
		"z": {
			pattern: [
				"z"
			]
		}
	}

	var board;
	var kana_wrap;
	var alfa_wrap;
	var down = "mousedown";
	var up = "mouseup";
	var move = "mousemove";
	var key;
	var push_key = "";
	var inputed;
	var inputed_length = 20;
	var now_length = 0;
	var del_key;
	var to_left_key;
	var to_right_key;
	var pattern_key;
	var change_key;
	var mode = "kana";
	var is_open = false;
	var animating = false;
	var done_key;
	var button;
	var done_callback = function(){ return; };

	function key_board(){
		board = $(".key_board");
		kana_wrap = $(".kana_wrap");
		alfa_wrap = $(".alfa_wrap");
		inputed = $(".inputed");
		inputed.html('<div class="in in_end active"></div>');
		del_key = $(".del");
		to_left_key = $(".to_left");
		to_right_key = $(".to_right");
		pattern_key = $(".pattern_change");
		change_key = $(".change");
		done_key = $(".done");
		init();
	}

	function init(){
		var kana_str = "<div class='gyou'>";
		var c = 0;
		for(var i in kana){
			if((c%5) == 0){
				kana_str += "</div><div class='gyou'>";
			}
			var emp = "";
			if(kana[i].pattern[0] == ""){
				emp = " emp";
			}
			kana_str += '<div class="key_button key' + emp + '" alt="' + kana[i].pattern[0] + '">' + kana[i].pattern[0] + '</div>';
			c++;
		}
		kana_str += '</div>';
		kana_wrap.html(kana_str);

		var alfa_str = "";
		for(var i in alfa){
			alfa_str += '<div class="key_button key alfa" alt="' + alfa[i].pattern[0] + '">' + alfa[i].pattern[0] + '</div>';
		}
		alfa_wrap.html(alfa_str);

		key = $(".key");


		button = $(".key_button,.funckey");

		key.bind("tap", function(){
			that = $(this);
			push_key = that.attr("alt");

			if(inputed_length > now_length && push_key != ""){
				$(".in.active").before("<div class='in' alt='" + push_key + "'>"+ push_key +"</div>");
				now_length++;
				if(inputed_length == now_length){
					var target = $(".in.active");
					target.removeClass("active");
					target.prev().addClass("active");
				}
			}
			console.log("d");
		})

		/*
		del_key.bind("tap", function(){
			that = $(this);
			if(now_length == 0){
				return;
			}
			var target = $(".in.active");
			if(target.html() == ""){
				target.prev().remove();
			}else{
				if(target.prev().html() != null){
					target.prev().addClass("active");
				}else{
					target.next().addClass("active");
				}
				target.remove();
			}
			now_length--;
		})
*/
		del_key.on(down,function(){
			that = $(this);
			if(now_length == 0){
				return;
			}
			var is_s = false;
			var tim = setTimeout(function(){
				del_key.off("tap");
				var target = $(".in");
				for(var i = 0; i < now_length; i++){
					target.eq(i).remove();
				}
				is_s = true;
				now_length = 0;
			}, 1500);
			del_key.off(up)
			del_key.on(up,function(){
				if(!is_s){
					clearTimeout(tim);
					var target = $(".in.active");
					if(target.html() == ""){
						target.prev().remove();
					}else{
						if(target.prev().html() != null){
							target.prev().addClass("active");
						}else{
							target.next().addClass("active");
						}
						target.remove();
					}
					now_length--;
				}
			})
		})

		to_left_key.bind("tap", function(){
			that = $(this);
			var ia = $(".in.active");
			var iap = ia.prev();
			if(iap.html() == null){
				return;
			};
			ia.removeClass("active");
			iap.addClass("active");
		})

		to_right_key.bind("tap", function(){
			that = $(this);
			var ia = $(".in.active");
			var ian = ia.next();
			if(ian.html() == null){
				return;
			};
			if(inputed_length == now_length && ian.html() == ""){
				return;
			}

			ia.removeClass("active");
			ian.addClass("active");
		})

		pattern_key.bind("tap", function(){
			that = $(this);
			var ia = $(".in.active");
			var iap = ia.prev();
			if(ia.html() == "" && iap.html() == null){
				return;
			}
			var target = ia;
			if(ia.html() == ""){
				target = iap;
			}
			if(kana[target.attr("alt")] == undefined){
				return;
			}
			if(kana[target.attr("alt")].pattern.length == 1){
				return;
			}
			var f = true;

			var ind = kana[target.attr("alt")].pattern.indexOf(target.html());
			if(kana[target.attr("alt")].pattern.length == (ind + 1)){
				ind = 0;
			}else{
				ind++;
			}
			target.html(kana[target.attr("alt")].pattern[ind]);

		})

		change_key.bind("tap", function(){
			that = $(this);
			var new_mode = "kana";
			if(mode == "kana"){
				new_mode = "alfa";
			}

			$("." + mode + "_wrap").css("display", "none");
			$("." + new_mode + "_wrap").css("display", "block");
			if(new_mode == "alfa"){
				pattern_key.css("display", "none");
				change_key.html("あ");
			}else{
				pattern_key.css("display", "block");
				change_key.html("英");
			}
			mode = new_mode;

		})

		done_key.bind("tap", function(){
			var ins = $(".in");
			var str = "";
			ins.each(function(){
				str += $(this).html();
			})
			done_callback(str);
		})

		button.bind(down, function(){
			if($(this).hasClass("emp")){
				return false;
			}
			that = $(this);
			button.removeClass("push");
			that.addClass("push");
			$(window).bind(up, function(){
				setTimeout(function(){
					button.removeClass("push");
					$(window).unbind(up);
				}, 200);
			});
		})
	}

	this.get_is_open = function(){
		return is_open;
	}

	this.switch_open = function(){
		if(animating){
			return;
		}

		if(is_open){
			close();
		}else{
			open();
		}
	}

	this.set_done_callback = function(callback){
		done_callback = callback;
	}

	this.open = function(){
		if(animating){
			return;
		}
		animating = true;
		board.css("display", "block");
		setTimeout(function(){
			board.addClass("open");
		}, 10);
		setTimeout(function(){
			animating = false;
			is_open = true;
		}, 500);
	}
	var open = this.open;

	this.close = function(){
		if(animating){
			return;
		}
		animating = true;
		board.removeClass("open");
		setTimeout(function(){
			board.css("display", "none");
			animating = false;
			is_open = false;
			now_length = 0;
			inputed.html('<div class="in in_end active"></div>');
		}, 500);
	}
	var close = this.close;

	this.init = init;

	key_board();
}