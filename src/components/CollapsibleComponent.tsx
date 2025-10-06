'use client';

import * as React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import SliderComponents from './SliderComponents';

interface Props {
  title?: string;
}
export function CollapsibleComponent({ title }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex w-full flex-col gap-5">
      <div>
        <div className="flex w-full justify-between">
          <span className="align-middle text-[20px] leading-[100%] font-bold">{title}</span>
          <CollapsibleTrigger asChild>
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </CollapsibleTrigger>
        </div>
      </div>

      <CollapsibleContent>
        <SliderComponents />
      </CollapsibleContent>
    </Collapsible>
  );
}
export default CollapsibleComponent;
