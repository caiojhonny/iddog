import React from 'react';
import Dog from './Dog';
import Page from './Page';
import './styles/FeedList.scss';

class FeedList extends React.Component {

  render(){

    return (
      <Page>
        <section className="feed-list">
            <nav className="nav">
                <button className="nav-item">Husky</button>
                <span className="nav-separator">/</span>
                <button className="nav-item">Hound</button>
                <span className="nav-separator">/</span>
                <button className="nav-item">Pug</button>
                <span className="nav-separator">/</span>
                <button className="nav-item">Labrador</button>
            </nav>
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