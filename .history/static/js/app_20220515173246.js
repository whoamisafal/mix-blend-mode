function init(){
let container = document.getElementById('options-container');

let mix_blend_mode = [
    'Screen',
    'Multiply',
    'Overlay',
    'Darken',
    'Lighten',
    'Color-dodge',
    'Color-burn',
    'Hard-light',
    'Soft-light',
    'Difference',
    'Exclusion',
    'Hue',
    'Saturation',
    'Color',
    'Luminosity',
    'Normal'
];
let textContainer = document.getElementById("text-container")
let text = document.getElementById("mytext")
let colorChange = document.getElementById("color");
//Change the text color of the text
colorChange.addEventListener("change", function(){
    text.style.color = colorChange.value;
});

mix_blend_mode.forEach(element => {
    let mix_blend_mode_options = document.createElement('input');
mix_blend_mode_options.setAttribute('id', element);
mix_blend_mode_options.setAttribute('name', 'mix-blend-mode-options');
let label = document.createElement('label');
label.setAttribute('for', element);
label.innerHTML = element;
mix_blend_mode_options.setAttribute('value', element);
mix_blend_mode_options.setAttribute('type', 'radio');
//Default Selected Option for the last item in the array
mix_blend_mode_options.setAttribute('checked', 'checked');

mix_blend_mode_options.setAttribute('options', mix_blend_mode);

mix_blend_mode_options.addEventListener('click', function(){
    let selected_mix_blend_mode = this.value;
    textContainer.style.mixBlendMode = selected_mix_blend_mode;
});

container.appendChild(mix_blend_mode_options);
container.appendChild(label);

});
    
}
init();