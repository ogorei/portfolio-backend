export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
    
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'link',
        title: 'Project Link',
        type: 'string',
      },
      {
        name: 'codeLink',
        title: 'Code Link',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
   
      {
        name: 'tags',
        title: 'Tags',
       type:'array',
       of: [
         {
           name:'tag',
           title:'Tag',
           type:'string'
         }
       ]
      },
      {
        name: 'skillIcons',
        title: 'Skill Icons',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'skills' }],
            options: {
              filter: 'defined(icon)'
            }
          }
        ]
      },
     
    ],
  };