$(document).ready(function(){
		$( ".course-code" ).keyup(function() {
			generateLink();
		});
		$( ".instructor-code" ).keyup(function() {
			generateLink();
		});
		
		var generateLink = function(){
			var courseCode = $(".course-code").val().toUpperCase();
			var instructorCode = $(".instructor-code").val().toUpperCase();
			var link = "http://14.102.11.90/print51.asp?course="+courseCode+"&YEAR=2013-2014&SEM=II&USER="+instructorCode+"&ENV=280187390";
				$(".link-result").attr("href", link);
				if(courseCode.length == 6 & instructorCode.length == 5){
					$(".link-result").removeClass('btn-primary').addClass('btn-success');
				}
		}
	});

