const falling = {
    "particles": {
        "number": {
            "value": 22,
            "density": {
                "enable": false,
                "value_area": 400
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type":  "image",
            "image": {
                "src": "./assets/img/star.png",
                "height": 100,
                "width": 10
            },
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
        },
        "opacity": {
            "value": 1,
            "anim": {
                "enable": true,
                "speed": 9,
                "opacity_min": 0.4,
                "sync": false
            }
        },
        "size": {
            "value": 6,
            "random": true,
            "anim": {
                "enable": true,
                "speed": .5,
                "size_min": .3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": .5,
            "direction": "bottom",
            "random": true,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": false
        }
    },
    "retina_detect": true
}

particlesJS("falling", falling)