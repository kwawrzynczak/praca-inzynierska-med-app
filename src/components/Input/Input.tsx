/* eslint-disable react/jsx-props-no-spreading */
import { TextInput as ReactNativeInput, type TextInputProps } from 'react-native';
import { Text } from '@components/Text';
import clsx from 'clsx';

interface StyledInputProps extends TextInputProps {
  className?: string;
  title?: string;
}

export const Input = ({ className, title = '', ...rest }: StyledInputProps) => {
  return (
    <>
      <Text className="mb-1 ml-2">{title}</Text>
      <ReactNativeInput
        className={clsx(
          'mb-4 rounded-lg border border-primary bg-white px-4 py-3 shadow-sm focus:border-accent',
          title === '' && 'hidden',
        )}
        {...rest}
      />
    </>
  );
};
