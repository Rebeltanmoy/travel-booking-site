import React from 'react';

import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg'
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg'
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        region: '-Bangladesh-'
    },
    {
        img: mechanic2,
        name: 'John Anderson',
        region: '-India-'
    },
    {
        img: mechanic3,
        name: 'Zakaria Smith',
        region: '-America-'
    },
    {
        img: mechanic4,
        name: 'Sakib Anderson',
        region: '-Dubai-'
    },
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary mt-5">Our Guide</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;