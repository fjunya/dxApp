$(document).ready(function(){
	var fkuzu = [0];
	var $fkuzu = $(".fkuzu ul");
	var $list_title = $("#flist_title");
	var $flist = $(".flist");
	var $pmain = $(".pmain");
	var pmain_animation_speed = 200;

	var $folders;
	var $fkuzus;

	function denwacho_reset(){
		var now = fav[fkuzu[fkuzu.length - 1]];
		var fkuzu_str = "";
		var flist_str = "";
		$pmain.addClass("deactive");
		setTimeout(function(){

			$flist.html("");
			$fkuzu.html("");
			$list_title.html("");

			fkuzu_str += "<li class='mark'></li>";
			for(var i = 0; i < fkuzu.length; i++){
				if(i != 0){
					fkuzu_str += "<li class='arrow'></li>";
				}
				fkuzu_str += "<li class='fkuzus' folder='" + fkuzu[i] + "'>" + fav[fkuzu[i]].name + "</li>";
			}
			$fkuzu.append(fkuzu_str);
			for(var i = 0; i < now.folders.length; i++){
				flist_str += "<li class='folders fav' folder='" + now.folders[i] + "'>" +
								"<div>" + fav[now.folders[i]].name + "</div>" +
								"<div>" + fav[now.folders[i]].name_en + "</div>" +
				"</li>";
			}
			if(now.rooms.length != 0 && now.folders.length != 0){
				flist_str += "<li class='line'></li>";
			}else if(now.folders.length != 0 && now.members.length != 0){
				flist_str += "<li class='line'></li>";
			}
			for(var i = 0; i < now.rooms.length; i++){
				flist_str += "<li class='members fav rooms'>" +
								"<div>" + room[now.rooms[i]].name + "</div>" +
								"<div>" + room[now.rooms[i]].name_en + "</div>" +
								"<div>" + room[now.rooms[i]].number + "</div>" +
				"</li>";
			}
			if(now.rooms.length != 0 && now.members.length != 0){
				flist_str += "<li class='line'></li>";
			}
			for(var i = 0; i < now.members.length; i++){
				flist_str += "<li class='members fav'>" +
								"<div>" + member[now.members[i]].name + "</div>" +
								"<div>" + member[now.members[i]].name_en + "</div>" +
								"<div>" + member[now.members[i]].number + "</div>" +
				"</li>";
			}
			$flist.append(flist_str);
			$list_title.html(now.name);
			$folders = $(".folders.fav");

			$folders.off("tap");
			$folders.on("tap", function(){
				var $this = $(this);
				fkuzu.push($this.attr("folder"));
				denwacho_reset();
			})

			$fkuzus = $(".fkuzus");
			$fkuzus.off("tap");
			$fkuzus.on("tap", function(){
				var ind = $fkuzus.index(this);
				var $this = $(this);

				fkuzu.splice(ind, fkuzu.length);
				fkuzu.push($this.attr("folder"));
				denwacho_reset();
			})

			if(fkuzu.length > 1){
				$(".fback").addClass("active");
			}else{
				$(".fback").removeClass("active");
			}
			setTimeout(function(){
				$pmain.removeClass("deactive");
			}, 10)
		}, pmain_animation_speed);
	}
	$(".fback").on("tap",function(){
		fkuzu.splice(fkuzu.length - 1, 1);
		denwacho_reset();
	})

	denwacho_reset();
})