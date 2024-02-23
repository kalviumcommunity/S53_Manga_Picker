const Manga = require("../data/schema.js")
require("dotenv").config()

const manga1 = new Manga({
    postId: 1,
    Title: "Dragon Ball",
    Image: "https://th.bing.com/th/id/OIP.9l96AmFqQ_veUtVRzVQ2QgHaLH?rs=1&pid=ImgDetMain",
    Author: "Akira Toriyama",
    User: "kpemperor1"
  });

  const manga2 = new Manga({
    postId: 2,
    Title: "One Piece",
    Image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421540856/one-piece-vol-60-9781421540856_hr.jpg",
    Author: "Eiichiro Oda",
    User: "Emperorkp"
  });

  const manga3 = new Manga({
    postId: 3,
    Title: "Attack on Titan",
    Image: "https://2.bp.blogspot.com/-V9XvCBomQF4/U1Ros6npV7I/AAAAAAAAAkE/QbEI2DmDegw/s1600/attack+on+titan+dvd+cover.jpg",
    Author: "Hajime Isayama",
    User: "harsh"
  });



  const manga4 = new Manga({
    postId: 4,
    Title: "Bleach",
    Image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421506111/bleach-vol-13-9781421506111_hr.jpg",
    Author: "Tite Kubo",
    User: "jason"
  });

  const manga5 = new Manga({
    postId: 5,
    Title: "My Hero Academia",
    Image: "https://th.bing.com/th/id/OIP.QY66GsUxigwN6Tekr5agIAHaLH?pid=ImgDetMain",
    Author: "Kohei Horikoshi",
    User: "sarvesh"
  });

  const manga6 = new Manga({
    postId: 6,
    Title: "Death Note",
    Image: "https://th.bing.com/th/id/OIP.ljCfio1zl2wwRsXbF92DTgHaLq?pid=ImgDetMain",
    Author: "Tsugumi Ohba",
    User: "kpemperor1"
  });

  const manga7 = new Manga({
    postId: 7,
    Title: "Jujutsu Kaisen",
    Image: "https://th.bing.com/th/id/OIP.XUu_PYhfsmW8j9QPu_q2jAHaLH?rs=1&pid=ImgDetMain",
    Author: "Gege Akutami",
    User: "Emperorkp"
  });

  const manga8 = new Manga({
    postId: 8,
    Title: "Tokyo Ghoul",
    Image: "https://th.bing.com/th/id/OIP.jqS5HoOzUEKlhNW1YnC3DgHaKn?pid=ImgDetMain",
    Author: "Sui Ishida",
    User: "harsh"
  });

  const manga9 = new Manga({
    postId: 9,
    Title: "Demon Slayer",
    Image: "https://th.bing.com/th/id/OIP.6RMpxwChb01Ycn9RS7EQygHaLH?pid=ImgDetMain",
    Author: "Koyoharu Gotouge",
    User: "jason"
  });

  const manga10 = new Manga({
    postId: 10,
    Title: "Fullmetal Alchemist",
    Image: "https://picfiles.alphacoders.com/367/thumb-1920-367696.jpg",
    Author: "Hiromu Arakawa",
    User: "sarvesh"
  });



const mongoose = require("mongoose")
// Connect to your local MongoDB instance
mongoose.connect(process.env.MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to local MongoDB'))
  .catch(err => console.error('Error connecting to local MongoDB:', err));

const mangaData = [manga1, manga2, manga3, manga4, manga5, manga6, manga7, manga8, manga9, manga10];

// Manga.insertMany(mangaData)
//   .then(() => console.log('Manga added successfully!'))
//   .catch(err => console.error('Error adding manga:', err));

  module.exports = mangaData;
