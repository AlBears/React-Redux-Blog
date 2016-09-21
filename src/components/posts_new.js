import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    return (
      <form onSubmit = {handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>
        <div className="from-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
        </div>

        <div className="from-group">
          <label>Categories</label>
          <input type="text" className="form-control"{...categories}/>
        </div>

        <div className="from-group">
          <label>Content</label>
          <textarea className="form-control" {...content}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: first is form config, 2nd is mapStateToProps(null here), 3rd
//mapDispatchToProps (we use createPost)
export default reduxForm({
  form: 'PostsnewForm',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);
