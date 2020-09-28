var bg_video = document.getElementById('bg_video');
var bg_video_m = document.getElementById('bg_video_m');

if(window.innerWidth > 981){
	bg_video.play();

	bg_video.addEventListener('ended', function () {
		$(".brand").hide();
		bg_video.pause();
	}, 0);
}
if(window.innerWidth < 980){
	$('.button-action').click(function(){
		$('.bl-login').fadeOut();
		$('.bl-video-m').fadeIn();
		bg_video_m.play();
	});
	
	bg_video_m.addEventListener('ended', function () {
		console.log("complete");
		$(".brand").hide();
		bg_video_m.pause();
	}, 0);
}