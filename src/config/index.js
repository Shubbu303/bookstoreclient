const environmentUrls = new Map();

environmentUrls.set("localhost", "http://localhost:8080");
environmentUrls.set(
  "bookstoreclient-0.herokuapp.com",
  "https://book-store-001.herokuapp.com"
);

export default environmentUrls.get(window.location.hostname);
//window.location.hostname will return the value of where the front end app is running

// its saying that when the the application is running locally , use 'localhost:8080 as its backend' and when the application is running on server use https://bookstore-0.herokuapp.com as its backend
