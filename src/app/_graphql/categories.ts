export const PRODUCT_CATEGORIES = `categories {
  title
  id
  breadcrumbs {
    id
    label
  }
}`

export const CATEGORIES = `
query {
  Categories {
    docs {
      title
      id
      media {
        alt
        url
        width
        height
      }
    }
  }
}
`