import { defineField, defineType } from "sanity";

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ",
  type: "object",

  fields: [
    defineField({
      name: "question",
      title: "Pytanie",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "answer",
      title: "Odpowiedź",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "question",
    },
  },
});