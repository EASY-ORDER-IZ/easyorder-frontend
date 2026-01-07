import Select from '@/components/CommonComponents/Select';
import KPICards from '@/components/DashBoardComponents/KPICards';
import StoreImg from '@/components/DashBoardComponents/StoreImg';
import StoreProducts from '@/components/DashBoardComponents/StoreProducts/StoreProducts';
import { KPI_DEMO } from '@/store/kpiCardsData';
import type { KPIPeriod } from '@/store/kpiCardsData';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import AnalyticsChart from '@/components/DashBoardComponents/AnalysticChart';
import { chart_data } from '@/store/ChartData';
import { paraData } from '@/store/paragraph';
import PageSection from '@/layout/PageSection';

const options = [
  {
    id: 1,
    label: 'Yearly',
    value: 'Yearly',
  },
  {
    id: 2,
    label: 'Monthly',
    value: 'Monthly',
  },
  {
    id: 3,
    label: 'Weekly',
    value: 'Weekly',
  },
  {
    id: 4,
    label: 'Daily',
    value: 'Daily',
  },
];

const StorePage = () => {
  const [selectItem, setSelectItem] = useState<KPIPeriod>('Monthly');
  const [selectedCard, setSelectedCard] = useState<string>('Active Users');

  return (
    <div className="">
      <PageSection>
        {' '}
        <StoreImg />
      </PageSection>
      <div>
        <PageSection>
          <div className="flex justify-between font-semibold">
            <div className="flex items-center gap-2 p-3 text-gray-700">
              <h1 className="text-[38px]">Store's Overview</h1>
              <ChevronDown width={32} />
            </div>
            <div className="p-3">
              <Select
                data={options}
                triggerClassName="w-[115px] text-[16px] text-gray-600"
                onChange={(val) => setSelectItem(val as KPIPeriod)}
              />
            </div>
          </div>
        </PageSection>

        <p className="px-3 text-[14px] text-gray-500">
          Manage your products and view their sales performance
        </p>

        <PageSection>
          <div className="m-3 flex items-center gap-3">
            {KPI_DEMO[selectItem].map((card) => (
              <KPICards
                key={card.title}
                title={card.title}
                rate={card.rate}
                percent={card.percent}
                description={card.description}
                arrow={card.arrow}
                onClick={() => setSelectedCard(card.title)}
                isActive={selectedCard === card.title}
              />
            ))}
          </div>
        </PageSection>
        <PageSection>
          <div className="flex flex-1 items-center gap-12 p-2">
            <div className="p-2">
              <h3 className="text-[24px]">{paraData[selectedCard].title}</h3>
              <AnalyticsChart
                label={chart_data[selectedCard].labels}
                values={chart_data[selectedCard].values}
              />
            </div>
            <div className="flex-1">
              <h2 className="text-[24px] font-bold">
                {paraData[selectedCard].title}
                {paraData[selectedCard].subtitle}
              </h2>
              <br />
              <p className="text-[16px] text-gray-700">{paraData[selectedCard].desc}</p>
            </div>
          </div>
        </PageSection>
      </div>
      <br />
      <br />
      <br />
      <PageSection>
        <StoreProducts />
      </PageSection>
    </div>
  );
};

export default StorePage;
