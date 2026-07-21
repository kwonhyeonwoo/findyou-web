import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { UseFormSetValue } from 'react-hook-form';
import { ErrandRegisterType } from '@/schema/errand.schema';

const MERIDIEMS = ['오전', '오후'] as const;
type Meridiem = (typeof MERIDIEMS)[number];

function formatTime(date: Date) {
  const meridiem: Meridiem = date.getHours() < 12 ? '오전' : '오후';
  const hour12 = date.getHours() % 12 || 12;
  const minute = String(date.getMinutes()).padStart(2, '0');
  return `${meridiem} ${String(hour12).padStart(2, '0')}:${minute}`;
}

function isSameTime(a?: Date, b?: Date) {
  if (!a || !b) return false;
  return a.getHours() === b.getHours() && a.getMinutes() === b.getMinutes();
}

function createTimeOptions() {
  const options: { date: Date; label: string; meridiem: Meridiem }[] = [];
  for (let hour = 0; hour < 24; hour++) {
    for (const minute of [0, 30]) {
      const date = new Date();
      date.setHours(hour, minute, 0, 0);
      const hour12 = hour % 12 || 12;
      options.push({
        date,
        label: `${String(hour12).padStart(2, '0')}:${String(minute).padStart(2, '0')}`,
        meridiem: hour < 12 ? '오전' : '오후',
      });
    }
  }
  return options;
}

const TIME_OPTIONS = createTimeOptions();

interface Props {
  value?: Date;
  setValue: UseFormSetValue<ErrandRegisterType>;
}

export function ErrandTimeSelect({ value, setValue }: Props) {
  const handleSelect = (date: Date) => {
    setValue('deadlineTime', date);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[12px] text-[#464554]">마감 시간</label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="h-[50px] rounded-[8px] px-4 py-3"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span className="ml-auto text-gray-400">
              {value ? formatTime(value) : '시간을 선택해주세요'}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[240px] p-3" align="start">
          <div className="grid grid-cols-2 gap-3">
            {MERIDIEMS.map((meridiem) => (
              <div key={meridiem} className="flex flex-col gap-2">
                <span className="text-center text-xs font-semibold text-gray-500">
                  {meridiem}
                </span>
                <div className="border-basic-border scrollbar-hide flex max-h-52 flex-col gap-1 overflow-y-auto rounded-[8px] border p-1">
                  {TIME_OPTIONS.filter(
                    (option) => option.meridiem === meridiem,
                  ).map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => handleSelect(option.date)}
                      className={cn(
                        'rounded-[8px] px-3 py-2 text-sm font-medium transition-colors',
                        isSameTime(value, option.date)
                          ? 'bg-black text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100',
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
