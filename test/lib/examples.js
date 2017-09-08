'use strict';

const exampleUser = {
  username: 'dustinyschild',
  password: 'keithisawesome',
  email: 'example@example.com'
};

const exampleGallery = {
  name: 'test gallery',
  desc: 'its a test gallery'
};

const examplePic = {
  name: 'test pic',
  desc: 'its a test pic',
  image: `${__dirname}/../data/meaningoflife.jpg`
};

module.exports = {
  user: exampleUser,
  gallery: exampleGallery,
  pic: examplePic
};
