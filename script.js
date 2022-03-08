function send(method) {
  switch (method) {
    case "page":
      analytics.page("Cart Viewed", {
        itemsInCart: ('Air Max 270'),
        cartTotal: '$96.76'
      });
      break;
    case "view":
      analytics.track("View New Releases", {
        sampleProperty: true
      });
      break;
    case "login":
      analytics.identify("43259820232", {
        name: 'Ryan Walters',
        email: 'rjwalters@gmail.com',
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
