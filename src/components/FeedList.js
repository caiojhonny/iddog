import React from 'react';
import Dog from './Dog';
import Page from './Page';
import './styles/FeedList.scss';

class FeedList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        category: '',
        dogs: []
    }
    this.getList = this.getList.bind(this);
  }

  componentDidMount() {
    let cat = sessionStorage.getItem('category');
    if(!cat || cat === ''){
      this.getList('husky');
    }else{
      this.getList(cat);
    }
  }

  getList(c) {
    let token = sessionStorage.getItem('token');
    if(!token || token === '') {
      this.props.history.push('/signup');
    }else{
      fetch('https://api-iddog.idwall.co/feed?category='+c, {
        method: 'GET',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(jsondata => {
        if(!jsondata.error){
          this.setState({
            category: jsondata.category,
            dogs: jsondata.list
          });
          // Save category on storage
          sessionStorage.setItem('category', jsondata.category);
        }
      })
    } 
  }

  render(){
    const { category, dogs } = this.state;

    return (
      <Page>
        <section className="feed-list">
          <nav className="nav">
            <button className={ category === 'husky' ? 'nav-item nav-active': 'nav-item' } onClick={this.getList.bind(this, 'husky')}>Husky</button>
            <span className="nav-separator">/</span>
            <button className={ category === 'hound' ? 'nav-item nav-active': 'nav-item' } onClick={this.getList.bind(this, 'hound')}>Hound</button>
            <span className="nav-separator">/</span>
            <button className={ category === 'pug' ? 'nav-item nav-active': 'nav-item' } onClick={this.getList.bind(this, 'pug')}>Pug</button>
            <span className="nav-separator">/</span>
            <button className={ category === 'labrador' ? 'nav-item nav-active': 'nav-item' } onClick={this.getList.bind(this, 'labrador')}>Labrador</button>
          </nav>
          <React.Fragment>
            {dogs.map((image, index) => <Dog key={index} image={image}/> )}
          </React.Fragment>
        </section>
      </Page>
    )
  }
}


export default FeedList;