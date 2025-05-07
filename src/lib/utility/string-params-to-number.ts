export function stringParamsToNumber(arr: string = ""): number[] {
  if (!arr) return [];
  const newArr = arr.split(",").map((item: string) => {
    const temp = Number(item);
    if (!isNaN(temp)) return temp;
    return -1;
  });
  return newArr;
}
