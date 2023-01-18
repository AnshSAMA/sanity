import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'heroText',
      title: 'Hero Text',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
