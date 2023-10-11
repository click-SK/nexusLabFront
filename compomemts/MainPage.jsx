import React from 'react';
import CallToAction from './componentsOnTheMainPage/CallToAction';
import WhyWorkWithUs from './componentsOnTheMainPage/WhyWorkWithUs';
import WeGuaranteeAndMainDirections from './componentsOnTheMainPage/WeGuaranteeAndMainDirections';
import FocusAtention from './componentsOnTheMainPage/FocusAtention';
import SevenSteps from './componentsOnTheMainPage/SevenSteps';
import SiteDream from './componentsOnTheMainPage/SiteDream';
import Reviews from './componentsOnTheMainPage/Reviews';
import Portfolios from './componentsOnTheMainPage/Portfolios';
import { getDictionary } from '@/lib/dictionary';
const MainPage = async ({lang}) => {
    const { page } = await getDictionary(lang)
    return (
        <>
            <CallToAction lang={lang}/>
            <WhyWorkWithUs page={page}/>
            <WeGuaranteeAndMainDirections lang={lang}/>
            <Portfolios lang={lang}/>
            <FocusAtention lang={lang}/>
            <SevenSteps lang={lang}/>
            <Reviews lang={lang}/>
            <SiteDream lang={lang}/>
        </>
    );
};

export default MainPage;