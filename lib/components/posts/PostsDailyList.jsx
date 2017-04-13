import { Components, getRawComponent, replaceComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import Posts from 'meteor/vulcan:posts';
import { Grid, Row, Col, Button } from 'react-bootstrap';


class BootPostsDailyList extends getRawComponent('PostsDailyList') {

  render() {
    const posts = this.props.results;
    const dates = this.getDateRange(this.state.afterLoaded, this.state.before);

    return (
      <div className="main">
        <Grid>
          <Row>
            <Col md={9}>
              <div className="posts-list">
                {dates.map((date, index) => <Components.PostsDay key={index} number={index} date={date} posts={this.getDatePosts(posts, date)} networkStatus={this.props.networkStatus} currentUser={this.props.currentUser} />)}
                {this.state.loading ?
                  <Components.PostsLoading />
                :
                <Button bsStyle="primary" block onClick={this.loadMoreDays}>
                  <FormattedMessage id="posts.load_more_days"/>
                </Button>
              }
              </div>
            </Col>
            <Col md={3}>
              <div className="sidebar">
                <Components.PostsListHeader/>
                <Components.Newsletter />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

replaceComponent('PostsDailyList', BootPostsDailyList);
