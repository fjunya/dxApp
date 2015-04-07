$(document).ready(function(){
	var $r = $("#receipt");
	var $s = $("#send");

	function reset(){
		var r_str = "";
		for(var i = 0; i < receipt.length; i++){
			r_str += "<li>";
			if(receipt[i].member == -1){
				r_str += "<div>未登録</div>";
				r_str += "<div>" + receipt[i].number + "</div>";
			}else{
				r_str += "<div>" + member[receipt[i].member].name + "</div>";
				r_str += "<div>" + member[receipt[i].member].number + "</div>";
			}
			r_str += "<div>" + receipt[i].time + "</div>";

			if(receipt[i].absence){
				r_str += "<div>不在</div>";
			}
			r_str += "</li>";
		}

		$r.append(r_str);
		var s_str = "";
		for(var i = 0; i < send.length; i++){
			s_str += "<li>";
			if(receipt[i].member == -1){
				s_str += "<div>未登録</div>";
				s_str += "<div>" + receipt[i].number + "</div>";
			}else{
				s_str += "<div>" + member[receipt[i].member].name + "</div>";
				s_str += "<div>" + member[receipt[i].member].number + "</div>";
			}
			s_str += "<div>" + receipt[i].time + "</div>";
			if(send[i].absence){
				s_str += "<div>不在</div>";
			}
			s_str += "</li>";
		}
		$s.append(s_str);
	}
	reset();
})