import { run, help, options } from 'runjs';

const build = () => {
  run('webpack');
};

const test = () => {
  const watch = options(this).watch ? '' : '--single-run';
  run(`karma start ${watch}`);
};

const lint = () => {
  run('eslint .');
};

const release = () => {
  run('git checkout master && git pull origin master && standard-version && git push --follow-tags origin master');
};

help(build, 'Build JS files');
help(test, {
  description: 'Run unit tests using Karma',
  options: {
    watch: 'Run tests in a watch mode',
  },
});
help(lint, 'Run lint check with eslint');
help(release, 'Generate and push a new tag and update changelog');

export default {
  build,
  test,
  lint,
  release,
};
