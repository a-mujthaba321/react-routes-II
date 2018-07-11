import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchSinglePost, deletePost } from '../actions';

import { Link } from 'react-router-dom';


class ViewPost extends Component {

  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }


  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchSinglePost(id);
    }

  }

  handleDelete() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {

    const { post } = this.props;

    if (!post) {
      return <div>''</div>;
    }

    return (
      <div>
        <Link to="/" className="btn btn-primary">Home</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.handleDelete}
        >Delete
        </button>
          <h3>{post.title}</h3>
          <h6>Categories: {post.categories}</h6>
          <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {

  return { post: posts[ownProps.match.params.id] };

}

export default connect(mapStateToProps, { fetchSinglePost, deletePost })(ViewPost);
