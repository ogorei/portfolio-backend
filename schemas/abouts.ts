export default {
    name:'abouts',
    title:'Abouts',
    type:'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
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