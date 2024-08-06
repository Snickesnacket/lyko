import { useState } from 'react';

const RangeSlider = () => {
	const [sliderValue, setSliderValue] = useState('1000'); // Set initial value

	const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSliderValue(e.currentTarget.value);
	};

	return (
		<div className="relative mb-6">
			<label htmlFor="labels-range-input" className="sr-only">Labels range</label>
			<p>{sliderValue}</p>
			<input
				id="labels-range-input"
				type="range"
				value={sliderValue}
				min="40"
				max="1000"
				className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
				onChange={handleSliderChange}
			/>
			<div className="flex justify-between">
				<span className="text-sm text-gray-500 dark:text-gray-400">Min (kr 40)</span>
				<span className="text-sm text-gray-500 dark:text-gray-400">Max (kr 1000)</span>
			</div>
		</div>
	);
};

export default RangeSlider;
