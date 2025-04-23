const categories = document.querySelectorAll('#categories > ul');
console.log(`The list contains ${categories.length} categories.`);

categories.forEach(category => {
  const title = category.previousElementSibling.textContent; 
  const itemsCount = category.querySelectorAll('li').length; 
  console.log(`Category: ${title}`);
  console.log(`Number of items: ${itemsCount}`);
});

const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatoes',
    'Greens',
    'Spices',
  ];
  
  const ingredientsList = document.getElementById('ingredients');
  const items = ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    return li;
  });
  
  ingredientsList.append(...items);
  const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
  
  const gallery = document.getElementById('gallery');
  
  const markup = images.map(({ url, alt }) =>
    `<li><img src="${url}" alt="${alt}"></li>`
  ).join('');
  
  gallery.insertAdjacentHTML('beforeend', markup);
  
  gallery.style.display = 'flex';
  gallery.style.flexWrap = 'wrap';
  gallery.style.gap = '10px';
  gallery.querySelectorAll('img').forEach(img => {
    img.style.width = '200px';
    img.style.height = 'auto';
  });
    