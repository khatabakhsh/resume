import React, {Component} from 'react';
import "./Article.css";

class Article extends Component{
    render(){
        const { children } = this.props;
        return(
            <article>
                {children}
            </article>
        );
    }
}

export default Article;