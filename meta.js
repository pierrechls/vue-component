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
    authorName: {
      type: 'string',
      required: false,
      message: 'Author name',
      default: 'Pierre Charles'
    },
    authorEmail: {
      type: 'string',
      required: false,
      message: 'Author email',
      default: 'contact@pierre-charles.com'
    },
    authorUrl: {
      type: 'string',
      required: false,
      message: 'Author URL',
      default: 'https://github.com/pierrechls/'
    },
    gitRepoAuthor: {
      type: 'string',
      required: false,
      message: 'Git repo author pseudo',
      default: 'pierrechls'
    },
    gitRepoName: {
      type: 'string',
      required: false,
      message: 'Git repo name',
      default: 'vue-component'
    },
    gitRepoUrl: {
      type: 'string',
      message: 'Git repo URL',
      default: 'https://github.com/pierrechls/vue-component/'
    },
    componentName: {
      type: 'string',
      required: true,
      message: 'Component name',
      default: 'vue-component'
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
