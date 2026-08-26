import { type SchemaTypeDefinition } from 'sanity'
import { article } from './documents/article'
import { author } from './documents/author'
import { brand } from './documents/brand'
import { category } from './documents/category'
import { product } from './documents/product'
import { tag } from './documents/tag'
import { seo } from './objects/seo'
import { imageWithAlt } from './objects/imageWithAlt'
import { prosCons } from './objects/prosCons'
import { comparisonTable } from './objects/comparisonTable'
import { faqItem } from "./objects/faqItem";
import { review } from "./objects/review";
import { reviewScore } from "./objects/reviewScore";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    article,
    author,
    brand,
    category,
    imageWithAlt,
    product,
    prosCons,
    comparisonTable,
    faqItem,
    review,
    reviewScore,
    seo,
    tag,
  ],
}
