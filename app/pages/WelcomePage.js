import React from 'react';
import { Link } from 'react-router';

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Gallery from './components/Gallery';

import { SketchField, Tools } from 'react-sketch';

const styles = {
  card: {
    textAlign: "center",
    marginBottom: "100px"
  },
  cardText: {
    overflow: "hidden",
    paddingLeft: "100px",
    paddingRight: "100px"
  }
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
        lineWidth={3}
      />
    )
  }

  save = () => {
    let drawings = this.state.drawings;
    drawings.push(this._sketch.toDataURL());
    this.setState({drawings: drawings});
  }

  render() {
    return (
      <div>
        <Card style={styles.card}>

          <CardTitle title="Welcome!" subtitle="Draw Anything Below!"/>

          <CardText style={styles.cardText}>
            <div style={{borderStyle: "dotted"}}>
              {this.renderSketchField()}
            </div>
          </CardText>

          <CardActions>
            <RaisedButton label="Save" onClick={this.save}/>
            <Link to={'secondpage'}>
              <RaisedButton label="Go to Second Page" primary={true}/>
            </Link>
          </CardActions>
        </Card>

        <Gallery drawings={this.state.drawings} />

      </div>
    );
  }
}
