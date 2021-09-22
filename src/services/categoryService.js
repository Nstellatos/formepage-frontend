class CategoryService {
	static url = `${baseUrl}/categories`;

	static fetchCategories() {
		fetch(this.url)
			.then((res) => res.json())
			.then((json) => renderCategories(json));
	}
}
