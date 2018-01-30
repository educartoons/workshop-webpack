import './assets/styles/app.scss';

if(process.env.NODE_ENV === 'prod'){
  console.log('We are in production')
}

if(process.env.NODE_ENV === 'dev'){
  console.log('We are in development environment')
}

console.log(process.env.API_URL)

// let name = 'Eduar Apaza Y.';
//
// let options = {
//   something: true,
//   anotherThing: false
// }
//
// options = {
//   ...options,
//   oneMoreThing: true
// }
//
//
// console.log(options);
