module.exports = {
  javascript: {
    files: ['_assets/js/**/*.js'],
    tasks: ['concat:javascript']
  },
  css: {
    files: ['_assets/css/**/*.scss'],
    tasks: ['sass', 'concat:css']
  },
  images: {
    files: ['_assets/images/**/*'],
    tasks: ['copy:images']
  }
}
