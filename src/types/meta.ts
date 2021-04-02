export type IMeta = {
    metaPrimary?: IMetaPrimary
    metaOpenGraph?: IMetaOpenGraph
    metaTwitter?: IMetaTwitter
  }
  
  export type IMetaPrimary = {
    title?: string
    description?: string
    keywords?: string
    language?: string
    robots?: string
    contentType?: string
    revisitAfter?: string
    author?: string
  }
  
  export type IMetaOpenGraph = {
    type?: string
    url?: string
    title?: string
    description?: string
    image?: string
  }
  
  export type IMetaTwitter = {
    largeImage?: string
    url?: string
    title?: string
    description?: string
    image?: string
  }