document.addEventListener('DOMContentLoaded', () => {
	CategoryService.fetchCategories();
	VideoService.fetchVideos();
	videoForm().addEventListener('submit', VideoService.handleSubmit);
	categoryForm().addEventListener('submit', CategoryService.handleSubmit);
});
