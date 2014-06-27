Package.describe({
  summary: "Repacked twitter-text.js for meteor."
});

Package.on_use(function (api, where) {
  api.export("twttr");
  api.add_files(['twitter-text-1.9.1.js'],['client', 'server']);
});