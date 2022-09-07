import React, { useState } from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import {connect} from 'react-redux'


/**
 * COMPONENT
 */
const Forecast = ({ data }) => {
    const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInAWeek)
    );

    return (
        <>
            <label className='title'>Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={ idx }>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'>
                                    <img alt='weather' className='icon-small' src={ `images/weather icons/${ item.weather[0].icon }.png` } />
                                    <label className='day'>{ forecastDays[idx] }</label>
                                    <label className='description'>{ item.weather[0].description.split(' ').map(word => word[0].toUpperCase()+word.substring(1)).join(' ')  }</label>
                                    <label className='temp'>{ Math.round(item.main.temp) }°F</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='daily-details-grid'>
                                <div className='daily-details-grid-item'>
                                    <label>Feels Like</label>
                                    <label>{ Math.round(item.main.feels_like) }°F</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Humidity</label>
                                    <label>{ item.main.humidity }%</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Wind</label>
                                    <label>{ Math.round(item.wind.speed) } mph</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}


export default connect()(Forecast)
