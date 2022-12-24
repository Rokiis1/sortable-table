export const sort = <T>(
  array: T[],
  sortColumn: keyof T,
  sortOrder: "asc" | "desc"
): T[] => {
  let sortedArray = [...array];
  sortedArray.sort((a, b) => {
    if (sortOrder === "asc") {
      return (a[sortColumn] as any) > (b[sortColumn] as any) ? 1 : -1;
    } else {
      return (a[sortColumn] as any) < (b[sortColumn] as any) ? 1 : -1;
    }
  });
  return sortedArray;
};
