import React, { Component } from 'react';
import { View, Animated, PanResponder } from 'react-native';

class Deck extends Component {

  constructor(props){
    super(props);

    let position = new Animated.ValueXY();
    let panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => {},
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx , y: gesture.dy })
      },
      onPanResponderRelease: () => {}
    });

    this.state = { panResponder, position };
  }

  renderCards() {
    return this.props.data.map(item => {
      return this.props.renderCard(item);
    });
  }

  render() {
    return (
      <Animated.View
        style={this.state.position.getLayout()}
        {...this.state.panResponder.panHadlers}
      >
        {this.renderCards()}
      </Animated.View>
    )
  }
}

export default Deck;
