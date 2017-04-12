/*
Browse to http://localhost:3000/welcome-page to view.
*/

import React from 'react';
import { registerComponent } from 'meteor/vulcan:core';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';

const WelcomePage = () => {
  return (
    <div>
      <Jumbotron className="section-components">
        <Grid>
          <Row>
            <Col md={8}>
              <div className="card">
                <h3 className="title">Sed a censore opprimenda est</h3>
                <p>Quae iam oratio non a philosopho aliquo, sed a censore opprimenda est. Negat esse eam, inquit, propter se expetendam                </p>
              </div>
            </Col>
            <Col md={4}>
              
            </Col>
          </Row>
        </Grid>
      </Jumbotron>

      <div className="main">
        <Grid>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec bene dicuntur, nec ego repugno, sed inter sese ipsa pugnant. Quae iam oratio non a philosopho aliquo, sed a censore opprimenda est. Negat esse eam, inquit, propter se expetendam. Quae cum magnifice primo dici viderentur, considerata minus probabantur. Quia nec honesto quic quam honestius nec turpi turpius. Duo Reges: constructio interrete.</p>
        </Grid>
      </div>
    </div>
  )
}

registerComponent('WelcomePage', WelcomePage);
