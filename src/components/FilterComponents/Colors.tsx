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
            <div className="flex justify-center p-2">
              <Check className="text-button-text h-4 w-4" />
            </div>
          )}
        </Badge>
      ))}
    </div>
  );
};

export default ColorsComponent;
