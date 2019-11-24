import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class PlayersFilter extends React.Component {
  state = {
    name: '',
    team: '',
    position: '',
    orderBy: {
      order: 'YARDS',
      direction: 'DESC'
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleOrderByChange = (event) => {
    const value = event.target.value;

    this.setState(state => {
      return {orderBy: {
        order: value,
        direction: state.orderBy.direction
      }}
    });
  }

  handleDirectionChange = (event) => {
    const value = event.target.value;

    this.setState(state => {
      return {orderBy: {
        order: state.orderBy.order,
        direction: value
      }}
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.refetch(10, null, this.state);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>    
        <Form.Row>
          <Form.Group as={Col} controlId="playersName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Name"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="playersTeam">
            <Form.Label>Team</Form.Label>
            <Form.Control
              name="team"
              type="text"
              placeholder="Team"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="playersPosition">
            <Form.Label>Position</Form.Label>
            <Form.Control
              name="position"
              type="text"
              placeholder="Position"
              onChange={this.handleChange}
            />
          </Form.Group>     
        </Form.Row> 
        <Form.Row>  
          <Form.Group as={Col} controlId="playersOrderBy">
            <Form.Label>Order by</Form.Label>
            <Form.Control as="select" name="order" onChange={this.handleOrderByChange}>
              <option value="YARDS">Total Rushing Yards</option>
              <option value="LONGEST_RUSH">Longest Rush</option>
              <option value="TOUCHDOWNS">Total Rushing Touchdowns</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="authorsOrderDirection" onChange={this.handleDirectionChange}>
            <Form.Label>Direction</Form.Label>
            <Form.Control as="select" name="direction">
              <option value="DESC">Descending</option>
              <option value="ASC">Ascending</option>
            </Form.Control>
          </Form.Group>

          <Col>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Form.Row>
      </Form>
    );
  }
}