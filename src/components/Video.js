class Video {
	static all = [];
	constructor({ video_url, category, id }) {
		this.video_url = video_url;
		this.category_id = category.id;
		this.id = id;
		Video.all.push(this);
	}
}
