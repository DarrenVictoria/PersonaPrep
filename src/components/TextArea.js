import React from 'react';


const TextArea =({maxWords, onInputChange,value, ClassName})=>{
 const handleChange=(event)=>{
    const words = event.target.value.split(/\s+/).filter(Boolean);
    if(words.length<=maxWords){
        onInputChange(event.target.value);
    }
 };

 const remainingWords = maxWords - value.split(/\s+/).filter(Boolean).length;

 return(
    <div className={`${ClassName}-container`}>
        <textarea
         className={`${ClassName}-text-area`}
         value={value}
         onChange={handleChange}
        />
        <div className={`${ClassName}-remaining-words`}>{`${remainingWords} words remaining`}</div>
    </div>
 );
};

export default TextArea;