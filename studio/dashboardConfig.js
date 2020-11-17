export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb388a51b396f63ac031579',
                  title: 'Sanity Studio',
                  name: 'landing-pages-v-studio',
                  apiId: '170fe557-2ce0-4628-a44f-2060f4da863c'
                },
                {
                  buildHookId: '5fb388a56b7fbe6cbac73d93',
                  title: 'Landing pages Website',
                  name: 'landing-pages-v',
                  apiId: '44ed4db2-61b0-4c14-81c7-ff86f0883f01'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/plazma1745/landing-pages-v',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://landing-pages-v.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
