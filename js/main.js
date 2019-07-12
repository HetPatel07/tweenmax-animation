var main = document.getElementById("mainHeading");
TweenMax.to(main, 1.5, {
    x: 0,
    opacity: 1,
    ease: Circ.easeOut
});

TweenMax.to('button', 2, {
    opacity: 1,
    ease: Circ.easeOut
});
$('#btn').click(function () {

    TweenMax.to('#inner', 2, {
        opacity: 1,
        height: '100%',
        ease: Circ.easeOut,

    });
    TweenMax.to('.panel', 2, {
        opacity: 1,
        scale: 1,
        ease: Elastic.easeOut.config(1, 0.3),
        delay: '1',
    });
    TweenMax.to('img', 2, {
        opacity: 1,
        y: '200px',
        scale: 1,
        ease: Elastic.easeOut.config(1, 0.3),
        delay: '1',
    });
    TweenMax.to('p', 2, {
        opacity: 1,
        y: '220px',
        scale: 1,
        ease: Elastic.easeOut.config(1, 0.3),
        delay: '1.5',
    });
})
