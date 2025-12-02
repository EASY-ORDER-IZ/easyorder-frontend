'use client';

import * as React from 'react';
import { useFiltersStore } from '@/store/useFiltersStore';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface TypeItem {
  id: number | string;
  title: string;
}

interface Props {
  type?: TypeItem[];
  component?: TypeItem[];
  filterKey: string;
}

const TypeFilter = ({ type = [], component = [], filterKey }: Props) => {
  const [openStates, setOpenStates] = React.useState<{ [key: number]: boolean }>({});
  const addFilter = useFiltersStore((s) => s.addFilter);
  const removeFilter = useFiltersStore((s) => s.removeFilter);

  const toggle = (idx: number) => {
    setOpenStates((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div>
      {component.map((c, idx) => {
        const isOpen = openStates[idx] || false;

        return (
          <Collapsible
            key={idx}
            open={isOpen}
            onOpenChange={() => toggle(idx)}
            className="flex w-full flex-col gap-2"
          >
            <div className="flex w-full justify-between">
              <span className="text-list text-text-300 align-middle leading-[100%]">{c.title}</span>

              <CollapsibleTrigger asChild>
                {isOpen ? (
                  <ChevronUp className="text-text-300 text-list cursor-pointer" />
                ) : (
                  <ChevronDown className="text-text-300 text-list cursor-pointer" />
                )}
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent>
              <div className="flex w-full flex-col gap-1">
                {type.map((item, index) => {
                  return (
                    <div key={index} className="flex w-full justify-between">
                      <span className="text-small text-text-200 leading-[100%]">{item.title}</span>

                      <Checkbox
                        className="cursor-pointer opacity-60"
                        onCheckedChange={(checked) => {
                          if (checked) {
                            addFilter({
                              key: `${filterKey}-${item.id}`,
                              label: item.title,
                              value: item.id.toString(),
                            });
                          } else {
                            removeFilter(item.id.toString());
                          }
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </CollapsibleContent>
          </Collapsible>
        );
      })}
    </div>
  );
};

export default TypeFilter;
