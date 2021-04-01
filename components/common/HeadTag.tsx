import React from 'react';
import Head from 'next/head';
import { HeadTagConstants } from '../../constants/head_tag_constants';

type IProps = {
    title?: string;
    children?: React.ReactNode;
    icon?: string;
};

/** -- USAGE --
 * const metaPrimary: IMetaPrimary = {
 *  title: "About",
 *  keywords: "about, About",
 *  author: "ahmett"
 * };
 * 
 * const metaTags: IMeta = {
 *  metaPrimary: metaPrimary
 * };
*/

/**
 * ``` jsx
 * <HeadTag title="Title Name">
 *   <Meta {...metaTags} />
 * </HeadTag>
 * ```
*/
const HeadTag = (props: IProps) => {
    return (
        <Head>
            <title>{HeadTagConstants.PAGE_TITLE_PREFIX}{props.title}{HeadTagConstants.PAGE_TITLE_POSTFIX}</title>
            <link rel="icon" href={props.icon} />
            {props.children}
        </Head>
    );
}

HeadTag.defaultProps = {
    icon: '/favicon.ico'
}

export default HeadTag;