import React, { Component } from 'react';
import queryString from 'query-string'

import FeedList from '../../components/FeedList';
import CategoryNav from '../../components/CategoryNav';
import ImageNav from '../../components/ImageNav';
import Logout from '../../components/Logout';
import Page from '../../components/Page';

import { getBreedList } from '../../services/iddog'

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      dogs: []
    }

    this.getList = this.getList.bind(this);
    this.logout = this.logout.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.directionFunction = this.directionFunction.bind(this);
  }

  componentDidMount = () => {
    document.title = 'The IDDOG | Feed';
    const params = queryString.parse(this.props.location.search);
    const { category, id } = params || ''
    this.getList(category, id);

    document.addEventListener("keydown", this.directionFunction, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.directionFunction, false);
  }

  changeImage = (direction) => {
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

  directionFunction(event) {
    if (event.keyCode === 37) {
      this.changeImage('prev');
    }else if (event.keyCode === 39){
      this.changeImage('next');
    }
  }
  
  getList = async (breed = 'husky', id) => {
    const search = id ? `?category=${breed}&id=${id}` : `?category=${breed}`;
    const { dogs, category } = await getBreedList(breed)
      
    if (dogs) {
      this.setState({
        category,
        dogs
      })
    }

    return this.props.history.push({
      pathname: '/feed',
      search
    })
  }

  logout(){
    sessionStorage.removeItem('token');
    this.props.history.push('/signup');
  }

  render() {
    const { id } = queryString.parse(this.props.location.search);
    const { category, dogs } = this.state;
    
    return (
      <Page>
        <Logout logout={this.logout} />
        <CategoryNav category={category} getList={this.getList} />
        <FeedList category={category} dogs={dogs} parentProps={this.props} isLoading={dogs.length === 0}/>
        {id && <ImageNav changeImage={this.changeImage} />}
      </Page>
    )
  }
}

export default Feed;