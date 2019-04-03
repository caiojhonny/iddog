import React from 'react';
import FeedList from './FeedList';
import CategoryNav from './CategoryNav';
import Logout from './Logout';
import Page from './Page';
import queryString from 'query-string'
import './styles/Feed.scss';

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        category: '',
        dogs: []
    }

    this.getList = this.getList.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    let params = queryString.parse(this.props.location.search)
    if(params.category !== undefined){
        if(params.id !== undefined){
            this.getList(params.category, params.id);
        }else{
            this.getList(params.category);
        }
    }else{
        this.getList('husky');
    }
  }

  getList(c, id) {
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
          const search = id ? `?category=${c}&id=${id}` : `?category=${c}`;
          this.props.history.push({
            pathname: '/feed',
            search: search
          })
        }
      })
    } 
  }

  logout(){
    sessionStorage.removeItem('token');
    this.props.history.push('/signup');
  }

  render(){
    const { category, dogs } = this.state;
    
    return (
      <Page>
        <Logout logout={this.logout} />
        <CategoryNav category={category} getList={this.getList} />
        <FeedList category={category} dogs={dogs} props={this.props}/>
      </Page>
    )
  }
}

export default Feed;