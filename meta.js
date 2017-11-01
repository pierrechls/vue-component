module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'An awesome vue component'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    componentName: {
      type: 'string',
      required: true,
      message: 'Component name',
      default: 'VueComponent'
    },
    libraryFileName: {
      type: 'string',
      required: true,
      message: 'Library file name',
      default: 'vue-component.min.js'
    }
  },
  helpers: {
    chandeDirectory: () => {
      return (process.argv[3] === undefined || process.argv[3] === '.')
        ? ''
        : `  cd ${process.argv[3]}\n`
    }
  },
  completeMessage: 'To get started:\n\n{{chandeDirectory}}  npm install\n  npm run dev\n  npm run build\n\nDocumentation can be found at https://github.com/pierrechls/vue-component'
