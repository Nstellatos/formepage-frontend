class Category {
	static all = [];
	static dropDownOptions = [];

	constructor({ name, id, videos = [] }) {
		this.name = name;
		this.id = id;
		this.videos = videos;
		Category.all.push(this);
	}

	static getAll() {
		return this.all;
	}

	static findByName(name) {
		return this.all.find(function (category) {
			category.name === name;
		});
	}

	static findById(id) {
		return this.all.find((category) => category.id === id);
	}

	static findOrCreateBy(categoryObj) {
		return this.findByName(categoryObj.name) || new Category(categoryObj);
	}
	getVideos() {
		return Video.all.filter((video) => this.id === video.category_id);
	}
	addToDropDown() {
		const option = document.createElement('option');
		option.value = this.id;
		option.innerText = this.name;
		videoCategory().append(option);
	}

	render() {
		const categoryContainer = document.createElement('div');
		categoryContainer.id = 'category-container';
		categoryContainer.classList.add('card');
		const a = document.createElement('a');

		a.id = `category-${this.id}`;
		a.innerText = this.name;
		a.href = '####';
		a.addEventListener('click', this.renderVideos);
		categoryContainer.appendChild(a);
		categoriesSection().appendChild(categoryContainer);
	}

	renderVideos = (e) => {
		const nextLiSibling = e.target.nextSibling;
		if (nextLiSibling) {
			const children = Array.from(e.target.parentNode.children);
			const lis = children.slice(1);
			lis.forEach((li) => li.remove());
		} else {
			this.getVideos().forEach((element) => element.render());
		}
	};
}
