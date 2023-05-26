const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
function shadow(e) {
    const {offsetWidth: width, offsetHeight: height} = hero;
    const walk = 100;
    let {offsetX: x, offsetY: y} = e;
    if(this !== e.target) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }
    const xWalk = Math.round((x/width * walk) - (walk / 2));
    const yWalk = Math.round((y/width * walk) - (walk / 2));

    console.log(xWalk, yWalk);
    text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
                            ${xWalk * - 1}px ${yWalk * - 1}px 0 rgba(0,255,255,0.7)`;
}
hero.addEventListener('mousemove', shadow);