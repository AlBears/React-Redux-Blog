import React , { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount(){
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>List of blog posts.</div>
    );
  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ fetchPosts }, dispatch);
// }
//export default connect(null, mapDispatchToProps)(PostsIndex);

//refactor instead of 3 line of code so we dont need bindActionCreators
//at the top
export default connect(null, {fetchPosts})(PostsIndex);
