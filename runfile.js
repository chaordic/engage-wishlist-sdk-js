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

help(build, 'Build JS files');
help(test, {
  description: 'Run unit tests using Karma',
  options: {
    watch: 'Run tests in a watch mode',
  },
});
help(lint, 'Run lint check with eslint');

export default {
  build,
  test,
  lint,
};
