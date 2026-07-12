import { defineField, defineType } from "sanity";

export const reviewScore = defineType({
  name: "reviewScore",
  title: "Ocena szczegółowa",
  type: "object",

  fields: [
    defineField({
      name: "label",
      title: "Nazwa",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "score",
      title: "Ocena",
      type: "number",
      validation: (Rule) => Rule.required().min(0).max(10),
    }),
  ],

  preview: {
    select: {
      title: "label",
      score: "score",
    },

    prepare({ title, score }) {
      return {
        title,
        subtitle: `${score ?? "-"} / 10`,
      };
    },
  },
});