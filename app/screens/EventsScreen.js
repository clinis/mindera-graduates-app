import React from 'react'

import { getEvents } from '../components/api'
import WithLoading from '../components/withLoading'
import { EventsGallery } from '../components/eventsGallery'

const EventsGalleryWithLoading = WithLoading(EventsGallery);

export class EventsScreen extends React.Component {
  _mounted = false;

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      events: []
    };
  }

  componentDidMount() {
    this._mounted = true;

    this.setState({ loading: true });
    getEvents()
      .then((ev) => {
        if (this._mounted) {
          this.setState({
            loading: false,
            events: ev
          })
        }
      })
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  render() {
    return (
      <EventsGalleryWithLoading
        isLoading={this.state.loading}
        events={this.state.events}
        nav={this.props.screenProps.rootNavigation}
      />
    );
  }
}