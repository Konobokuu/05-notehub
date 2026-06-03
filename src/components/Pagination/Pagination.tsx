import type { ComponentType } from 'react';
import ReactPaginateModule from 'react-paginate';
import type { ReactPaginateProps } from 'react-paginate';
import css from './Pagination.module.css';

type ModuleWithDefault<T> = { default: T };
const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<ComponentType<ReactPaginateProps>>
).default;

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedPage: number) => void; // 0-based
  forcePage: number; // 0-based
}

export default function Pagination({ pageCount, onPageChange, forcePage }: PaginationProps) {
  const handlePageClick = (event: { selected: number }) => {
    onPageChange(event.selected); // ❗ без +1
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      previousLabel="< prev"
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      onPageChange={handlePageClick}
      forcePage={forcePage}
      containerClassName={css.pagination}
      activeClassName={css.active}
      disabledClassName={css.disabled}
    />
  );
}