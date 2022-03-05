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
      analytics.identify("ejwalters", {
        sampleTrait: true
      });
      break;
    case "sneaker":
      analytics.group("View Product", {
        sampleGroupTrait: true
      });
      break;
    default:
      alert("Method not supported")
  }
}
