const { run, help, options } = require('runjs');

function build() {
  const env = options(this).env === 'dev' ? 'development' : 'production';
  run(`webpack --mode=${env}`);
}

function test() {
  const watch = options(this).watch ? '' : '--single-run';
  run(`karma start ${watch}`);
}

function lint() {
  const fix = options(this).fix ? '--fix' : '';
  run(`eslint . ${fix}`);
}

function release() {
  run('git checkout master && git pull origin master && standard-version && git push --follow-tags origin master');
}

help(build, {
  description: 'Build JS files',
  options: {
    env: 'Target environment, defaults to production',
  },
});

help(test, {
  description: 'Run unit tests using Karma',
  options: {
    watch: 'Run tests in a watch mode',
  },
});

help(lint, {
  description: 'Run lint check with Eslint',
  options: {
    fix: 'Automatically fix errors whenever possible',
  },
});

help(release, 'Generate and push a new tag and update changelog');

module.exports = {
  build,
  test,
  lint,
  release,
};
