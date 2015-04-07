$(document).ready(function(){
	var pkuzu = [0];
	var $pkuzu = $(".pkuzu ul");
	var $list_title = $("#list_title");
	var $plist = $(".plist");
	var $search = $("#search");
	var $pmain = $(".pmain");
	var pmain_animation_speed = 200;
	var $folders;
	var $kuzus;

	var search_box = -1;


	function denwacho_reset(){
		var now = folder[pkuzu[pkuzu.length - 1]];
		var pkuzu_str = "";
		var plist_str = "";
		$pmain.addClass("deactive");
		setTimeout(function(){

			$plist.html("");
			$pkuzu.html("");
			$list_title.html("");

			pkuzu_str += "<li class='mark'></li>";
			for(var i = 0; i < pkuzu.length; i++){
				if(i != 0){
					pkuzu_str += "<li class='arrow'></li>";
				}
				pkuzu_str += "<li class='kuzus' folder='" + pkuzu[i] + "'>" + folder[pkuzu[i]].name + "</li>";
			}
			$pkuzu.append(pkuzu_str);
			for(var i = 0; i < now.folders.length; i++){
				plist_str += "<li class='folders list' folder='" + now.folders[i] + "'>" +
								"<div>" + folder[now.folders[i]].name + "</div>" +
								"<div>" + folder[now.folders[i]].name_en + "</div>" +
				"</li>";
			}
			if(now.rooms.length != 0 && now.folders.length != 0){
				plist_str += "<li class='line'></li>";
			}else if(now.folders.length != 0 && now.members.length != 0){
				plist_str += "<li class='line'></li>";
			}
			for(var i = 0; i < now.rooms.length; i++){
				plist_str += "<li class='members list rooms'>" +
								"<div>" + room[now.rooms[i]].name + "</div>" +
								"<div>" + room[now.rooms[i]].name_en + "</div>" +
								"<div>" + room[now.rooms[i]].number + "</div>" +
				"</li>";
			}
			if(now.rooms.length != 0 && now.members.length != 0){
				plist_str += "<li class='line'></li>";
			}
			for(var i = 0; i < now.members.length; i++){
				plist_str += "<li class='members list'>" +
								"<div>" + member[now.members[i]].name + "</div>" +
								"<div>" + member[now.members[i]].name_en + "</div>" +
								"<div>" + member[now.members[i]].number + "</div>" +
				"</li>";
			}
			if(plist_str == ""){
				plist_str = "<li class='non'>該当データがありません</li>";
			}
			$plist.append(plist_str);
			$list_title.html(now.name);
			$folders = $(".folders.list");

			$folders.off("tap");
			$folders.on("tap", function(){
				var $this = $(this);
				pkuzu.push($this.attr("folder"));
				denwacho_reset();
			})

			$kuzus = $(".kuzus");
			$kuzus.off("tap");
			$kuzus.on("tap", function(){
				var ind = $kuzus.index(this);
				var $this = $(this);

				pkuzu.splice(ind, pkuzu.length);
				pkuzu.push($this.attr("folder"));
				denwacho_reset();
			})

			if(pkuzu.length > 1){
				$(".pback").addClass("active");
			}else{
				$(".pback").removeClass("active");
			}
			setTimeout(function(){
				$pmain.removeClass("deactive");
			}, 10)
		}, pmain_animation_speed);
	}
	$(".pback").on("tap",function(){
		pkuzu.splice(pkuzu.length - 1, 1);
		denwacho_reset();
	})

	$search.on("change", function(){
		search($search.val());
		console.log("s");
	})
	function search(target){

		if(search_box == -1){
			search_box = folder.length;
		}
		folder[search_box] = {//0
			name: "検索:" + target,
			name_en: "",
			folders: [],
			members: [],
			rooms: []
		};
		var ma = [];
		for(var i = 0; i < member.length; i++){
			var f = false;
			var m = member[i];
			if(is_match(target, m.name)){
				f = true;
			}
			if(!f && is_match(target, m.name_en)){
				f = true;
			}
			if(!f && is_match(target, m.kana)){
				f = true;
			}
			if(!f && is_match(target, m.number)){
				f = true;
			}
			if(f){
				ma.push(i);
			}
		}
		var fa = [];
		for(var i = 0; i < room.length; i++){
			var f = false;
			var m = room[i];
			if(is_match(target, m.name)){
				f = true;
			}
			if(!f && is_match(target, m.name_en)){
				f = true;
			}
			if(!f && is_match(target, m.kana)){
				f = true;
			}
			if(!f && is_match(target, m.number)){
				f = true;
			}
			if(f){
				fa.push(i);
			}
		}
		folder[search_box].rooms = fa;
		folder[search_box].members = ma;

		pkuzu.splice(1, pkuzu.length - 1);
			pkuzu.push(search_box);
		denwacho_reset();
	}
	function is_match(needle, heystack){
		var preneedle = "___";
		needle = preneedle + needle;
		re = new RegExp(needle, "i");
		heystack = preneedle + heystack;
		var r = heystack.match(re);
		if(!r){
			return false;
		}else{
			return true;
		}
	}

	denwacho_reset();

	var k = new Key_board();
	var search_key_board = $("#search_key_board");
	$("#sw").on("tap", function(){
		search_key_board.addClass("active");
		k.switch_open();
	})
	k.set_done_callback(function(str){
		console.log("done");
		search_key_board.removeClass("active");
		k.switch_open();
		search(str);
		$("#sw").html(str);
	});
	$(".search_closer").click(function(){
		search_key_board.removeClass("active");
		k.switch_open();
	})
})