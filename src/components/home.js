import React, { Component } from 'react';
import PostsList from './posts_list';
import CategoriesList from './categories_list';
import { connect } from 'react-redux';
import { selectCategory, clearActivePost } from '../actions';


class Home extends Component {
    componentDidMount() {
        this.updateSelectedCategory();
    }
    componentDidUpdate() {
        this.updateSelectedCategory();
    }

    updateSelectedCategory() {
        const { match } = this.props;
        const category = !match || match.url === '/' ? null : match.params.category;
        this.props.selectCategory(category);
        this.props.clearActivePost();
    }

    render() {
        return (
            <div>
                <CategoriesList />
                <PostsList />
            </div>
        );
    }
}

export default connect(null, { selectCategory, clearActivePost })(Home);
