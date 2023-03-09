function esconderVideo() {
	var video = document.getElementById("meu-video");
	video.style.display = "none";
  }

  function exibirVideo() {
	document.querySelector('video').play();
	var video = document.getElementById("meu-video");
	video.style.display = "block";
	setTimeout(function() {
	  video.style.display = "none";
	}, 10000); // 1 minuto e meio em milissegundos
  }