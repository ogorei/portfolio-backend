export default {
    name:'testimonials',
    title:'testimonials',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'company',
            title:'Company',
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