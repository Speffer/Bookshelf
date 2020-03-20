const saveCategory = () => {
  const categories = [
    {
      id: 1,
      title: 'Estou lendo'
    }, {
      id: 2,
      title: 'Quero ler'
    }, {
      id: 3,
      title: 'Já lido'
    }, {
      id: 4,
      title: 'Sem categoria'
    }
  ];

  localStorage.setItem('categories', JSON.stringify(categories));
};

const getCategory = () => {
  return localStorage.getItem('categories');
};

export default {
  saveCategory,
  getCategory
};