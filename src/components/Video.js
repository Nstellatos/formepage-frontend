class Video {
	static all = [];
	constructor(data) {
		this.data = data;
		this.constructor.all.push(this);
		console.log(this);
	}

	static addVideo(video) {
		new Video(video);
	}

	static renderVideoIndex() {
		const videoContainer = document.createElement('div');
		videoContainer.classList.add('video-container');
		document.getElementById('main').appendChild(videoContainer);
		this.all.forEach((video) => video.renderCard());
	}

	static getVideos() {
		api.getVideos().then((videos) => {
			videos.forEach((video) => Video.addVideo(video));
			this.renderVideoIndex();
		});
	}
}
