function main() {
    var eyeSize = 50;
    var pupilSize = 42;

    var eyeContainer = document.getElementById('eyeContainer');
    var eyes = document.querySelectorAll('.eye');
    var pupils = document.querySelectorAll('.pupil');
    var white = document.querySelector('.white');

    function init() {
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        handleResize();
        draw();
    }

    function handleResize() {
        eyeContainer.style.width = (eyeSize * 2) + 'px';
        eyeContainer.style.height = eyeSize + 'px';
    }

    function handleMouseMove(event) {
        var mouseX = event.pageX - window.pageXOffset;
        var mouseY = event.pageY - window.pageYOffset;

        moveEyes(mouseX, mouseY);
    }

    function handleScroll() {
        var scrollTop = window.pageYOffset;
        var scrollLeft = window.pageXOffset;

        eyeContainer.style.top = scrollTop + 'px';
        eyeContainer.style.left = scrollLeft + 'px';
    }

    function moveEyes(mouseX, mouseY) {
        var eyeCenterY = eyeContainer.offsetTop + eyeSize / 2;
        var eyeCenterX = eyeContainer.offsetLeft + eyeSize / 2;

        var deltaX = mouseX - eyeCenterX;
        var deltaY = mouseY - eyeCenterY;

        var angle = Math.atan2(deltaY, deltaX);
        var distance = Math.min(eyeSize / 2, Math.sqrt(deltaX ** 2 + deltaY ** 2));

        pupils.forEach(function (pupil) {
            pupil.style.top = (eyeSize / 2 - pupilSize / 2 + distance * Math.sin(angle)) + 'px';
            pupil.style.left = (eyeSize / 2 - pupilSize / 2 + distance * Math.cos(angle)) + 'px';
        });
    }

    function draw() {
        // Additional animations or updates can be added here
        requestAnimationFrame(draw);
    }

    window.addEventListener('load', init);
}