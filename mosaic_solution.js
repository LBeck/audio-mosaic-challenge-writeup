// ►
// Source Data

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

var mosaicItemPicNames = [
"Deane",
"Deane3",
"Deane4",
"Deane5",
"Deane6",
"Deane7",
"Deane8",
"Deane9",
"ClaudiaMonicaLucia",
"ClaudiaMonicaLucia2",
"ClaudiaMonicaLucia3",
"DavidWeinberg_KatyaApekina",
"DavidWeinberg2",
"DavidWeinberg3",
"DavidWeinberg4"
]

// var baseUrl = "http://cache.boston.com/multimedia/graphics/projectFiles/bgInstagram/"

var basePicUrl = "http://www.luisabeck.com/test/StrangersGallery/"
// ---

// Render item from template
var renderMosaicItem = function(audioName, picName) {
  var html = mosaicItemTemplate
  html = html.replace("{{image-url}}", imageUrl(picName))
  html = html.replace("{{audio-url}}", audioUrl(audioName))
  return html
}

var imageUrl = function(mosaicItemPicName) {
  return basePicUrl + mosaicItemPicName + ".jpg"
}

var audioUrl = function(mosaicItemPicName) {
  return basePicUrl + "sounds/" + mosaicItemPicName + ".ogg"
}

// Mosaic item template source
var mosaicItemTemplate =
  document
    .querySelector('[data-template-name="mosaic-item"]')
    .innerText
    .trim()

// ---

// Render the mosaic html
var mosaicHtml = mosaicItemPicNames.map(renderMosaicItem).join("\n")

// Render the mosaic to the DOM
document.querySelector('.mosaic').innerHTML = mosaicHtml

// ---

var clipPlayer = {}

clipPlayer.activeMosiacEl = null

clipPlayer.play = function(mosaicEl) {
  this.stop()
  this.activeMosiacEl = mosaicEl
  this.activeMosiacEl.classList.add('active')
  this.activeAudioEl().play()
}

clipPlayer.stop = function() {
  if (!this.activeMosiacEl) return
  this.activeMosiacEl.classList.remove('active')
  this.activeAudioEl().pause()
  this.activeAudioEl().currentTime = 0
  this.activeMosiacEl = null
}

clipPlayer.activeAudioEl = function() {
  return this.activeMosiacEl.querySelector('audio')
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
