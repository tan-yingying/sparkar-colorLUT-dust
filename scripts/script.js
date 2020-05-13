const NativeUI = require('NativeUI');
const Textures = require('Textures');
const Patches = require('Patches');

Promise.all([
    Textures.findFirst('icon_1'),
    Textures.findFirst('icon_2'),
    Textures.findFirst('icon_3'),
    Textures.findFirst('icon_4'),
]).then(onReady);


function onReady(assets) {

    const texture0 = assets[0];
    const texture1 = assets[1];
    const texture2 = assets[2];
    const texture3 = assets[3];

    const picker = NativeUI.picker;

    const index = 0;
    const selection = 0;

    const configuration = {

      selectedIndex: index,

      items: [
        {image_texture: texture0},
        {image_texture: texture1},
        {image_texture: texture2},
        {image_texture: texture3},
      ]

    };

    picker.configure(configuration);
    picker.visible = true;

    picker.selectedIndex.monitor().subscribe(function(index) {
      Patches.inputs.setScalar('selection', index.newValue);
    });
}



const NUI = require("NativeUI");
const M = require('Materials');
const Time = require('Time');

M.findFirst('ColorLUT').then(function(mat){
// Slider
var lastSliderValue = 0.5;
const nativeUISlider = NativeUI.slider;

nativeUISlider.value.monitor({fireOnInitialValue: false}).subscribe(function(val) {
lastSliderValue = val.newValue;
mat.opacity = lastSliderValue;
});

nativeUISlider.value = lastSliderValue;
nativeUISlider.visible = true;
});


M.findFirst('SkinLUT').then(function(mat){
// Slider
var lastSliderValue = 0.5;
const nativeUISlider = NativeUI.slider;

nativeUISlider.value.monitor({fireOnInitialValue: false}).subscribe(function(val) {
lastSliderValue = val.newValue;
mat.opacity = lastSliderValue;
});

nativeUISlider.value = lastSliderValue;
nativeUISlider.visible = true;
});

