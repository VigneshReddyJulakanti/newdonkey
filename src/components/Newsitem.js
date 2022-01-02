import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class News extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }




    render() {
        let {title,description,imageUrl,newsUrl,author,publishedAt} = this.props;
        return (
            <div>
                <div className="card my-3" style={{width: "18rem"}}>
                    
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "85%" }}>
                 {author}

               </span>
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">{new Date(publishedAt).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-primary btn-sm">Read More</a>
                    </div>
                    </div>                
            </div>
        )
    }
}
