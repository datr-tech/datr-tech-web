import { connect } from 'react-redux';
import { PostListBase } from './PostListBase';
import { fetchPosts } from '@app-dtw/core/store/actions';

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export const PostList = connect(mapStateToProps, { fetchPosts })(PostListBase);
