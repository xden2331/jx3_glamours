module.exports = function(mongoose) {
  /**
for testing use
 */
  mongoose.connection.dropDatabase();
  const Outfit = require("../models/Outfit");
  const imgURL = [
    {
      imgUrl:
        "https://i3.17173cdn.com/2fhnvk/YWxqaGBf/outcms/FsduBqblhvfCjdy.jpg",
      bodyType: "woman",
      clan: "all"
    },
    {
      imgUrl: "https://pbs.twimg.com/media/DH3E6w4UQAAWSZV.jpg",
      bodyType: "loli",
      clan: "wanhua"
    },
    {
      imgUrl:
        "http://imgsrc.baidu.com/forum/w%3D580%3B/sign=ac9a9aa1de1b0ef46ce89856edff50da/aec379310a55b319e39c50fa4fa98226cefc17d3.jpg",
      bodyType: "boy",
      clan: "cangyun"
    },
    {
      imgUrl:
        "https://i3.17173cdn.com/2fhnvk/YWxqaGBf/outcms/FsduBqblhvfCjdy.jpg",
      bodyType: "woman",
      clan: "all"
    },
    {
      imgUrl: "https://pbs.twimg.com/media/DH3E6w4UQAAWSZV.jpg",
      bodyType: "loli",
      clan: "wanhua"
    },
    {
      imgUrl:
        "http://imgsrc.baidu.com/forum/w%3D580%3B/sign=ac9a9aa1de1b0ef46ce89856edff50da/aec379310a55b319e39c50fa4fa98226cefc17d3.jpg",
      bodyType: "boy",
      clan: "cangyun"
    }
  ];

  for (var i = 0; i < 100; ++i) {
    const newOutfit = new Outfit({
      title: "Title",
      author: "Author",
      imgUrl: imgURL[i % imgURL.length].imgUrl,
      bodyType: imgURL[i % imgURL.length].bodyType,
      clan: imgURL[i % imgURL.length].clan
    });
    newOutfit
      .save()
      .then(outfit => console.log("Inserted initialized data"))
      .catch(err => console.log(err));
  }

  console.log("Completed intialization");
  // END
};
