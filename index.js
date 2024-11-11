let outScreen = document.querySelector('.output input');
mode = 'calc';

function insert(num) {
  outScreen.value += num;
  if (mode == 'equal') {
    outScreen.value = '';
    outScreen.value += num;
    mode = 'calc';
  };
};

function clr() {
  outScreen.value = '';
};

function del() {
  outScreen.value = outScreen.value.slice(0, -1);
  if (mode == 'equal') {
    outScreen.value = '';
  };
};

function calc() {
  try {
    outScreen.value = eval(outScreen.value);
    mode = 'equal';
  } catch (err) {
    outScreen.value = 'INVALID';
    mode = 'equal';
  };
};


// scientific calculator code

function sqrt() {
  try {
    outScreen.value = Math.sqrt(outScreen.value);
  } catch (err) {
    outScreen.value = 'INVALID';
  }
};

function pow() {
  outScreen.value += '**';
};

function sin() {
  try {
    outScreen.value = Math.sin(outScreen.value * Math.PI / 180);
  } catch (err) {
    outScreen.value = 'INVALID';
  }
};

function cos() {
  try {
    outScreen.value = Math.cos(outScreen.value * Math.PI / 180);
  } catch (err) {
    outScreen.value = 'INVALID';
  }
};

function tan() {
  try {
    outScreen.value = Math.tan(outScreen.value * Math.PI / 180);
  } catch (err) {
    outScreen.value = 'INVALID';
  }
};

function log() {
  try {
    outScreen.value = Math.log10(outScreen.value);
  } catch (err) {
    outScreen.value = 'INVALID';
  }
};

function ln() {
  try {
    outScreen.value = Math.log(outScreen.value);
  } catch (err) {
    outScreen.value = 'INVALID';
  }
};

function fact() {
  try {
    let num = parseInt(outScreen.value);
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    outScreen.value = result;
  } catch (err) {
    outScreen.value = 'INVALID';
  }
};

function pi(){
  try {
    outScreen.value = outScreen.value * Math.PI;
  } catch (err) {
    outScreen.value = 'INVALID';
  }
}