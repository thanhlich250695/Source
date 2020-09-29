var bg_video = document.getElementById('bg_video');
var bg_video_m = document.getElementById('bg_video_m');

if(window.innerWidth > 981){
	bg_video.play();
	setTimeout(function(){ $(".brand").addClass('hide'); }, 24000);
	bg_video.addEventListener('ended', function () {
	bg_video.pause();
	}, 0);
}
if(window.innerWidth < 980){
	$('.button-action').click(function(){
		$('.bl-login').fadeOut();
		setTimeout(function(){ $(".brand").addClass('hide'); }, 24000);
		$('.bl-video-m').fadeIn();
		bg_video_m.play();
	});
	
	bg_video_m.addEventListener('ended', function () {
		bg_video_m.pause();
	}, 0);
}