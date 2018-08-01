import React, { Component } from 'react';


var input1 = "Default"

class UserInterface extends Component {







    getInput(data) {
        input1 = document.getElementById(data).value;
        return input1;
    }



    render() {
        return (
        <div>
            <div className="OptionOneName"> <label for="NameOne"> Job one: </label> <input type="text" id="NameOne" placeholder="Option One" /></div>
            <div className="OptionTwoName"> <label for="NameTwo"> Job two: </label>  <input type="text" id="NameTwo" placeholder="Option Two" /></div>
               <hr />
            <div className="CriteriaOne"> <label for="CritOne"> Criteria One: </label>  <input type="text" id="CritOne" placeholder="Criteria One" /></div>
            <div id="Criteria OneImportance">
               <label for="Crit1Importance"> Importance: </label> 
             <select required id="Crit1Importance">
                 
                 <option value="One">1</option>
                 <option value="Two">2</option>
                 <option value="Three">3</option>
                 <option value="Four">4</option>
                 <option value="Five">5</option>
                 <option value="Six">6</option>
                 <option value="Seven">7</option>
                 <option value="Eight">8</option>
                 <option value="Nine">9</option>
                 <option value="Ten">10</option>
             </select>
             </div>
             <hr />
            <div className="CriteriaTwo"> <label for="CritTwo"> Criteria Two: </label>  <input type="text" id="CritTwo" placeholder="Criteria Two" /></div>
            
             <div className="CriteriaOne"> </div>
             <div className="CriteriaTwo"> </div>

             
             
             <div id="Criteria TwoImportance"> 
                 <label for="Crit2Importance"> Importance: </label> 
                 <select required id="Crit2Importance">
                     <option value="One">1</option>
                     <option value="Two">2</option>
                     <option value="Three">3</option>
                     <option value="Four">4</option>
                     <option value="Five">5</option>
                     <option value="Six">6</option>
                     <option value="Seven">7</option>
                     <option value="Eight">8</option>
                     <option value="Nine">9</option>
                     <option value="Ten">10</option>
                  </select> 
             </div>
             <hr />
             <h1> "Job One" </h1> <br /> 
             
             <div >
                <label for="Job1Crit1"> "Criteria One": &nbsp;   </label> 
                    <select required id="Job1Crit1">
                        <option value="One">1</option>
                        <option value="Two">2</option>
                        <option value="Three">3</option>
                        <option value="Four">4</option>
                        <option value="Five">5</option>
                        <option value="Six">6</option>
                        <option value="Seven">7</option>
                        <option value="Eight">8</option>
                        <option value="Nine">9</option>
                        <option value="Ten">10</option>
                    </select> 
             </div>
                        
                  <label for="Job1Crit2"> "Criteria Two": &nbsp;  </label> 
             <select required id="Job1Crit2">
                     <option value="One">1</option>
                     <option value="Two">2</option>
                     <option value="Three">3</option>
                     <option value="Four">4</option>
                     <option value="Five">5</option>
                     <option value="Six">6</option>
                     <option value="Seven">7</option>
                     <option value="Eight">8</option>
                     <option value="Nine">9</option>
                     <option value="Ten">10</option>
                  </select> 

                  <hr />
             <h1> "Job Two" </h1> <br /> 
             
             <div >
                <label for="Job2Crit1"> "Criteria One": &nbsp;   </label> 
                    <select required id="Job2Crit1">
                        <option value="One">1</option>
                        <option value="Two">2</option>
                        <option value="Three">3</option>
                        <option value="Four">4</option>
                        <option value="Five">5</option>
                        <option value="Six">6</option>
                        <option value="Seven">7</option>
                        <option value="Eight">8</option>
                        <option value="Nine">9</option>
                        <option value="Ten">10</option>
                    </select> 
             </div>
                        
                  <label for="Job2Crit2"> "Criteria Two": &nbsp;  </label> 
             <select required id="Job2Crit2">
                     <option value="One">1</option>
                     <option value="Two">2</option>
                     <option value="Three">3</option>
                     <option value="Four">4</option>
                     <option value="Five">5</option>
                     <option value="Six">6</option>
                     <option value="Seven">7</option>
                     <option value="Eight">8</option>
                     <option value="Nine">9</option>
                     <option value="Ten">10</option>
                  </select> 
                  
                  
                    <hr/>
                <h4> Your best choice would be " Name of option with Highest value" </h4>
                  
             
            
           </div>
        )
    }
}
            
            // var NameUno = document.getElementById("NameOne")
            // var NameDos = document.getElementById("NameTwo")

            // var CritOneImportance = document.getElementById("Criteria OneImportance")
            // var CritTwoImportance = document.getElementById("Criteria TwoImportance")


export default UserInterface;
