let BASE_URL = '';
let TIME_OUT = 10000;

if (process.env.NODE_ENV === 'development') {
  // BASE_URL = 'http://152.136.185.210:5000';
  BASE_URL = 'https://randomuser.me';
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://152.136.185.210:5000';
}

export { TIME_OUT, BASE_URL };
