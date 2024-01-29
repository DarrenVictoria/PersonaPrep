import React from 'react';
import { useState } from 'react';
import CustomRating from '../FaceIconRating';
const CvFeedback = () => {
    const [item1Rating, setItem1Rating] = useState(5);
    const [item2Rating, setItem2Rating] = useState(5);
    const [item3Rating, setItem3Rating] = useState(5);
    return(
        <div>
            {/* CustomRating component for item 1 */}
            <CustomRating value={item1Rating} onChange={setItem1Rating} /><br/>
            
            {/* CustomRating component for item 2 */}
            <CustomRating value={item2Rating} onChange={setItem2Rating} /><br/>
            
            {/* CustomRating component for item 3 */}
            <CustomRating value={item3Rating} onChange={setItem3Rating} /><br/>
        </div>
    )

}
export default CvFeedback