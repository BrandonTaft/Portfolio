const falling = {
    "particles": {
        "number": {
            "value": 35,
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type":  "star",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
        },
        "opacity": {
            "value": .9,
            "anim": {
                "enable": true,
                "speed": .5,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": .6,
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