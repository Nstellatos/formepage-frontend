class Video {
	static all = [];
	constructor({ video_url, category, id }) {
		this.video_url = video_url;
		this.category_id = category.id;
		this.id = id;
		Video.all.push(this);
	}
	static findByVideoUrl(video_url) {
		return this.all.find(function (video) {
			video.video_url === video_url;
		});
	}
	static findById(id) {
		return this.all.find((video) => video.id === id);
	}
	static findOrCreateBy(videoObj) {
		return this.findByVideoUrl(videoObj.video_url) || new Video(videoObj);
	}
	render() {
		let catSet = document.querySelector(`#category-${this.category_id}`);
		const li = document.createElement('li');
		catSet.dataset.catId = this.category_id;
		li.innerHTML = `
       
        <iframe src="https://www.tiktok.com/embed/${this.video_url}"   allowfullscreen scrolling="no" allow="encrypted-media;"></iframe>
<br>
<button class="delete-video" data-id="${this.id}"> Delete</button>

        
        `;
		catSet.parentNode.appendChild(li);
		document
			.querySelector(`button.delete-video[data-id='${this.id}']`)
			.addEventListener('click', VideoService.handleDelete);
	}
}
