/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import { TextInput, type TextInputProps } from 'react-native';
import { StyledText } from '@components/StyledText';

interface StyledInputProps extends TextInputProps {
  className?: string;
  title?: string;
}

export const StyledInput = ({ className, title = '', ...rest }: StyledInputProps) => {
  return (
    <>
      <StyledText className="mb-1 ml-2">{title}</StyledText>
      <TextInput
        className={clsx(
          'mb-4 h-12 w-[300px] rounded-xl border border-zinc-300 bg-white px-4 py-2 text-base shadow-sm focus:border-accent',
        )}
        {...rest}
      />
    </>
  );
};
