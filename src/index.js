'use strict';
import { useState, useEffect } from 'react';

const useScreenType = () => {
	const [screenType, setScreenType] = useState(getScreenType());

	const resizeEvent = () => {
		setScreenType(getScreenType())
	}

	useEffect(() => {
		window.addEventListener('resize', resizeEvent);
		return () => {
			window.removeEventListener('resize', resizeEvent);
		};
	}, [])

	return screenType;
}

const getScreenType = () => {
	let screenType = null;

	if (typeof window !== 'undefined') {
		if (window.matchMedia('(max-width: 575px)').matches) {
			screenType = 'xSmall';
		} else if (window.matchMedia('(max-width: 767px)').matches) {
			screenType = 'small';
		} else if (window.matchMedia('(max-width: 991px)').matches) {
			screenType = 'medium';
		} else if (window.matchMedia('(max-width: 1199px)').matches) {
			screenType = 'large';
		} else {
			screenType = 'xLarge';
		}
	}

	return screenType;
}

export default useScreenType;