import { memo } from 'react';
import clsx from 'clsx';
import type { ButtonProps } from './types';
import s from './Button.module.css';

const Button: React.FC<ButtonProps> = ({ className }) => {
	return <div className={clsx(s.wrap, className)}>Button</div>;
};

export default memo(Button);
