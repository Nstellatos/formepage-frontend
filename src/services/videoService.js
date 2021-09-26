class VideoService {
	static baseUrl = `${baseUrl}/videos`;
	static fetchVideos() {
		fetch(this.baseUrl)
			.then((resp) => resp.json())
			.then((json) =>
				json.forEach((videoObj) => {
					Video.findOrCreateBy(videoObj);
				}),
			)
			.catch(this.handleError);
	}
	static handleError(err) {
		alert(err);
	}
	static handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			video_url: videoUrl().value,
			category_id: videoCategory().value,
		};
		fetch(this.baseUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((resp) => resp.json())
			.then((json) => {
				let vid = new Video(json);
				vid.render();
			});
	};
}
