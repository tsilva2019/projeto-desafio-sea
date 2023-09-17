import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../hooks';
import { setActiveDashboardAction } from '.';

export const useDashboardReducer = () => {
  const dispatch = useDispatch();
  const { dashboard } = useAppSelector((state) => state.dashboardReducer);
  const setActiveDashboard = (currentDashboard: boolean) => {
    dispatch(setActiveDashboardAction(currentDashboard));
  };
  return {
    dashboard,
    setActiveDashboard,
  };
};
