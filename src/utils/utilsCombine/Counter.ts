import { number } from "yup";

/** 
 *@description 依據參數決定動態數值
 * @param {number, number} 前者:當前數值, 後者:數值調整的參數
 * @return {number} 加減後的數字結果
 */ 
export function sumValue(value: number, num: number) {
  const result = value += num;
  return result
};