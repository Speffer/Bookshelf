class CategoryService {
  save(category) {
    let storageCategories = localStorage.getItem('categories');

    let newCategory = {
      categories: [ ...storageCategories, ...category ]
    };

    localStorage.setItem(JSON.stringify(newCategory));
  };
};

export default CategoryService;