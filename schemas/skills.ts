export default {
    name:'skills',
    title:'Skills',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'skill',
            title:'Skill',
            type:'string'
        },
        {
            name:'image',
            title:'Image',
            type:'image',
            options:{
                hotspot: true
            }
            
        }
    ]
}