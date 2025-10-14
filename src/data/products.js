import croissant1 from '../assets/croissant1.jpg';
import croissant2 from '../assets/croissant2.jpg';
import bread1 from '../assets/bread1.jpg';
import bread2 from '../assets/bread2.jpg';
import cake1 from '../assets/cake1.jpg';
import cake2 from '../assets/cake2.jpg';
import coffee1 from '../assets/coffee1.jpg';

export const products = [
  // Pães e Salgados
  {
    id: 1,
    name: 'Croissant Artesanal',
    description: 'Croissant folhado e dourado, preparado com manteiga francesa',
    price: 8.50,
    category: 'breads',
    image: croissant1,
  },
  {
    id: 2,
    name: 'Pão Francês',
    description: 'Tradicional pão francês crocante por fora e macio por dentro',
    price: 0.75,
    category: 'breads',
    image: bread1,
  },
  {
    id: 3,
    name: 'Pão de Fermentação Natural',
    description: 'Pão artesanal com fermentação natural de 24 horas',
    price: 18.00,
    category: 'breads',
    image: bread2,
  },
  {
    id: 4,
    name: 'Croissant de Chocolate',
    description: 'Croissant recheado com chocolate belga de alta qualidade',
    price: 10.00,
    category: 'breads',
    image: croissant2,
  },
  {
    id: 5,
    name: 'Pão de Queijo',
    description: 'Pão de queijo mineiro tradicional, quentinho e saboroso',
    price: 3.50,
    category: 'breads',
    image: bread1,
  },
  {
    id: 6,
    name: 'Coxinha de Frango',
    description: 'Coxinha crocante com recheio cremoso de frango',
    price: 6.00,
    category: 'breads',
    image: bread2,
  },
  
  // Doces e Bolos
  {
    id: 7,
    name: 'Bolo de Chocolate',
    description: 'Bolo de chocolate úmido com cobertura cremosa',
    price: 45.00,
    category: 'sweets',
    image: cake1,
  },
  {
    id: 8,
    name: 'Bolo de Cenoura',
    description: 'Bolo de cenoura caseiro com cobertura de chocolate',
    price: 38.00,
    category: 'sweets',
    image: cake2,
  },
  {
    id: 9,
    name: 'Torta de Limão',
    description: 'Torta de limão com merengue suíço levemente tostado',
    price: 42.00,
    category: 'sweets',
    image: cake1,
  },
  {
    id: 10,
    name: 'Sonho',
    description: 'Sonho recheado com creme de baunilha',
    price: 7.00,
    category: 'sweets',
    image: cake2,
  },
  {
    id: 11,
    name: 'Churros',
    description: 'Churros crocantes com doce de leite argentino',
    price: 8.00,
    category: 'sweets',
    image: cake1,
  },
  {
    id: 12,
    name: 'Brownie',
    description: 'Brownie de chocolate com nozes',
    price: 9.00,
    category: 'sweets',
    image: cake2,
  },
  
  // Bebidas e Cafés
  {
    id: 13,
    name: 'Café Expresso',
    description: 'Café expresso encorpado, 100% arábica',
    price: 5.00,
    category: 'drinks',
    image: coffee1,
  },
  {
    id: 14,
    name: 'Cappuccino',
    description: 'Cappuccino cremoso com espuma de leite',
    price: 8.00,
    category: 'drinks',
    image: coffee1,
  },
  {
    id: 15,
    name: 'Café com Leite',
    description: 'Café com leite tradicional',
    price: 6.00,
    category: 'drinks',
    image: coffee1,
  },
  {
    id: 16,
    name: 'Chocolate Quente',
    description: 'Chocolate quente cremoso com chantilly',
    price: 9.00,
    category: 'drinks',
    image: coffee1,
  },
  {
    id: 17,
    name: 'Suco Natural de Laranja',
    description: 'Suco de laranja fresco espremido na hora',
    price: 7.00,
    category: 'drinks',
    image: coffee1,
  },
  {
    id: 18,
    name: 'Café Latte',
    description: 'Café latte com arte em latte',
    price: 9.00,
    category: 'drinks',
    image: coffee1,
  },
];

export const categories = [
  { id: 'breads', name: 'Pães e Salgados', icon: '🥖' },
  { id: 'sweets', name: 'Doces e Bolos', icon: '🍰' },
  { id: 'drinks', name: 'Bebidas e Cafés', icon: '☕' },
];

