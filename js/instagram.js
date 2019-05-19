// var userFeed = new Instafeed({
//     get: 'user',
//     userId: '505647533',
//     clientId: 'eebc5de76f6e4da096b90473057f125f',
//     accessToken: '505647533.1677ed0.e08011cd943b48e286c609c258bb3e25',
//     resolution: 'standard_resolution',
//     template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
//     sortBy: 'most-recent',
//     limit: 8,
//     links: false
//   });
//   userFeed.run();

  

  var userFeed = new Instafeed({
    get: 'user',
    userId: '3629858732',
    clientId: 'd90fe3cd843e40dea69fab70964bf3a0',
    accessToken: '3629858732.1677ed0.dc5402bad5b447808da30a4cb24c6d43',
    resolution: 'standard_resolution',
    template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
    sortBy: 'most-recent',
    limit: 8,
    links: false
  });
  userFeed.run();