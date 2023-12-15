function main() {

    /* Following Eyes 2003 - kurt.grigg@yahoo.co.uk (Updated) */

    var eye = 50; //Eye size in pixels

    if (eye % 2 == 0){
        eye++;
    }
    var eye5 = eye / 2 | 0;
    var pup = 42 * eye / 100; 
    if (pup % 2 == 0){
        pup++;
    }
    var pup5 = (pup - 3) / 2;
    if (pup5 % 2 == 1){
        pup5++;
    }
    var grng = (eye - pup) / 2; 
    if (grng % 2 == 1){
        grng++;
    }
    var rng = eye5 / grng; 
    var d = document;
    var my = 0;
    var mx = 0;
    var fy = 0;
    var fx = 0;
    var ros = eye + 2;
    var scy = 0;
    var scx = 0;
    var mls = 1000 / 60;
    var lastEx = performance.now();
    var h, w, dy, dx, chy, chx, d1, d2, a1, a2, le, re, yec, xec;

    var cstyle =
        'position:absolute;top:0px;left:0px;width:'+(ros*2)+'px;height:'+ros+'px;'
        +'margin:0px;border:none;padding:0px;display:inline-block;';

    var estyle =
        'position:absolute;top:0px;left:0px;height:'+eye+'px;'
        +'width:'+eye+'px;background-color:#ffffff;'
        +'border-radius: 50%;border: 1px solid #000000;'
        +'box-shadow: inset -'+eye/3+'px -'+eye/3+'px '+eye/2+
        'px -'+(eye/10|0)+'px rgba(0,0,0,0.16);';

    var pstyle =
        'position:absolute;top:45%;left:45%;height:'+pup+'px;'
        +'width:'+pup+'px;background-color:#000000;border-radius: 50%;';

    var wstyle =
        'position:absolute;top:16%;left:16%;width:20%;height:20%;'
        +'background:#ffffff;border-radius:50%;'
        +'transform: skewX(-15deg) skewY(-18deg);';

    var c = d.createElement('div');
    var e1 = d.createElement('div');
    var e2 = d.createElement('div');
    var p1 = d.createElement('div');
    var p2 = d.createElement('div');
    var w1 = d.createElement('div');
    var w2 = d.createElement('div');

    c.setAttribute('style', cstyle);
    e1.setAttribute('style', estyle);
    e2.setAttribute('style', estyle + 'left:'+ros+'px;');
    p1.setAttribute('style', pstyle);
    p2.setAttribute('style', pstyle);
    w1.setAttribute('style', wstyle);
    w2.setAttribute('style', wstyle);

    d.body.appendChild(c);
    c.appendChild(e1);
    c.appendChild(e2);
    d.body.appendChild(p1);
    d.body.appendChild(p2);
    p1.appendChild(w1);
    p2.appendChild(w2);

    function scrl(v) {
        var y, x;
        y = window.pageYOffset;
        x = window.pageXOffset;
        return (v == 0) ? y : x;
    }

    function initscroll() {
        scy = scrl(0);
        scx = scrl(1);
    }

    function windims() {
        var tmp = d.documentElement.clientWidth;
        var ch = (typeof tmp == 'number');
        var sc = (ch) ? window.innerWidth - tmp : 0;
        h = window.innerHeight;
        w = window.innerWidth - sc;
    }

    function mouse(e) {
        if (!e) {
            e = window.event;
        }
        my = e.pageY - window.pageYOffset;
        mx = e.pageX - window.pageXOffset;
    }

    function ani() {
        //Keep eyes on screen.
        chy = Math.floor(fy - (ros*1.2));
        if (chy <= 0) {
            chy = 0;
        }
        if (chy >= h - ros) {
            chy = h - ros;
        }

        chx = Math.floor(fx - ros);
        if (chx <= 0) {
            chx = 0;
        }
        if (chx >= w - (ros*2)) {
            chx = w - (ros*2);
        }

        //Eyeball centres.
        yec = chy + eye5;
        xec = chx + eye5;

        d1 = Math.sqrt((my - yec) * (my - yec) + (mx - xec) * (mx - xec));
        d2 = Math.sqrt((my - yec) * (my - yec) + (mx - (xec + ros)) * (mx - (xec + ros)));

        a1 = Math.atan2(my - yec, mx - xec) * 180 / Math.PI;
        a2 = Math.atan2(my - yec, mx - (xec + ros)) * 180 / Math.PI;

        le = (d1 < eye5) ? d1 / rng : grng;
        re = (d2 < eye5) ? d2 / rng : grng;

        c.style.top = chy + scy + 'px';
        c.style.left = chx + scx + 'px';

        p1.style.top = yec - pup5 + le * Math.sin(a1 * Math.PI / 180) + scy + 'px';
        p1.style.left = xec - pup5 + le * Math.cos(a1 * Math.PI / 180) + scx + 'px';

        p2.style.top = yec - pup5 + re * Math.sin(a2 * Math.PI / 180) + scy + 'px';
        p2.style.left = (xec + ros) - pup5 + re * Math.cos(a2 * Math.PI / 180) + scx + 'px';
    }

    function move() {
        dy = fy += (my - fy) * 0.05;
        dx = fx += (mx - fx) * 0.05;
        ani();
    }

    function init() {
        windims();
        draw();
    }

    function draw() {
        var now = performance.now();
        if ((now - lastEx) > (mls)) {
            move();
            lastEx = performance.now();
        }
        requestAnimationFrame(draw);
    }

    window.addEventListener("resize", windims, false);
    window.addEventListener("load", init, false);
    d.addEventListener("mousemove", mouse, false);
    window.addEventListener("scroll", initscroll, false);

}