/* eslint-disable jest/valid-title */
import { getFormattedDate } from './date';

describe('date utils', () => {
  describe(getFormattedDate, () => {
    it('renders learn react link', () => {
      const staticDate: number = Date.parse('2021-09-01');
      const formattedDate = getFormattedDate(staticDate);
      expect(formattedDate).toEqual('31 August');
    });
  });
});
