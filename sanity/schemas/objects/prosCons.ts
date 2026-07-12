import { defineField, defineType } from "sanity";

export const prosCons = defineType({
  name: "prosCons",
  title: "👍 Plusy i minusy",
  type: "object",

  fields: [
    defineField({
      name: "pros",
      title: "Plusy",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "cons",
      title: "Minusy",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "👍 Plusy i minusy",
      };
    },
  },
});