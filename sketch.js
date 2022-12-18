/* 

"The hardest choie may as well be to know when to stop!!!"

"The joy is in watching beautiful creations get made...and then unmade." 

quotes that play during the loading screen of the site and when a gif is being downloaded or being shared 


*/

// Symmetry corresponding to the number of reflections. Change the number for different number of reflections 
let symmetry = 3;   

let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;
let b_slider,s_slider;

let mode;
let draw_s;

function setup() { 
  createCanvas(994, 700);
  angleMode(DEGREES);
  background(242);

  // Creating the save button for the file
  saveButton = createButton('save');
  saveButton.mousePressed(saveFile);

  // Creating the clear screen button
  clearButton = createButton('clear');
  clearButton.mousePressed(clearScreen);

  // Creating the button for Full Screen
  //fullscreenButton = createButton('Full Screen');
  //fullscreenButton.mousePressed(screenFull);

  // Setting up the slider for the thickness of the brush
  brushSizeSlider = createButton('Brush Size Slider');
  b_slider = createSlider(1, 32, 4, 0.1);
  
  symmetrySlider = createButton('Symmetry Slider');
  s_slider = createSlider(3, 32, 1, 1);
  
  // Creating the button for Full Screen
  fullscreenButton = createButton('Full Screen');
  fullscreenButton.mousePressed(screenFull);
  
  
  mode = createSelect();
  mode.position(10, 10);
  mode.option('Harmony Disharmony');
  mode.option('Beside one another');
  mode.option('One man army');
  mode.selected('Harmony Disharmony');
  mode.changed(mySelectEvent);
  draw_s = createVector(2, -2)
}

// Save File Function
function saveFile() {
  save('design.jpg');
}

// Clear Screen function
function clearScreen() {
  background(242);
}


// Full Screen Function
function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}


function draw() {
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
    
    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        
        symmetry = s_slider.value();
        angle = 360 / symmetry;
        
        rotate(angle);
        let sw = b_slider.value();
        stroke(0, 0, 0);
        strokeWeight(sw);
        line(mx, my, pmx, pmy);
        push();
        //MODES:
        //Harmony Disharmony: scale(2, -2);
        //Alongside me/Beside one another: scale(1, -1);
        //One man army: scale(0, 0);
        scale(draw_s);
        scale(2, -2);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}

function mySelectEvent() {
  let item = mode.value();
  switch(item)
    {
      case 'Harmony Disharmony': draw_s.set(2, -2);
        break;
        
      case 'Beside one another':draw_s.set(1, -1);
        break;
        
      case 'One man army':draw_s.set(0, 0);
        break;
    }
  
  //text('It is a ' + item + '!', 50, 50);
}
