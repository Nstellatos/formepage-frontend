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
	static findByName(name) {
		return Category.all.find((category) => category.name === name);
	}
	static findById(id) {
		return Category.all.find((category) => category.id === id);
	}
}
