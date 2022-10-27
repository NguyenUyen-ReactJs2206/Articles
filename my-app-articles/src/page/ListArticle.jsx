import React, { useEffect, useState } from "react";
import { favoriteApi, getListArticles, notFavoriteApi } from "../api";

import Article from "../component/Article";
import Navbar from "../component/Navbar";
import PaginationComponent from "../component/Pagination";
import { PAGINATION } from "../constants";

export default function ListArticle({showPage}) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //pagination
  const [pagination, setPagination] = useState({
    limit: PAGINATION.LIMIT,
    currentPage: PAGINATION.CURRENT_PAGE,
    totalPage: PAGINATION.TOTAL_PAGE,
  });

  const [isFavorite, setFavorite] = useState(false)
  //call api lấy danh sách articles
  console.log(articles);
  useEffect(() => {
    setIsLoading(true);
    const offset = (pagination.currentPage - 1) * PAGINATION.LIMIT;
    getListArticles(offset)
      .then((result) => {
        /**
         * định dạng của result{
         * articles:[....],
         * articleCount:164 tất cả phần tử}
         */
        setArticles((pre) => (pre = result?.articles));
        setPagination(
          (pre) =>
            (pre = {
              ...pre,
              totalPage: Math.ceil(result?.articlesCount / PAGINATION.LIMIT),
            })
        );

        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error", error);

        setIsLoading(false);
      });
  }, [pagination.currentPage, isFavorite]);

  const onChangePage = (page) => {
    setPagination(
      (pre) =>
        (pre = {
          ...pagination,
          currentPage: page,
        })
    );
  };

  const favorite = async (slug) => {
    const result = await favoriteApi(slug);
    setFavorite(!isFavorite)
  };
const notFavorite = async (slug) => {
    const result = await notFavoriteApi(slug);
    setFavorite(!isFavorite)
  };
  return (
    <div>
      <Article articles={articles} 
      isLoading={isLoading} 
      onFavorite={favorite}
      onNotFavorite={notFavorite}
    //   showPage={showPage} 
    />

      {!isLoading && articles.length > 0 && (
        <PaginationComponent
          pagination={pagination}
          onChangePage={onChangePage}
        //   showPage={showPage}
        />
      )}
    </div>
  );
}
