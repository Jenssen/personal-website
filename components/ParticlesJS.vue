<template>
  <div id="particles-js"/>
</template>

<script>
export default {
  name: 'ParticlesJS',
  mounted() {
    require('particles.js')
    this.$nextTick(() => {
      this.initParticlesJS()
    })
  },
  methods: {
    initParticlesJS() {
      /* eslint-disable */
      particlesJS('particles-js', {
        'particles': {
          'number': {
            'value': 130,
            'density': {
              'enable': true,
              'value_area': 1000
            }
          },
          'color': {
            'value': '#ffffff'
          },
          'shape': {
            'type': 'circle',
            'stroke': {
              'width': 0,
              'color': '#000000'
            },
            'polygon': {
              'nb_sides': 4
            },
            'image': {
              'src': 'img/github.svg',
              'width': 100,
              'height': 100
            }
          },
          'opacity': {
            'value': 0.8,
            'random': false,
            'anim': {
              'enable': true,
              'speed': 0.1,
              'opacity_min': 0.0,
              'sync': false
            }
          },
          'size': {
            'value': 2,
            'random': true,
            'anim': {
              'enable': false,
              'speed': 1,
              'size_min': 0.1,
              'sync': true
            }
          },
          'line_linked': {
            'enable': false,
            'distance': 80,
            'color': '#ffffff',
            'opacity': 0.2,
            'width': 1
          },
          'move': {
            'enable': true,
            'speed': 1,
            'direction': 'none',
            'random': true,
            'straight': false,
            'out_mode': 'out',
            'bounce': false,
            'attract': {
              'enable': true,
              'rotateX': 600,
              'rotateY': 1200
            }
          }
        },
        'interactivity': {
          'detect_on': 'window',
          'events': {
            'onhover': {
              'enable': true,
              'mode': 'grab'
            },
            'onclick': {
              'enable': false,
              'mode': 'push'
            },
            'resize': true
          },
          'modes': {
            'grab': {
              'distance': 100,
              'line_linked': {
                'opacity': 0.5
              }
            },
            'bubble': {
              'distance': 120,
              'size': 24,
              'duration': 2,
              'opacity': 0.7,
              'speed': 3
            },
            'repulse': {
              'distance': 48,
              'duration': 0.4
            },
            'push': {
              'particles_nb': 4
            },
            'remove': {
              'particles_nb': 2
            }
          }
        },
        'retina_detect': true
      })
    }
  }

}
</script>

<style>
#particles-js {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #15161a;
  z-index: -999;
}
</style>
