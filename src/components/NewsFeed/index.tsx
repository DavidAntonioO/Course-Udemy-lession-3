import React from 'react';
import { withTrackClick } from '../../hoc/withTrackClick';
import { NewsFeedProps } from './interface';

const NewsFeed: React.FC<NewsFeedProps> = ({click}) => {
    return(
        <>
        <h1>NewsFeed Component</h1>
        <h2>Click: {click}</h2>
        </>
    )
}

export default withTrackClick(NewsFeed);