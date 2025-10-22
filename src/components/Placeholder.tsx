import {
  MessageCircleMore,
  ChevronRight,
  ChevronsUpDown,
  Settings,
  Heart,
  CalendarDays,
  Settings2,
  LayoutDashboard,
} from 'lucide-react';
import { profilephoto } from '@/assets/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Placeholder = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className={`cursor-pointer transition-all duration-500 ease-in-out ${expanded ? 'w-76 items-start pl-6' : 'w-11 items-center'} bg-background-100 border-text-100 flex h-110 flex-col justify-between rounded-sm border-[0.5px] py-5`}
    >
      <div
        className={`flex flex-col ${expanded ? 'custom-scrollbar items-start overflow-y-auto' : 'items-center'} h-[80%] w-full gap-11`}
      >
        <div
          className={`flex items-center ${expanded ? 'justify-between' : 'justify-center'} w-full`}
        >
          <div className="flex items-center gap-1">
            <LayoutDashboard size={18} className="text-primary-600 fill-current stroke-none" />
            {expanded && <h2 className="text-md text-text-600 font-semibold">Placeholder</h2>}
          </div>
          {expanded && (
            <ChevronsUpDown
              size={16}
              className="text-text-100 transition"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(false);
              }}
            />
          )}
        </div>
        <div
          className={`flex w-full flex-col ${expanded ? 'h-[95%] items-start justify-between' : 'items-center justify-center'} w-full gap-6`}
        >
          <div
            className={`flex flex-col ${expanded ? 'items-start' : 'items-center justify-center'} w-full gap-4`}
          >
            {expanded && <span className="text-text-100 text-xs">Suggestion</span>}
            {[
              { Icon: MessageCircleMore, label: 'Placeholder option', path: '/chat' },
              { Icon: Settings, label: 'Placeholder option', path: '/settings' },
              { Icon: Heart, label: 'Placeholder option', path: '/favorites' },
              { Icon: Settings2, label: 'Placeholder option', path: '/config' },
            ].map(({ Icon, label, path }, i) => (
              <div
                key={i}
                className={`flex w-full cursor-pointer items-center transition ${expanded ? 'w-full flex-row justify-between' : 'justify-center'} `}
              >
                <div className="flex items-center gap-2">
                  <Icon size={15} className={`${expanded ? 'text-text-100' : 'text-text-400'}`} />
                  {expanded && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate(path);
                      }}
                      className="text-table-sm"
                    >
                      {label}
                    </span>
                  )}
                </div>
                {expanded && <ChevronRight size={14} className="text-text-100" />}
              </div>
            ))}
          </div>
          <div
            className={`flex flex-col ${expanded ? 'items-start' : 'items-center justify-center'} w-full gap-4`}
          >
            {expanded && <span className="text-text-100 text-xs">Suggestion</span>}
            {[
              { Icon: CalendarDays, label: 'Placeholder option', path: '/calendar' },
              { Icon: Settings, label: 'Placeholder option', path: '/settings' },
              { Icon: Heart, label: 'Placeholder option', path: '/favorites' },
              { Icon: Settings2, label: 'Placeholder option', path: '/config' },
            ].map(({ Icon, label, path }, i) => (
              <div
                key={i}
                className={`flex w-full cursor-pointer items-center transition ${expanded ? 'w-full flex-row justify-between' : 'justify-center'} `}
              >
                <div className="flex items-center gap-2">
                  <Icon size={15} className={`${expanded ? 'text-text-100' : 'text-text-400'}`} />
                  {expanded && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate(path);
                      }}
                      className="text-table-sm"
                    >
                      {label}
                    </span>
                  )}
                </div>
                {expanded && <ChevronRight size={14} className="text-text-100" />}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          handleNavigate('/profile');
        }}
        className={`flex items-center ${expanded ? 'h-12 justify-between pr-2 shadow-[1px_0px_4px_#0000000D]' : 'justify-center'} w-full`}
      >
        <div className="flex items-center gap-2">
          <img src={profilephoto} alt="" className="size-6" />
          {expanded && (
            <div className="flex flex-col">
              <span className="text-text-600 text-xs font-medium">Ahmad</span>
              <span className="text-text-400 text-xs">ahmad@example.com</span>
            </div>
          )}
        </div>
        {expanded && <ChevronsUpDown size={16} className="text-text-100 transition" />}
      </div>
    </div>
  );
};
export default Placeholder;
