import React from 'react';
import './css/TemplateSelection.css';
import image5 from '../../assets/images/image5.png'


const TemplateSelection = () => {
  return (
    <div className='TemplateSelection-maindiv'>
        <div className='TemplateSelection-Container'>
            <div className='TemplateSelection-LeftColumn'>
                <h2 className="TemplateSelection-TemplateTableHeading">Templates</h2>
                <table className="TemplateSelection-TemplateTable">
                            <tbody>
                                <tr className="TemplateSelection-TemplateRow">
                                    <td className="TemplateSelection-TemplateCell-Left">
                                        <div className="TemplateSelection-Templatediv FirstRowTemplatediv1"><img src={image5} alt='image'className='TemplateSelection-image'/></div>
                                    </td>
                                    <td className="TemplateSelection-TemplateCell-Right">
                                        <div className="TemplateSelection-Templatediv FirstRowTemplatediv2"><img src={image5} alt='image'className='TemplateSelection-image'/></div>
                                    </td>
                                </tr>
                                <tr className="TemplateSelection-TemplateRow">
                                    <td className="TemplateSelection-TemplateCell-Left">
                                        <div className="TemplateSelection-Templatediv SecondRowTemplatediv1"><img src={image5} alt='image'className='TemplateSelection-image'/></div>
                                    </td>
                                    <td className="TemplateSelection-TemplateCell-Right">
                                        <div className="TemplateSelection-Templatediv SecondRowTemplatediv2"><img src={image5} alt='image'className='TemplateSelection-image'/></div>
                                    </td>
                                </tr>
                                <tr className="TemplateSelection-TemplateRow">
                                    <td className="TemplateSelection-TemplateCell-Left">
                                        <div className="TemplateSelection-Templatediv ThirdRowTemplatediv1"><img src={image5} alt='image'className='TemplateSelection-image'/></div>
                                    </td>
                                    <td className="TemplateSelection-TemplateCell-Right">
                                        <div className="TemplateSelection-Templatediv ThirdRowTemplatediv2"><img src={image5} alt='image'className='TemplateSelection-image'/></div>
                                    </td>
                                </tr>
                              
                                <tr className="TemplateSelection-TemplateRow">
                                    <td className="TemplateSelection-TemplateCell-Left">
                                        <div className="TemplateSelection-Templatediv FourthRowTemplatediv1"><img src={image5} alt='image'className='TemplateSelection-image'/></div>
                                    </td>
                                    <td className="TemplateSelection-TemplateCell-Right">
                                        <div className="TemplateSelection-Templatediv FourthRowTemplatediv2"><img src={image5} alt='image'className='TemplateSelection-image'/></div>
                                    </td>
                                </tr>
                                <tr className="TemplateSelection-TemplateRow">
                                    <td className="TemplateSelection-TemplateCell-Left">
                                        <div className="TemplateSelection-Templatediv ThirdRowTemplatediv1"><img src={image5} alt='image'className='TemplateSelection-image'/></div>
                                    </td>
                                    <td className="TemplateSelection-TemplateCell-Right">
                                        <div className="TemplateSelection-Templatediv ThirdRowTemplatediv2"><img src={image5} alt='image'className='TemplateSelection-image'/></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
            </div>
            <div className='TemplateSelection-RightColumn'>
                {/*the below is the first div tag with the class name 'TemplateSelection-RightRow' is the Color theme table*/}
                <div className='TemplateSelection-RightRow'>
                    <div className="TemplateSelection-ResponsiveColorTableContainer">
                        <h2 className="TemplateSelection-ColorTableHeading">Color Themes</h2>
                        <table className="TemplateSelection-ColorTable">
                            <thead>
                                <tr>
                                    <th className='TemplateSelection-ColorTablecolumnheading'>Primary</th>
                                    <th className='TemplateSelection-ColorTablecolumnheading'>Secondary</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="TemplateSelection-ColorCell">
                                        <button className="TemplateSelection-ColorButton FirstRowColorButton1">Red</button>
                                    </td>
                                    <td className="TemplateSelection-ColorCell">
                                        <button className="TemplateSelection-ColorButton FirstRowColorButton2">Blue</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="TemplateSelection-ColorCell">
                                        <button className="TemplateSelection-ColorButton SecondRowColorButton1">Green</button>
                                    </td>
                                    <td className="TemplateSelection-ColorCell">
                                        <button className="TemplateSelection-ColorButton SecondRowColorButton2">Yellow</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="TemplateSelection-ColorCell">
                                        <button className="TemplateSelection-ColorButton ThirdRowColorButton1">Orange</button>
                                    </td>
                                    <td className="TemplateSelection-ColorCell">
                                        <button className="TemplateSelection-ColorButton ThirdRowColorButton2">Purple</button>
                                    </td>
                                </tr>
                                {/* Below i added more sample buttons in the color theme table just to check the scroll bar */}
                                <tr>
                                    <td className="TemplateSelection-ColorCell">
                                        <button className="TemplateSelection-ColorButton ThirdRowColorButton1">Orange</button>
                                    </td>
                                    <td className="TemplateSelection-ColorCell">
                                        <button className="TemplateSelection-ColorButton ThirdRowColorButton2">Purple</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="TemplateSelection-ColorCell">
                                        <button className="TemplateSelection-ColorButton ThirdRowColorButton1">Orange</button>
                                    </td>
                                    <td className="TemplateSelection-ColorCell">
                                        <button className="TemplateSelection-ColorButton ThirdRowColorButton2">Purple</button>
                                    </td>
                                </tr>
                        
                            </tbody>
                        </table>
                    </div>
                </div>
                    {/*the below is the Second div tag with the class name 'TemplateSelection-RightRow' is the Typography table*/}
                <div className='TemplateSelection-RightRow'>
                    <div className="TemplateSelection-ResponsiveTypographyTableContainer">
                        <h2 className="TemplateSelection-TypographyTableHeading">Typography</h2>
                        <table className="TemplateSelection-TypographyTable">
                            <tbody>
                                <tr>
                                    <td className="TemplateSelection-TypographyCell">
                                        <button className="TemplateSelection-TypographyButton FirstRowTypographyButton1">Calibri</button>
                                    </td>
                                    <td className="TemplateSelection-TypographyCell">
                                        <button className="TemplateSelection-TypographyButton FirstRowTypographyButton2">Cambria</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="TemplateSelection-TypographyCell">
                                        <button className="TemplateSelection-TypographyButton SecondRowTypographyButton1">Helvetica</button>
                                    </td>
                                    <td className="TemplateSelection-TypographyCell">
                                        <button className="TemplateSelection-TypographyButton SecondRowTypographyButton2">Georgia</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="TemplateSelection-TypographyCell">
                                        <button className="TemplateSelection-TypographyButton ThirdRowTypographyButton1">Verdana</button>
                                    </td>
                                    <td className="TemplateSelection-TypographyCell">
                                        <button className="TemplateSelection-TypographyButton ThirdRowTypographyButton2">Garamond</button>
                                    </td>
                                </tr>
                                {/* Below i added more sample buttons in the typography table  just to check the scroll bar */}
                                <tr>
                                    <td className="TemplateSelection-TypographyCell">
                                        <button className="TemplateSelection-TypographyButton FourthRowTypographyButton1">Trebuchet MS</button>
                                    </td>
                                    <td className="TemplateSelection-TypographyCell">
                                        <button className="TemplateSelection-TypographyButton FourthRowTypographyButton2">Lato</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="TemplateSelection-TypographyCell">
                                        <button className="TemplateSelection-TypographyButton ThirdRowTypographyButton1">Orange</button>
                                    </td>
                                    <td className="TemplateSelection-TypographyCell">
                                        <button className="TemplateSelection-TypographyButton ThirdRowTypographyButton2">Purple</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TemplateSelection;
