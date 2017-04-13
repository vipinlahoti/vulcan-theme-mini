import { replaceComponent } from 'meteor/vulcan:core';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'react-bootstrap';


const BootPostsLoadMore = ({loadMore, count, totalCount}) => {
  return (
    <Button bsStyle="primary" block onClick={e => {e.preventDefault(); loadMore();}}>
      <FormattedMessage id="posts.load_more"/> {totalCount ? <span className="load-more-count">{`(${count}/${totalCount})`}</span> : null}
    </Button>
  )
}

BootPostsLoadMore.displayName = "BootPostsLoadMore";

replaceComponent('PostsLoadMore', BootPostsLoadMore);
