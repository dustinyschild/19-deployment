'use strict';

const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const picSchema = Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  imageURI: { type: String, required: true },
  userID: { type: String, required: true },
  created: { type: Date, required: true, default: Date.now },
  
  objectId: { type: Schema.Types.ObjectId, required: true },
  galleryId: { type: Schema.Types.ObjectId, required: true }
});

module.exports = mongoose.models.pic || mongoose.model('pic',picSchema);
