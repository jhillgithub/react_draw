import React from 'react'
import {Link} from 'react-router'

import {Row, Col} from 'react-grid-system'

import {GridList, GridTile} from 'material-ui/GridList';
import {Card, CardTitle, CardText, CardActions, CardMedia} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

import {SketchField, Tools} from 'react-sketch';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
    gridList: {
    width: "100%",
    height: 400,
    overflowY: 'auto',
  },
}

export default class Welcome extends React.Component {

  constructor() {
    super();

    this.state = {
      drawings: []
    };
  }

  renderSketchField() {
    return (
      <SketchField
      name='sketch'
      className='canvas-area'
      ref={(c) => this._sketch = c}
      width='100%'
      height='400px'
      tool={Tools.Pencil}
      color='black'
      lineWidth={3}/>)
  }

  save = () => {
    let drawings = this.state.drawings;
    drawings.push(this._sketch.toDataURL());
    this.setState({drawings: drawings});
  }


  renderDrawing = (drawing, index) => {
    return (
        <GridTile key={index} title={`Saved: ${new Date()}`}>
          <img src={drawing} />
        </GridTile>
    );
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <Card style={{textAlign: "center", marginBottom: "100px"}}>
              <CardTitle title="Welcome!" subtitle="Draw Anything Below!"/>
              <CardText
                style={{overflow:"hidden", paddingLeft: "100px", paddingRight: "100px"}}>
                <div style={{overflow:"hidden", borderStyle: "dotted"}}>
                  {this.renderSketchField()}
                </div>
              </CardText>
              <CardActions>
                <RaisedButton label="Save" onClick={this.save} />
                <Link to={'secondpage'}>
                  <RaisedButton label="Go to Second Page" primary={true}/>
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card style={{textAlign: "center", marginBottom: "100px"}}>
                <CardTitle title="Gallery" />
              <CardText>
                <div style={styles.root}>
                  <GridList
                    cellHeight={200}
                    style={styles.gridList}
                  >
                    {this.state.drawings.map(this.renderDrawing)}
                  </GridList>
                </div>
              </CardText>
            </Card>
          </Col>
        </Row>
        
      </div>
    );
  }
}
