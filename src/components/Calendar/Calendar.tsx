import { Pressable, View } from 'react-native';
import { Text } from '@components/Text';
import moment from 'moment';
import { twMerge } from 'tailwind-merge';

import 'moment/locale/pl';

interface CalendarProps {
  date: moment.Moment;
}

export const Calendar = ({ date }: CalendarProps) => {
  const start = moment(date).subtract(3, 'days');

  const getWeek = (day: moment.Moment) => {
    const list = [day];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 7; i++) {
      list.push(moment(day).add(i, 'days'));
    }
    return list;
  };
  const weekList = getWeek(start);

  return (
    <View className="container flex-row justify-center">
      {weekList.map((item) => (
        <View className="items-center" key={item.format('D')}>
          <Text className="font-bold">{item.format('dd')}</Text>
          <Pressable
            className={twMerge(
              'border-2 items-center justify-center border-accent rounded-full h-10 w-10 m-1 bg-white',
              item.format('D') === moment(date).format('D') && 'bg-accent border-blue-500',
              item > moment(date) && 'bg-gray-100 border-gray-400',
            )}
          >
            <Text
              className={twMerge(
                'font-bold',
                item.format('D') === moment(date).format('D') && 'text-white',
                item > moment(date) && 'text-gray-400',
              )}
            >
              {item.format('D')}
            </Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};
