import React from 'react';
const PageSection = ({ children }: { children: React.ReactNode }) => {
  return <section className="flex w-full flex-col gap-6 md:gap-10">{children}</section>;
};

export default PageSection;
