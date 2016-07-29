module.exports = {
  default: {
    options: {
      style: 'expanded',
      loadPath: '<%= sources.sass %>',
    },
    files: {
      'public/assets/css/style.css': '_assets/css/style.scss'
    }
  }
}
