import { z } from "zod";

export async function pagination(searchParams: Promise<{ page?: string }>) {
  const itemPerPage = 20;
  const { page } = await searchParams;
  const validatePage = z.coerce.number().gte(1).safeParse(page);
  let currentPage = 1;
  if (validatePage.success) currentPage = validatePage.data;
  return { currentPage, itemPerPage };
}
