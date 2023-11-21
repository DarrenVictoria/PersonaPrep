import React from 'react';
import '../TemplateSelection.css'; 
const TemplateSelection = () => {
    return(
        <div>
            <div className='TemplateSelection-Container'>
                <div className='TemplateSelection-LeftColumn'>Left column</div>
                <div className='TemplateSelection-RightColumn'>
                    <div className='TemplateSelection-RightRow'>Right Row 1</div>
                    <div className='TemplateSelection-RightRow'>Right Row 2</div>
                </div>
            </div>
        </div>
    )

}
export default TemplateSelection