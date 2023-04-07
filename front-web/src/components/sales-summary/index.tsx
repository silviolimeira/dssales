import SalesSummaryCard from './sales-summary-card';
import './styles.css';
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as BarCharIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';
import { FilterData, SalesSummaryData } from '../../types';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { useEffect, useMemo } from 'react';

type Props = {
  filterData?: FilterData;
};

function SalesSummary({ filterData }: Props) {
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', {
        params
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch(() => {
        console.error('Error to fetch sales by date');
      });
  }, [params]);

  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={430} label="Média" icon={<DoneIcon />} />
      <SalesSummaryCard value={630} label="Quantidade" icon={<SyncIcon />} />
      <SalesSummaryCard value={130} label="Mínima" icon={<BarCharIcon />} />
      <SalesSummaryCard value={230} label="Máxima" icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;
