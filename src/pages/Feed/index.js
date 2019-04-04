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

    if(category !== undefined){
      if(id !== undefined){
        this.getList(category, id);
      } else {
        this.getList(category);
      }
    } else {
      this.getList('husky');
    }

    document.addEventListener("keydown", this.directionFunction, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.directionFunction, false);
  }

  // changeImage(direction){
  //   let params = queryString.parse(this.props.location.search);
  //   let id;
  //   if(direction === 'next'){
  //     if(parseInt(params.id) === this.state.dogs.length-1){
  //       id = 0;
  //     }else{
  //       id = parseInt(params.id)+1;
  //     }
  //     const search = `?category=${params.category}&id=${id}`;
  //     this.props.history.push({
  //       pathname: '/feed',
  //       search: search
  //     })
  //   }else{
  //     if(parseInt(params.id) === 0){
  //       id = this.state.dogs.length-1;
  //     }else{
  //       id = parseInt(params.id)-1;
  //     }
  //     const search = `?category=${params.category}&id=${id}`;
  //     this.props.history.push({
  //       pathname: '/feed',
  //       search: search
  //     })
  //   }
  // }


  changeImage(direction) {
    const params = queryString.parse(this.props.location.search);
    
    if (direction === 'next') {
      return this.nextDog(params)
    }else{
      return this.prevDog(params)
    }
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
    if(event.keyCode === 37) {
      this.changeImage('prev');
    }else if(event.keyCode === 39){
      this.changeImage('next');
    }
  }

  
  getList(c = 'husky', id) {
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
        <ImageNav changeImage={this.changeImage} />
      </Page>
    )
  }
}

export default Feed;