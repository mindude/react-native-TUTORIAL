import React, { Component } from 'react';
import { View, Animated, PanResponder } from 'react-native';

class Deck extends Component {
  constructor(props){
    super(props);

    let panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => {},
      onPanResponderMove: (event, gesture) => {
        console.log(gesture);
      },
      onPanResponderRelease: () => {}
    });

    this.state = { panResponder };
  }

  renderCards() {
    return this.props.data.map(item => {
      return this.props.renderCard(item);
    });
  }

  render() {
    return (
      <View
        {...this.state.panResponder.panHadlers}
      >
        {this.renderCards()}
      </View>
    )
  }
}

export default Deck;