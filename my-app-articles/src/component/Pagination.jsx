import React from "react";
import { Pagination } from "react-bootstrap";

export default function PaginationComponent({ pagination, onChangePage }) {
  const active = pagination.currentPage;
  const items = [];

  for (let i = 1; i <= pagination.totalPage; i++) {
    items.push(
      <Pagination.Item
        onClick={() => onChangePage(i)}
        key={i}
        active={i === active}
      >
        {i}
      </Pagination.Item>
    );
  }
  return (
    <div className="container pagination col-sm-8">
    <Pagination>
      <Pagination.Prev
        onClick={() => {
          if (pagination.currentPage > 0) {
            onChangePage(pagination.currentPage - 1);
          }
        }}
      />
      {items}
      <Pagination.Next
        onClick={() => {
          if (pagination.currentPage <= pagination.totalPage ) {
            onChangePage(pagination.currentPage + 1);
          }
        }}
      />
    </Pagination>
    </div>
  );
}
