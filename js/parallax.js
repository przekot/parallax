/**
 * Created by przekot on 16.03.2017.
 */

window.addEventListener('scroll', function () {

    var topDistance = window.pageYOffset;
    var layers = document.querySelectorAll("[data-type='parallax']");

    for(i=0;i<=layers.length-1;i++){
        var depth = layers[i].getAttribute('data-scroll');
        var movement = -(topDistance * depth);
        var translate3d = 'translate3d(0, ' + movement + 'px, 0)';
        layers[i].style.transform = translate3d;
    }


});