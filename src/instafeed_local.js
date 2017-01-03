var feed = new Instafeed({
  get: 'user',
  userId: '1376217243', // Ex: 1374300081
  accessToken: '1376217243.94f4a55.6a70850fb01e4b3eb8ec0f66d53e790d',
  resolution: 'thumbnail',
  template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
  sortBy: 'most-recent',
  limit: 5,
  useHttp: true,
  links: false

});
feed.run();

