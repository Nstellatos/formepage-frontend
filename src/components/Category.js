class Category {
	static all = [];

	constructor(id, name, videos = []) {
		this.id = id;
		this.name = name;
		this.videos = videos;
		Category.all.push(this);
	}
	static getAll() {
		return this.all;
	}
}
