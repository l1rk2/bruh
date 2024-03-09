// eslint-disable-next-line no-shadow
export enum CategoriesType {
  phone,
  tablet,
  accessories,
}

export const categories = [
  {
    name: 'Mobile Phones',
    modifier: CategoriesType.phone,
    image: 'img/category-phones.png',
    link: '/phones',
  },
  {
    name: 'Tablets',
    modifier: CategoriesType.tablet,
    image: 'img/category-tablets.png',
    link: '/tablets',
  },
  {
    name: 'Accessories',
    modifier: CategoriesType.accessories,
    image: 'img/category-accessories.png',
    link: '/accessories',
  },
];
