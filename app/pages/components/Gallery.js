import React from "react";

import { GridList, GridTile } from 'material-ui/GridList';
import { Card, CardTitle, CardText } from 'material-ui/Card'

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    card: {
        textAlign: "center",
        marginBottom: "100px"
    },
    gridList: {
        width: "100%",
        height: 400,
        overflowY: 'auto'
    }
}

const renderDrawing = (drawing, index) => {
    return (
        <GridTile key={index} title={`Saved: ${new Date()}`}>
            <img src={drawing}/>
        </GridTile>
    );
}

export default (props) => {
    return (
        <Card style={styles.card}>
            <CardTitle title="Gallery"/>
            <CardText>
                <div style={styles.root}>
                    <GridList cellHeight={200} style={styles.gridList}>
                        {props.drawings.map(renderDrawing)}
                    </GridList>
                </div>
            </CardText>
        </Card>
    )
}