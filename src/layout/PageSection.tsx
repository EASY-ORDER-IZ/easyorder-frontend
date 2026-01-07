import React from 'react';

interface Props {
  children: React.ReactNode;
}

const PageSection = (props: Props) => {
  return <section className="mt-3 flex w-full flex-col gap-6 md:gap-10">{props.children}</section>;
};

export default PageSection;
