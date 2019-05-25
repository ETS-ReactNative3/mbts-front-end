import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';


// main styles
import './Profile.scss';

export default class Profile extends React.Component {

    render() {
        return (
            <div className="profile-wrapper">
              <div className="pr">
                  <Jumbotron>
                    <div className="sprite-box">

                    </div>
                    <p>
                      This is a simple hero unit, a simple jumbotron-style component for calling
                      extra attention to featured content or information.
                    </p>
                    <p>
                      <Button bsStyle="primary">Learn more</Button>
                    </p>
                  </Jumbotron>;
              </div>
              <div className="pr">
                  <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                      This is a simple hero unit, a simple jumbotron-style component for calling
                      extra attention to featured content or information.
                    </p>
                    <p>
                      <Button bsStyle="primary">Learn more</Button>
                    </p>
                  </Jumbotron>;
              </div>
              <div className="pr">
                  <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                      This is a simple hero unit, a simple jumbotron-style component for calling
                      extra attention to featured content or information.
                    </p>
                    <p>
                      <Button bsStyle="primary">Learn more</Button>
                    </p>
                  </Jumbotron>;
              </div>
              <div className="pr">
                  <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                      This is a simple hero unit, a simple jumbotron-style component for calling
                      extra attention to featured content or information.
                    </p>
                    <p>
                      <Button bsStyle="primary">Learn more</Button>
                    </p>
                  </Jumbotron>;
              </div>
            </div>
        );
    }

    getSingle
}
