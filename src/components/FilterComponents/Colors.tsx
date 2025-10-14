import { colors } from '@/store/staticData';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '../ui/badge';

const ColorsComponent = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleColor = (color: string) => {
    setSelected((prev) => (prev === color ? null : color));
  };
  return (
    <div className="flex w-full flex-wrap gap-3">
      {colors.map((c, index) => (
        <Badge
          onClick={() => handleColor(c)}
          key={index}
          variant="color"
          style={{ backgroundColor: c }}
        >
          {selected === c && (
            <div className="mt-1 flex items-center justify-center p-2 align-middle">
              <Check className="text-button-text size-7" />
            </div>
          )}
        </Badge>
      ))}
    </div>
  );
};

export default ColorsComponent;
