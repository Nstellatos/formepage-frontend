class Video {
	static all = [];
	constructor(data) {
		this.data = data;
		this.constructor.all.push(this);
	}

	renderCard = () => {
		const { video_url } = this.data;
		document.getElementById('video-container').innerHTML += `
        <div class="video-card card">
        <iframe src="https://www.tiktok.com/embed/${video_url}"   allowfullscreen scrolling="no" allow="encrypted-media;"></iframe>
</div>
        `;
	};

	static handleSubmit = (e) => {
		e.preventDefault();
		const newVideo = { video_url: e.target.video_url.value };
		api.createVideo(newVideo).then((video) => {
			new Video(video).renderCard();
		});
		modal.close();
		e.target.reset();
	};

	static openVideoForm = () => {
		modal.main.innerHTML = `
    <h1>Add a video</h1>
    <form>
      <label for="video_url">Paste your link here:</label><br>
      <input type="text" name="video_url"><br>
      <input type="submit" value="add video"><br>
    </form>
    `;
		modal.main
			.querySelector('form')
			.addEventListener('submit', this.handleSubmit);
		modal.open();
	};

	static renderVideoIndex = () => {
		const main = document.getElementById('main');
		main.innerHTML = '';
		const videoContainer = document.createElement('div');
		videoContainer.id = 'video-container';
		videoContainer.classList.add('container');

		const addVideo = document.createElement('button');
		addVideo.innerText = 'add a video';
		addVideo.addEventListener('click', this.openVideoForm);
		main.append(videoContainer, addVideo);
		this.all.forEach((video) => video.renderCard());
	};
	static getVideos = () => {
		api.getVideos().then((videos) => {
			Video.all = [];
			videos.forEach((video) => new Video(video));
			this.renderVideoIndex();
		});
	};
}
