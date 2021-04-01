import { IMetaOpenGraph, IMetaPrimary } from '../types';

export class HeadTagConstants {
    static readonly PAGE_TITLE_PREFIX = 'Ahmet | '; // `Ahmet | ${title}`
    static readonly PAGE_TITLE_POSTFIX = ' | Ahmet'; // `${title} | Ahmet`

    static readonly DEFAULT_PRIMARY_META: IMetaPrimary = {
        keywords: 'full stack developer, mobile application developer, flutter developer, Ahmet Çelik',
        title: 'Software Engineer | Ahmet ÇELİK',
        description: 'Kirklareli University Software Engineering Student',
        author: 'ahm3tcelik',
        language: 'English',
        contentType: 'text/html; charset=utf-8',
        robots: 'index, follow',
        revisitAfter: '5 days'
    }

    static readonly DEFAULT_OPENGRAPH_META: IMetaOpenGraph =  {
        type: 'website'
    }
}