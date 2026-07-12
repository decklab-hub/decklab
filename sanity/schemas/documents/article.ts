import { defineField, defineType } from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Articles',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [
  {
    type: 'block',
    styles: [
      { title: 'Normal', value: 'normal' },
      { title: 'H2', value: 'h2' },
      { title: 'H3', value: 'h3' },
      { title: 'H4', value: 'h4' },
    ],
    lists: [
      { title: 'Bullet', value: 'bullet' },
      { title: 'Numbered', value: 'number' },
    ],
    marks: {
      decorators: [
        { title: 'Bold', value: 'strong' },
        { title: 'Italic', value: 'em' },
      ],
    },
  },

 {
  type: 'prosCons',
  options: {
    collapsible: true,
    collapsed: false,
  },
},

],
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'articleType',
      title: 'Article type',
      type: 'string',
      options: {
        list: [
          { title: 'News', value: 'news' },
          { title: 'Review', value: 'review' },
          { title: 'Comparison', value: 'comparison' },
          { title: 'Ranking', value: 'ranking' },
          { title: 'Guide', value: 'guide' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'featured',
      title: 'Featured article',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
    }),

    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'imageWithAlt',
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),

    defineField({
  name: 'faq',
  title: 'FAQ',
  type: 'array',
  of: [
    {
      type: 'faqItem',
    },
  ],
}),
  ],
})