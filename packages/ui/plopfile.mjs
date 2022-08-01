export default function (plop) {
  plop.setHelper('upperCase', (txt) => txt.toUpperCase());
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'controller name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: 'components/{{name}}/{{properCase name}}.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: 'components/{{name}}/style/index.tsx',
        templateFile: 'templates/style.index.tsx.hbs',
      },
      {
        type: 'add',
        path: 'components/{{name}}/style/{{name}}.scss',
        templateFile: 'templates/style.index.scss.hbs',
      },
    ],
  });
}
