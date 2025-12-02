'use client';

import * as React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface Props {
  title?: string;
  component?: React.ReactNode;
}
export function CollapsibleComponent({ title, component }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex w-full flex-col gap-5">
      <div className="flex w-full justify-between">
        <span className="text-list text-text-main align-middle leading-[100%] font-bold">
          {title}
        </span>
        <CollapsibleTrigger asChild>
          {isOpen ? (
            <ChevronUp className="text-text-main text-list cursor-pointer" />
          ) : (
            <ChevronDown className="text-text-main text-list cursor-pointer" />
          )}
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent>{component}</CollapsibleContent>
    </Collapsible>
  );
}
export default CollapsibleComponent;
