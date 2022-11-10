import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import React from 'react';



export const ParticlesBack = () => {
    const particlesInit = async (main: any) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };
    return (
       <Particles
           id="tsparticles"
           init={particlesInit}

           options={{
               "fullScreen": {
                   "enable": true,
                   "zIndex": 1
               },
               "particles": {
                   "number": {
                       "value": 34,
                       "density": {
                           "enable": true,
                           "value_area": 1122.388442605866
                       }
                   },
                   "color": {
                       "value": "#00a054"
                   },
                   "shape": {
                       "type": "circle",
                       "stroke": {
                           "width": 0,
                           "color": "#000000"
                       },
                       "polygon": {
                           "nb_sides": 5
                       },
                       "image": {
                           "src": "img/github.svg",
                           "width": 100,
                           "height": 100
                       }
                   },
                   "opacity": {
                       "value": 0.03945738208161363,
                       "random": true,
                       "anim": {
                           "enable": true,
                           "speed": 0.08120772123013452,
                           "opacity_min": 0.016241544246026904,
                           "sync": false
                       }
                   },
                   "size": {
                       "value": 24.05118091298284,
                       "random": true,
                       "anim": {
                           "enable": false,
                           "speed": 4.872463273808071,
                           "size_min": 0.1,
                           "sync": false
                       }
                   },
                   "line_linked": {
                       "enable": true,
                       "distance": 150,
                       "color": "#ffffff",
                       "opacity": 1,
                       "width": 2.0517838682439087
                   },
                   "move": {
                       "enable": true,
                       "speed": 1,
                       "direction": "none",
                       "random": false,
                       "straight": false,
                       "out_mode": "out",
                       "bounce": false,
                       "attract": {
                           "enable": false,
                           "rotateX": 240.5118091298284,
                           "rotateY": 400.8530152163807
                       }
                   }
               },
               "interactivity": {
                   "detect_on": "canvas",
                   "events": {
                       "onhover": {
                           "enable": true,
                           "mode": "grab"
                       },
                       "onclick": {
                           "enable": false,
                           "mode": "push"
                       },
                       "resize": true
                   },
                   "modes": {
                       "grab": {
                           "distance": 267.9854800594439,
                           "line_linked": {
                               "opacity": 0.542932824402363
                           }
                       },
                       "bubble": {
                           "distance": 400,
                           "size": 40,
                           "duration": 2,
                           "opacity": 8,
                           "speed": 3
                       },
                       "repulse": {
                           "distance": 200,
                           "duration": 0.4
                       },
                       "push": {
                           "particles_nb": 4
                       },
                       "remove": {
                           "particles_nb": 2
                       }
                   }
               },
               "retina_detect": true
           }}
       />
    );
};

export default Particles;