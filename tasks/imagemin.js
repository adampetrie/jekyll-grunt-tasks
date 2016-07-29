var mozjpeg = require('imagemin-mozjpeg');

module.exports = {
  jpg: {
    options: {
      optimizationLevel: 3,
      progressive: true,
      use: [mozjpeg()]
    },
    files: [{
      expand: true,
      cwd: '_assets/images',
      src: ['**/*.jpg'],
      dest: 'public/assets/images/'
    },
    {
      expand: true,
      cwd: 'bower_components/lightbox2/dist/images',
      src: ['**'],
      dest: 'public/assets/images/'
    }]
  }
}
