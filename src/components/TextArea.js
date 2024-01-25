import React from 'react';


const TextArea =({maxWords, onInputChange,value, ClassName, maxWidth })=>{
 const handleChange=(event)=>{
    const words = event.target.value.split(/\s+/).filter(Boolean);
    if(words.length<=maxWords){
        onInputChange(event.target.value);
    }
 };

 const remainingWords = maxWords - value.split(/\s+/).filter(Boolean).length;

 return(
    <div className={`${ClassName}-container`} style={{ maxWidth: `${maxWidth}px` }}>
        <textarea
         className={`${ClassName}-text-area`}
         value={value}
         onChange={handleChange}
         style={{ width: '100%' }}
        />
        <div className={`${ClassName}-remaining-words`}>{`${remainingWords} words remaining`}</div>
    </div>
 );
};

export default TextArea;