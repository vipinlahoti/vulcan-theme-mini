import { Components, getRawComponent, registerComponent, withList, withCurrentUser } from 'meteor/vulcan:core';
import React from 'react';
import Posts from 'meteor/vulcan:posts';
import { Alert } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';


const Error = ({error}) => <Alert className="flash-message" bsStyle="danger">{error.message}</Alert>

const grPostsList = (props) => {

  const {results, loading, count, totalCount, loadMore, showHeader = true, networkStatus, currentUser, error, terms} = props;
  const loadingMore = networkStatus === 2;

  if (results && results.length) {

    const hasMore = totalCount > results.length;

    return (
      <div>
        {showHeader ? <Components.PostsViews /> : null}
        <Row>
          <Col md={9}>
            <div className="card-columns posts-list">
              {error ? <Error error={error} /> : null }
              {results.map(post => <Components.PostsItem post={post} key={post._id} currentUser={currentUser} terms={terms} />)}
              {hasMore ? (loadingMore ? <Components.PostsLoading/> : <Components.PostsLoadMore loadMore={loadMore} count={count} totalCount={totalCount} />) : null }
            </div>
          </Col>
          <Col md={3}>
            {showHeader ? <Components.CategoriesList /> : null}
          </Col>
        </Row>
      </div>
    )
  } else if (loading) {
    return (
      <div>
        {showHeader ? <Components.PostsViews /> : null}
        <Row>
          <Col md={9}>
            <div className="card-columns posts-list">
              {error ? <Error error={error} /> : null }
              <div className="posts-list-content">
                <Components.PostsLoading/>
              </div>
            </div>
          </Col>
          <Col md={3}>
            {showHeader ? <Components.CategoriesList /> : null}
          </Col>
        </Row>
      </div>
    )
  } else {
    return (
      <div>
        {showHeader ? <Components.PostsViews /> : null}
        <Row>
          <Col md={9}>
            <div className="card-columns posts-list">
              {error ? <Error error={error} /> : null }
              <div className="posts-list-content">
                <Components.PostsNoResults/>
              </div>
            </div>
          </Col>
          <Col md={3}>
            {showHeader ? <Components.CategoriesList /> : null}
          </Col>
        </Row>
      </div>
    )  
  }
  
};

grPostsList.displayName = "grPostsList";

grPostsList.propTypes = {
  results: React.PropTypes.array,
  terms: React.PropTypes.object,
  hasMore: React.PropTypes.bool,
  loading: React.PropTypes.bool,
  count: React.PropTypes.number,
  totalCount: React.PropTypes.number,
  loadMore: React.PropTypes.func,
  showHeader: React.PropTypes.bool,
};


const options = {
  collection: Posts,
  queryName: 'postsListQuery',
  fragmentName: 'PostsList',
};

registerComponent('PostsList', grPostsList, withCurrentUser, [withList, options]);