
// ►

// Source Data
// (Leave as is for this challenge)

var mosaicItemNames = [
  "shower",
  "blessed",
  "sisterGrave",
  // "graduation", // broken :(
  "cops",
  "car",
  "pool",
  "dogMedal",
  "drawing",
  "danceOnCop",
  "reading",
  "racoon",
  "communion",
  "familyThree",
  "vote",
  "atParade",
  "grocery",
  "splitPic",
  "family",
  "bag",
  "cake",
  "outsideCouch",
  "mayorOfHancock",
  "flan",
  "foursome",
  "puppy",
  "daughter",
  "fullMoon",
  "rosa",
  "letters",
  "signs",
  "walkingDog",
  "livingRoom",
  "voted",
  "lunchtime",
  "burialGround",
  "baptism",
  "cartoons",
  "muscles",
  "rain"
]

// Base URL to retrieve data from the Boston Globe's server
// (Leave as is for this challenge)
var baseUrl = "http://cache.boston.com/multimedia/graphics/projectFiles/bgInstagram/"

// ---

// Renders the mosaic item from the HTML template
var renderMosaicItem = function(name) {
  var html = mosaicItemTemplate
  html = html.replace("{{image-url}}", imageUrl(name))
  html = html.replace("{{audio-url}}", audioUrl(name))
  return html
}

// Given the baseURL and mosaicItemNames, write a function that that returns the image URL
var imageUrl = function(mosaicItemName) {
}

// Now write a function that that returns the audio URL
var audioUrl = function(mosaicItemName) {
}

// retrieve the mosaic item template source and assign it to a variable
var mosaicItemTemplate =


// ---

// Render the mosaic html

// Render the mosaic to the DOM

// ---

// creates an object clipPlayer that controls the plays and stops of the audio clips
var clipPlayer = {}

clipPlayer.activeMosiacEl = null

// write a 'play' method that takes a mosaic element as its argument and that
// starts the playback of the clicked element's audio clip.
// The method also stops playback of currently playing audio
// to prevent audio from overlapping.

clipPlayer.play = function(mosaicEl) {

}

// write a 'stop' method that resets the audio clip to
// the starting point
clipPlayer.stop = function() {
}

// write a 'activeAudioEl' method that returns the active audio element
clipPlayer.activeAudioEl = function() {
}

// ---

// Write an event listener that plays sounds on click of an image


// Cancel sound when clicking outside the mosaic (i.e. on html element)

