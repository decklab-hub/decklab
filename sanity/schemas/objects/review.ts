import { defineField, defineType } from "sanity";

export const review = defineType({
  name: "review",
  title: "⭐ Ocena DeckLab",
  type: "object",

  fields: [
    defineField({
      name: "overall",
      title: "Ocena końcowa",
      type: "number",
      validation: (Rule) => Rule.required().min(0).max(10),
    }),

    defineField({
  name: "scores",
  title: "Oceny szczegółowe",
  type: "array",
  of: [
    {
      type: "reviewScore",
    },
  ],
}),

    defineField({
      name: "recommendFor",
      title: "👍 Polecamy dla",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "notRecommendFor",
      title: "👎 Nie polecamy dla",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "summary",
      title: "Werdykt",
      type: "text",
      rows: 4,
    }),
  ],

  preview: {
    select: {
      overall: "overall",
    },

    prepare({ overall }) {
      return {
        title: `Ocena: ${overall ?? "-"} / 10`,
      };
    },
  },
});