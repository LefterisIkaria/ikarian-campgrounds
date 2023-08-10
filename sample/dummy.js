const locations = [
  {
    name: "Nas Beach",
    longitude: 37.62226123766642,
    latitude: 26.05920938136301,
  },
  {
    name: "Evdilos Village",
    longitude: 37.631714703830276,
    latitude: 26.177760646530373,
  },
  {
    name: "Armenistis Village",
    longitude: 37.634583592327935,
    latitude: 26.086613458379418,
  },
  {
    name: "Agios Kirykos Town",
    longitude: 37.616800747962664,
    latitude: 26.293848689036725,
  },
  {
    name: "Faros Beach",
    longitude: 37.67426760666238,
    latitude: 26.349714563904527,
  },
  {
    name: "Raches Village",
    longitude: 37.600919360831206,
    latitude: 26.080451619853243,
  },
  {
    name: "Gialiskari Beach",
    longitude: 37.63027569186534,
    latitude: 26.103437500741155,
  },
  {
    name: "Agios Giorgios Beach",
    longitude: 37.688746593279525,
    latitude: 26.36338815155215,
  },
  {
    name: "Seychelles Beach",
    longitude: 37.55987430768059,
    latitude: 26.1405363024649,
  },
  {
    name: "Mesakti Beach",
    longitude: 37.63123658767465,
    latitude: 26.09747375429861,
  },
];

const titles = [
  "Artemis Camp Ruins",
  "Camping Paradise",
  "Camping Armenistis",
  "Island Camping Ikaria",
  "Faros Camping",
  "Camping Dionysos",
  "Camping Nautilos",
  "Camp ZEUS",
  "Seychelles Campgrounds",
  "Mesakti Camping",
];

const prices = [15, 12, 18, 20, 10, 22, 17, 13, 19, 16];

const descriptions = [
  "This campground is located on a beautiful beach with crystal-clear waters. It offers spacious campsites for tents and RVs, as well as comfortable bungalows for those who prefer more amenities. The campground features a restaurant, a mini-market, and a playground for children.",
  "This secluded campground is nestled in a picturesque cove surrounded by greenery. It offers a peaceful and tranquil environment for camping enthusiasts. The campground features basic facilities such as toilets, showers, and a small shop selling essential items.",
  "This campground is located on a quiet beach, surrounded by lush vegetation. It offers comfortable and spacious campsites for tents and RVs, as well as bungalows and studios. The campground features a restaurant, a bar, and a small supermarket.",
  "This small and friendly campground is located on a hillside, offering panoramic views of the sea. It offers basic campsites for tents and RVs, as well as small wooden cabins. The campground features a restaurant, a bar, and a small shop selling snacks and drinks.",
  "This rustic campground is located in a peaceful and secluded area, surrounded by nature. It offers simple campsites for tents and RVs, as well as small wooden cabins. The campground features a restaurant, a bar, and a small shop selling local products.",
  "This campground is situated in a beautiful valley, surrounded by olive groves and vineyards. It offers well-maintained campsites for tents and RVs, as well as comfortable bungalows. The campground features a swimming pool, a restaurant, and a wine cellar where guests can taste local wines.",
  "This family-friendly campground is located on a hill overlooking the sea. It offers various types of accommodation, including tents, bungalows, and caravans. The campground features a swimming pool, a restaurant, and a bar with stunning sea views.",
  "This eco-friendly campground is located in a beautiful valley, surrounded by mountains and greenery. It offers spacious and shaded campsites for tents and RVs, as well as comfortable bungalows made from natural materials. The campground features a restaurant, a bar, and a small farm where guests can pick fresh vegetables and fruits.",
  "This campground is located on a hillside, offering stunning views of the sea and the surrounding mountains. It offers well-maintained campsites for tents and RVs, as well as comfortable bungalows. The campground features a swimming pool, a restaurant, and a small shop selling local products.",
  "This scenic campground is located on a hillside overlooking the Aegean Sea. It offers spacious and well-maintained campsites for tents and RVs, as well as cozy bungalows. The campground features a restaurant serving traditional Greek cuisine, a bar, and a mini-market selling essential items. Guests can enjoy the beautiful sunsets from the terrace or take a short walk down to the nearby beach for a refreshing swim in the crystal-clear waters.",
];

