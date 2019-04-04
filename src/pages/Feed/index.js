import React, { Component } from 'react';
import queryString from 'query-string'

import FeedList from '../../components/FeedList';
import CategoryNav from '../../components/CategoryNav';
import ImageNav from '../../components/ImageNav';
import Logout from '../../components/Logout';
import Page from '../../components/Page';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      dogs: [],
      search: ''
    }

    this.getList = this.getList.bind(this);
    this.logout = this.logout.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }

  componentDidMount() {
    document.title = 'The IDDOG | Feed';
    const params = queryString.parse(this.props.location.search);
    const { category, id } = params || ''
    this.getList(category, id);

    document.addEventListener("keydown", this.directionFunction, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.directionFunction, false);
  }

  changeImage(direction) {
    const params = queryString.parse(this.props.location.search);
    
    if (direction === 'next') {
      return this.nextDog(params)
    }
    return this.prevDog(params)
  }

  search(search) {
    this.props.history.push({
      pathname: '/feed',
      search: search
    })
  }

  nextDog(params) {
    const { dogs } = this.state
    const { id, category } = params
    const nextId = parseInt(id) !== dogs.length -1 ? parseInt(id) + 1 : 0
    this.search(`?category=${category}&id=${nextId}`);
  }

  prevDog(params) {
    const { dogs } = this.state
    const { id, category } = params
    const nextId = parseInt(id) !== 0 ? parseInt(id) - 1 : dogs.length -1
    this.search(`?category=${category}&id=${nextId}`);
  }

  directionFunction(event){
    if (event.keyCode === 37) {
      this.changeImage('prev');
    }else if (event.keyCode === 39){
      this.changeImage('next');
    }
  }
  
  getList(category = 'husky', id) {
    let token = sessionStorage.getItem('token');
    if (!token || token === '') {
      this.props.history.push('/signup');
    }else{
      fetch('https://api-iddog.idwall.co/feed?category='+category, {
        method: 'GET',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(jsondata => {
        if (!jsondata.error){
          this.setState({
            category: jsondata.category,
            dogs: jsondata.list
          });
          const search = id ? `?category=${category}&id=${id}` : `?category=${category}`;
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
        <ImageNav changeImage={this.changeImage} />
      </Page>
    )
  }
}

export default Feed;