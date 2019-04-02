import React from 'react';
import Dog from './Dog';
import Page from './Page';
import './styles/FeedList.scss';

class FeedList extends React.Component {

  render(){

    return (
      <Page>
        <section className="feed-list">
          <React.Fragment>
            <Dog />
            <Dog />
            <Dog />
            <Dog />
            <Dog />
            <Dog />
          </React.Fragment>
        </section>
      </Page>
    )
  }
}


export default FeedList;