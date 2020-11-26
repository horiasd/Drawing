window.addEventListener('load', () =>{
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    const colorPicker = document.getElementById('colorpicker');
    const eraseBtn = document.getElementById('erase');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let painting = false;
    function startPosition(e) {
        painting = true;
        draw(e);
    }
    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }

    function changeColor(e) {
        ctx.strokeStyle = e.target.value;
    }

    function erase(e) {
        ctx.strokeStyle = '#FFFFFF';
    }

    function draw(e) {
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
    colorPicker.addEventListener('change', changeColor, false);
    eraseBtn.addEventListener('click',erase);

});

//maybe
/*window.addEventListener('resize', () =>{
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});*/
