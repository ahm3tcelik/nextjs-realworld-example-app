import React from 'react';
import { HeadTagConstants } from '../../constants/head_tag_constants';
import {
    IMeta,
    IMetaOpenGraph,
    IMetaPrimary,
    IMetaTwitter
} from '../../types';

const MetaPrimary = (prop: IMetaPrimary) => {
    return (
        <>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={prop.keywords} />
            <meta name='title' content={prop.title} />
            <meta name='description' content={prop.description} />
            <meta name="robots" content={prop.robots} />
            <meta httpEquiv="Content-Type" content={prop.contentType} />
            <meta name="revisit-after" content={prop.revisitAfter} />
            <meta name='author' content={prop.author} />
        </>
    );
}

const MetaOpenGraph = (prop: IMetaOpenGraph) => {
    return (
        <>
            { prop.type && <meta property="og:type" content={prop.type} />}
            { prop.url && <meta property="og:url" content={prop.url} />}
            { prop.title && <meta property="og:title" content={prop.title} />}
            { prop.description && <meta property="og:description" content={prop.description} />}
            { prop.image && <meta property="og:image" content={prop.image} />}
        </>
    )
}

const MetaTwitter = (prop: IMetaTwitter) => {
    return (
        <>
            { prop.largeImage && <meta property="twitter:card" content={prop.largeImage} />}
            { prop.url && <meta property="twitter:url" content={prop.url} />}
            { prop.title && <meta property="twitter:title" content={prop.title} />}
            { prop.description && <meta property="twitter:title" content={prop.description} />}
            { prop.image && <meta property="twitter:image" content={prop.image} />}
        </>
    )
}

const Meta = (props: IMeta) => {
    return (
        <>
            {props.metaPrimary && <MetaPrimary  {...props.metaPrimary} />}
            {props.metaOpenGraph && <MetaOpenGraph  {...props.metaOpenGraph} />}
            {props.metaTwitter && <MetaTwitter  {...props.metaTwitter} />}
        </>
    );
}


MetaOpenGraph.defaultProps = HeadTagConstants.DEFAULT_OPENGRAPH_META;
MetaPrimary.defaultProps = HeadTagConstants.DEFAULT_PRIMARY_META;

export default Meta;