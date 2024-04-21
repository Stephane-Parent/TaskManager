import { getOrganisedWorkOrder } from './utils';

describe('utils', () => {
  describe(getOrganisedWorkOrder, () => {
    const dateNow = Date.parse(new Date().toISOString());
    const ONE_DAY = 24 * 60 * 60 * 1000;
    const WORK_ORDERS_DATA = {
      todayLowPriority: {
        id: '1',
        title: 'John',
        description: 'didi a dit',
        priority: 'LOW',
        dueDate: dateNow,
      },
      todayMediumPriority: {
        id: '2',
        title: 'Doe',
        description: 'didi a dit',
        priority: 'MEDIUM',
        dueDate: dateNow,
      },
      todayHighPriority: {
        id: '3',
        title: 'Smith',
        description: 'didi a dit',
        priority: 'HIGH',
        dueDate: dateNow,
      },
      yesterdayLowPriority: {
        id: '4',
        title: 'Doe',
        description: 'didi a dit',
        priority: 'LOW',
        dueDate: dateNow - ONE_DAY,
      },
      tomorrowLowPriority: {
        id: '5',
        title: 'Smith',
        description: 'didi a dit',
        priority: 'LOW',
        dueDate: dateNow + ONE_DAY,
      },
      daysBeforeLowPriority: {
        id: '4',
        title: 'Doe',
        description: 'didi a dit',
        priority: 'LOW',
        dueDate: dateNow - 2 * ONE_DAY,
      },
    };

    it.each`
      orderA                                    | orderB                                   | expected
      ${WORK_ORDERS_DATA.todayLowPriority}      | ${WORK_ORDERS_DATA.todayMediumPriority}  | ${[WORK_ORDERS_DATA.todayMediumPriority, WORK_ORDERS_DATA.todayLowPriority]}
      ${WORK_ORDERS_DATA.todayLowPriority}      | ${WORK_ORDERS_DATA.todayHighPriority}    | ${[WORK_ORDERS_DATA.todayHighPriority, WORK_ORDERS_DATA.todayLowPriority]}
      ${WORK_ORDERS_DATA.todayLowPriority}      | ${WORK_ORDERS_DATA.yesterdayLowPriority} | ${[WORK_ORDERS_DATA.yesterdayLowPriority, WORK_ORDERS_DATA.todayLowPriority]}
      ${WORK_ORDERS_DATA.todayLowPriority}      | ${WORK_ORDERS_DATA.tomorrowLowPriority}  | ${[WORK_ORDERS_DATA.todayLowPriority, WORK_ORDERS_DATA.tomorrowLowPriority]}
      ${WORK_ORDERS_DATA.yesterdayLowPriority}  | ${WORK_ORDERS_DATA.tomorrowLowPriority}  | ${[WORK_ORDERS_DATA.yesterdayLowPriority, WORK_ORDERS_DATA.tomorrowLowPriority]}
      ${WORK_ORDERS_DATA.todayMediumPriority}   | ${WORK_ORDERS_DATA.todayHighPriority}    | ${[WORK_ORDERS_DATA.todayHighPriority, WORK_ORDERS_DATA.todayMediumPriority]}
      ${WORK_ORDERS_DATA.daysBeforeLowPriority} | ${WORK_ORDERS_DATA.yesterdayLowPriority} | ${[WORK_ORDERS_DATA.daysBeforeLowPriority, WORK_ORDERS_DATA.yesterdayLowPriority]}
    `('returns $expected when orders are: $orderA $orderB', ({ orderA, orderB, expected }) => {
      expect(getOrganisedWorkOrder([orderA, orderB])).toStrictEqual(expected);
    });
  });
});
