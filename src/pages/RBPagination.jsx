import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

const RBPagination = () => {
  const [activePage, setActivePage] = useState(2);
  const totalPages = 6;

  const items = [];

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => setActivePage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <h3>Pagination</h3>
      <p>Active Page : {activePage}</p>

      <Pagination>
        <Pagination.First onClick={() => setActivePage(1)} />
        <Pagination.Prev
          onClick={() => setActivePage(activePage > 1 ? activePage - 1 : 1)}
        />{items}

        <Pagination.Next onClick={() =>
            setActivePage(activePage < totalPages ? activePage + 1 : totalPages)}
        />
        <Pagination.Last onClick={() => setActivePage(totalPages)} />
      </Pagination>

    </div>
  );
};

export default RBPagination;

