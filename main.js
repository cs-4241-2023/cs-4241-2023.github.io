let element_spin_box = document.getElementById('spin-box');
let degrees = 0;
let active = false;

function spinny() {
  /*
  Spin the spin-box around.
  */
  // Not in the middle of the animation.
  if(!active) {
    // Lock this function so it is not interrupted by another function call.    
    active = true;
    
    // Add the "spin" class to the spin-box to animate it, then remove it.
    element_spin_box.classList.remove('spin');
    void element_spin_box.offsetWidth; // DOM Reflow.
    element_spin_box.classList.add('spin');
    
    // Wait until the animation is finished to unlock this function.    
    setTimeout(() => { active = false;}, 1000);
  }
}