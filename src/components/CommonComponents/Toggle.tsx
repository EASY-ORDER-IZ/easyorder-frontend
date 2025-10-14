import { useState } from 'react';
import { Button } from '../ui/button/button';

const ToggleComponent = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="flex h-full items-center justify-center">
      <Button
        onClick={() => setToggled(!toggled)}
        className={`relative ${toggled ? 'bg-primary-main' : 'bg-primary-50'}`}
        size="toggle"
        variant="toggle"
      >
        <div
          className={`bg-background-50 absolute top-1/2 left-0.5 h-8 w-8 -translate-y-1/2 transform rounded-full transition-[left,transform] duration-500 ease-in-out ${toggled ? 'translate-x-[34px]' : 'translate-x-0'} `}
        ></div>
      </Button>
    </div>
  );
};

export default ToggleComponent;
