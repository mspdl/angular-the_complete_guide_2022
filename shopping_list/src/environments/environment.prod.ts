const firebaseAPIKey = 'AIzaSyBSQGFOYDkCxN_UVLTeCRHfQQT3MRFSRj0';

export const environment = {
  production: false,
  API_URL: 'https://ng-course-recipe-book-bbf68-default-rtdb.firebaseio.com',
  API_URL_SIGN_IN: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseAPIKey}`,
  API_URL_SIGN_UP: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseAPIKey}`,
};