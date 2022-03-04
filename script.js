function send(method) {
  switch (method) {
    case "page":
      analytics.page("View Cart");
      break;
    case "track":
      analytics.track("Sample Track Event", {
        sampleProperty: true
      });
      break;
    case "login":
      analytics.identify("ejwalters", {
        sampleTrait: true
      });
      break;
    case "group":
      analytics.group("sampleGroupId", {
        sampleGroupTrait: true
      });
      break;
    default:
      alert("Method not supported")
  }
}
