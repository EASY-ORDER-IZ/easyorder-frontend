import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';

interface CateTabsProps {
  activeTab: 'all' | 'men' | 'women' | 'kids';
  setActiveTab: React.Dispatch<React.SetStateAction<'all' | 'men' | 'women' | 'kids'>>;
}

const CateTabs = ({ activeTab, setActiveTab }: CateTabsProps) => {
  const tabs: ('all' | 'men' | 'women' | 'kids')[] = ['all', 'men', 'women', 'kids'];

  return (
    <Tabs
      value={activeTab}
      onValueChange={(val) => setActiveTab(val as 'all' | 'men' | 'women' | 'kids')}
      className="w-full"
    >
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab} value={tab}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default CateTabs;
