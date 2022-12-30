export default {
    name:'works',
    title:'Works',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'works',
            title:'Works',
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