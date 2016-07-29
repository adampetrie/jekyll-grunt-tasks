module.exports = {
  fonts: {
    files: [{
      expand: true,
      cwd: 'bower_components/',
      src: '<%= sources.fonts %>',
      dest: 'public/assets/fonts/',
      flatten: true
    }]
  },
  images: {
    files: [{
      expand: true,
      cwd: '_assets/images',
      src: ['**'],
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
