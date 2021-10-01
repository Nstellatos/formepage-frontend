class VideoService {
	static baseUrl = `${baseUrl}/videos`;
	static fetchVideos() {
		fetch(this.baseUrl)
			.then((resp) => resp.json())
			.then((json) =>
				json.forEach((videoObj) => {
					Video.findOrCreateBy(videoObj);
					//vid.renderCard();
					//Video.findOrCreateBy(videoObj);
				}),
			)
			.catch(this.handleError);
	}
	static handleError(err) {
		console.log(err);
	}
	static handleSubmit(e) {
		e.preventDefault();
		const data = {
			video_url: videoUrl().value,
			category_id: videoCategory().value,
		};
		fetch(VideoService.baseUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((resp) => resp.json())
			.then((json) => {
				let vid = new Video(json);

				videoForm().reset();
				vid.render();
			});
	}
	static handleDelete = (e) => {
		fetch(`http://localhost:3000/videos/${e.target.dataset.id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((resp) => resp.json())
			.then((json) => {
				e.target.parentNode.remove();
				let vid = Video.findById(parseInt(e.target.dataset.id));
				let index = Video.all.indexOf(vid);
				Video.all.splice(index, 1);
				alert(json.message);
			})
			.catch(this.handleError);
	};
}
