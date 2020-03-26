module.exports = function(mongoose) {
  /**
for testing use
 */
  mongoose.connection.dropDatabase();
  const Outfit = require("../models/Outfit");
  const imgURL = [
    "https://i3.17173cdn.com/2fhnvk/YWxqaGBf/outcms/FsduBqblhvfCjdy.jpg",
    "https://pbs.twimg.com/media/DH3E6w4UQAAWSZV.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmVHsYce7wAybvQkNxgbbmUha0rTeyGqKEbegJiyeCHivRrSqw",
    "https://i3.17173cdn.com/2fhnvk/YWxqaGBf/outcms/FsduBqblhvfCjdy.jpg",
    "https://pbs.twimg.com/media/DH3E6w4UQAAWSZV.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmVHsYce7wAybvQkNxgbbmUha0rTeyGqKEbegJiyeCHivRrSqw"
  ];

  for (var i = 0; i < 100; ++i) {
    const newOutfit = new Outfit({
      title: "Title",
      author: "Author",
      imgUrl: imgURL[i % imgURL.length]
    });
    newOutfit
      .save()
      .then(outfit => console.log("Inserted initialized data"))
      .catch(err => console.log(err));
  }

  console.log("Completed intialization");
  // END
};
