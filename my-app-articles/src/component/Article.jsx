import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";
import { formatDate } from "../helpers/indexHelper";

export default function Article({ articles, isLoading, onNotFavorite, onFavorite }) {
  const [readMore, setIsReadMore] = useState(false);
  const handleLess = () => {
    setIsReadMore(false);
  };
  const handleMore = () => {
    setIsReadMore(true);
  };

  const favoriteAction = async(articles) => {
    if(articles?.favoritesCount) {
     await onNotFavorite(articles.slug);
     return
    }
    await onFavorite(articles.slug);
  }
  return (
    <div>
      <div className="container page">
        <div className="row">
          <div className="col-sm-9">
            <div>
              <div className="feed-toggle global-feed">
                <a href="#" className="nav-link active">
                  GlobalFeed
                </a>
              </div>
            </div>
            <hr />
            {/* isLoading đúng in ra thẻ p */}
            {isLoading && <p className="is-loading">Loading ...</p>}
            {articles.length > 0 &&
              articles.map((el, index) => (
                <div className="article-preview" key={index}>
                  <div className=" container-fluid infor-article">
                    <div className="row">
                      <div className="col-sm-1">
                        <img
                          src={el?.author?.image}
                          alt="#"
                          className="image-infor"
                        />
                      </div>
                      <div className="col-sm-8 infor-sender">
                        <h5>{el?.author?.username}</h5>
                        <h6>{formatDate(el?.createdAt)}</h6>
                      </div>
                      <div className="col-sm-3 favoritescount">
                        <button 
                        style={{color: `${el.favorited ? 'red' : ''}`, cursor:"pointer"}}
                        type="button" 
                        onClick={(event) => favoriteAction(el)}
                        className="btn btn-secondary ">
                          <FontAwesomeIcon icon={faHeart} />
                          {el?.favoritesCount}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid preview">
                    <p
                      className="content redless"
                      style={{ display: readMore ? "block" : "none" }}
                    >
                      <h5> {el?.slug}</h5>
                      <p>{el?.body}</p>
                      <span
                        className="read read-less"
                        onClick={() => handleLess()}
                      >
                        ReadLess...
                      </span>
                    </p>

                    <p
                      className="readmore"
                      style={{ display: readMore ? "none" : "block" }}
                    >
                      <h5>{el?.slug}</h5>
                      <p>{el?.body.slice(0, 200)}...</p>
                      <span
                        className="read read-more"
                        onClick={() => handleMore()}
                      >
                        ReadMore...
                      </span>
                    </p>
                    <div className="container col-sm">
                      <ul className="tag-list">
                        {el.tagList.map((item) => {
                          return <li className="tag-default">{item}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="col-sm">
            <div className="slide-bar">
              <h6>Popular Tags</h6>
              <div className="popular-tag-list">
                <a href="#">implementations</a>
                <a href="#">welcom</a>
                <a href="#">introduction</a>
                <a href="#">codebaseShow</a>
                <a href="#">ipsum</a>
                <a href="#">qui</a>
                <a href="#">et</a>
                <a href="#">quia</a>
                <a href="#">cupiditate</a>
                <a href="#">deserunt</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
