import { defineType, defineField } from 'sanity'

export const comparisonTable = defineType({
  name: 'comparisonTable',
  title: 'Comparison table',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      title: 'Table title',
      type: 'string',
    }),

    defineField({
      name: 'productA',
      title: 'Product A',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'productB',
      title: 'Product B',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'rows',
      title: 'Rows',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'feature',
              title: 'Feature',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'valueA',
              title: 'Product A value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'valueB',
              title: 'Product B value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
})