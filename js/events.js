console.log('this is separate js file');
// option 1 directly set on the html

//option 2: onclick function
function makeRed(){
    document.body.style.backgroundColor='red';
}


//option 3
const makeBlueButton = document.getElementById( 'make-blue' );

makeBlueButton.onclick =
function makeBlueButton()
{
   document.body.style.backgroundColor='blue';
}

//option 4
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor='purple'
}

//option 5
const pinkButton = document.getElementById('make-pink')
pinkButton.addEventListener('click',makePink);
function makePink(){
    document.body.style.backgroundColor='pink';

}
//option 5 anotherr
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor = 'green';

})
//final[important]
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor ='goldenrod';
})

