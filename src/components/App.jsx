import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  positiveFeed = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  neutralFeed = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  negativeFeed = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback(){
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage(){
    const { good, bad, neutral } = this.state;
    return Math.round((good / (good + bad + neutral)) * 100);
  }


  render(){
    return (
    <div>
     <Section title="Please leave feedback">
          <FeedbackOptions
            positive={this.positiveFeed}
            negative={this.negativeFeed}
            neutral={this.neutralFeed}
          />
        </Section>
        {this.countTotalFeedback() === 0 ? (
          <Notification />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
    
    </div>
  )
  }
}