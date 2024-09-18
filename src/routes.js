import { addBook } from './handler.js';

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  }
];

export default routes;