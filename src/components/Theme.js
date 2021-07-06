/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './ThemeStyle.css';

const Theme = ({ onClick, theme }) => {

    return (
        <div>
            <div className="div10 toggle samplediv" id="sampleDiv">
                <span
                    className={
                        theme
                            ? 'light span samplespan'
                            : 'dark-theme span samplespan'
                    }
                    onClick={() => {
                        // changeSampleTheme('10', 'left : 0px', 'right : 0px');
                        onClick();
                    }}
                    role="button"
                    tabIndex="0"
                    id="clr10"
                >
                    🌜 🌞
                    <button
                        type="button"
                        className={
                            theme
                                ? 'light button samplebtn'
                                : 'dark-theme button samplebtn'
                        }
                        id="btn10"
                    />
                </span>
            </div>
        </div>
    );
};

export default Theme;
