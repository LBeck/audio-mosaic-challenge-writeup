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

var baseUrl = "http://cache.boston.com/multimedia/graphics/projectFiles/bgInstagram/"
// ---

// Renders the mosaic item from the HTML template
var renderMosaicItem = function(name) {
  var html = mosaicItemTemplate
  html = html.replace("{{image-url}}", imageUrl(name))
  html = html.replace("{{audio-url}}", audioUrl(name))
  return html
}

// returns the image URL
var imageUrl = function(mosaicItemName) {
  return baseUrl + "images/" + mosaicItemName + ".jpg"
}

// returns the audio URL
var audioUrl = function(mosaicItemName) {
  return baseUrl + "sounds/" + mosaicItemName + ".ogg"
}

// Mosaic item template source
var mosaicItemTemplate =
  document
    .querySelector('[data-template-name="mosaic-item"]')
    .innerText
    .trim()

// ---

// Render the mosaic html
var mosaicHtml = mosaicItemNames.map(renderMosaicItem).join("\n")

// Render the mosaic to the DOM
document.querySelector('.mosaic').innerHTML = mosaicHtml

// ---

var clipPlayer = {}

clipPlayer.activeMosaicEl = null

clipPlayer.play = function(mosaicEl) {
  this.stop()
  this.activeMosaicEl = mosaicEl
  this.activeMosaicEl.classList.add('active')
  this.activeAudioEl().play()
}

clipPlayer.stop = function() {
  if (!this.activeMosaicEl) return
  this.activeMosaicEl.classList.remove('active')
  this.activeAudioEl().pause()
  this.activeAudioEl().currentTime = 0
  this.activeMosaicEl = null
}

clipPlayer.activeAudioEl = function() {
  return this.activeMosaicEl.querySelector('audio')
}

// ---

// Play sounds on click of an image

document.querySelector('.mosaic').addEventListener('click', function(event){
  clipPlayer.play(event.target.parentElement)
})

// Cancel when clicking outside the mosaic (i.e. on html element)

document.addEventListener('click', function(event) {
  if (event.target !== document.querySelector('html')) return
  clipPlayer.stop()
})
