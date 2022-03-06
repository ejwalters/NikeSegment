function send(method) {
  switch (method) {
    case "page":
      analytics.page("Cart Viewed");
      break;
    case "view":
      analytics.track("View New Releases", {
        sampleProperty: true
      });
      break;
    case "login":
      analytics.identify("43259820234", {
        name: 'Eric Walters',
        email: 'ejwalters24@gmai.com',
        favoriteTeam: 'Cleveland Browns'
      });
      break;
    case "sneaker":
      analytics.page("View Product", {
        productId: 'AM2702022',
        productName: 'Air Max 270'
      });
      break;
    default:
      alert("Method not supported")
  }
}