const images = [
  {
    url: "https://res.cloudinary.com/djlbcfznq/image/upload/v1676665598/IkarianCamp/kyle-peyton-uyE5g_fdM54-unsplash_p9lmdz.jpg",
    filename: "kyle-peyton-uyE5g_fdM54-unsplash_p9lmdz",
  },
  {
    url: "https://res.cloudinary.com/djlbcfznq/image/upload/v1676665722/IkarianCamp/tsunami-green-s9JH-9xr99o-unsplash_hiqdwj.jpg",
    filename: "tsunami-green-s9JH-9xr99o-unsplash_hiqdwj",
  },
  {
    url: "https://res.cloudinary.com/djlbcfznq/image/upload/v1676665521/IkarianCamp/denys-nevozhai-63Znf38gnXk-unsplash_jrtlml.jpg",
    filename: "denys-nevozhai-63Znf38gnXk-unsplash_jrtlml",
  },
  {
    url: "https://res.cloudinary.com/djlbcfznq/image/upload/v1676665511/IkarianCamp/daniel-j-schwarz-RAFzxcTGpHQ-unsplash_ksg2zz.jpg",
    filename: "daniel-j-schwarz-RAFzxcTGpHQ-unsplash_ksg2zz",
  },
  {
    url: "https://res.cloudinary.com/djlbcfznq/image/upload/v1676665400/IkarianCamp/tommy-lisbin-2DH-qMX6M4E-unsplash_vhfja9.jpg",
    filename: "tommy-lisbin-2DH-qMX6M4E-unsplash_vhfja9",
  },
  {
    url: "https://res.cloudinary.com/djlbcfznq/image/upload/v1676665393/IkarianCamp/everett-mcintire-BPCsppbNRMI-unsplash_ll2yah.jpg",
    filename: "everett-mcintire-BPCsppbNRMI-unsplash_ll2yah",
  },
  {
    url: "https://res.cloudinary.com/djlbcfznq/image/upload/v1676665377/IkarianCamp/matt-whitacre-F4GGnyJ8aiI-unsplash_t98jcn.jpg",
    filename: "matt-whitacre-F4GGnyJ8aiI-unsplash_t98jcn",
  },
  {
    url: "https://res.cloudinary.com/djlbcfznq/image/upload/v1676665338/IkarianCamp/scott-goodwill-y8Ngwq34_Ak-unsplash_ifvofa.jpg",
    filename: "scott-goodwill-y8Ngwq34_Ak-unsplash_ifvofa",
  },
  {
    url: "https://res.cloudinary.com/djlbcfznq/image/upload/v1676665327/IkarianCamp/chris-holder-uY2UIyO5o5c-unsplash_ump6hr.jpg",
    filename: "chris-holder-uY2UIyO5o5c-unsplash_ump6hr",
  },
  {
    url: "https://res.cloudinary.com/djlbcfznq/image/upload/v1676665241/IkarianCamp/zach-betten-K9olx8OF36A-unsplash_zvkrmu.jpg",
    filename: "zach-betten-K9olx8OF36A-unsplash_zvkrmu",
  },
  {
    url: "https://res.cloudinary.com/djlbcfznq/image/upload/v1676665235/IkarianCamp/jonathan-forage-1azAjl8FTnU-unsplash_e9ide1.jpg",
    filename: "jonathan-forage-1azAjl8FTnU-unsplash_e9ide1",
  },
  {
    url: "https://res.cloudinary.com/djlbcfznq/image/upload/v1676665226/IkarianCamp/vanessa-ochotorena-iZ4yhyDB-dQ-unsplash_q9mf9p.jpg",
    filename: "vanessa-ochotorena-iZ4yhyDB-dQ-unsplash_q9mf9p",
  },
];

export const dummy = {
  titles,
  prices,
  descriptions,
  locations,
  images,
};
