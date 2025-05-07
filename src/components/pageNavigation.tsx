"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";

function calculatePages(currentPage: number, totalPage: number): number[] {
  const c = currentPage;
  let displayPages = [c - 2, c - 1, c, c + 1, c + 2];

  if (displayPages[0] < 1) {
    displayPages = displayPages.map((c) => c - displayPages[0] + 1);
  }

  const lastPage = displayPages.at(-1) || 1;

  if (lastPage > totalPage) {
    displayPages = displayPages.map((c) => c - (lastPage - totalPage));
  }

  displayPages = displayPages.filter((c) => c > 0);

  return displayPages;
}

export default function PageNavigation({
  currentPage,
  totalRecords,
  itemPerPage,
}: {
  currentPage: number;
  totalRecords: number;
  itemPerPage: number;
}) {
  const router = useRouter();
  const handleGotoPage = (page: number) => {
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("page", `${page}`);
    router.push(newUrl.href);
  };

  const totalPage = Math.ceil(totalRecords / itemPerPage);
  const displayPages = calculatePages(currentPage, totalPage);

  return (
    <Pagination className="my-2">
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              className="cursor-pointer"
              onClick={() => handleGotoPage(currentPage - 1)}
            />
          </PaginationItem>
        )}
        {displayPages.map((p) => (
          <PaginationItem key={`PaginationItem-${p}`}>
            <PaginationLink
              className="cursor-pointer"
              onClick={() => handleGotoPage(p)}
              isActive={currentPage == p}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}
        {currentPage + 2 < totalPage && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {currentPage < totalPage && (
          <PaginationItem>
            <PaginationNext
              className="cursor-pointer"
              onClick={() => handleGotoPage(currentPage + 1)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
