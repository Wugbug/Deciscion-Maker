import React, { Component } from 'react';


var input1 = "Default";




class UserInterface extends Component {
    constructor() {
        super();

        this.state = {
            highestOptionValue: 0
        }
        this.dynamicSet = this.dynamicSet.bind(this);
    }

    getInput(data) {
        input1 = document.getElementById(data).value;
        return input1;
    }

     PairOptions() {
      if (OptionOneValue > OptionTwoValue) {
            document.getElementById("WinningOption").innerHTML= OptionOne;
        }

        else {
            document.getElementById("WinningOption").innerHTML= OptionTwo;
        }
    };

    dynamicSet() {
        var OptionOne = document.getElementById("NameOne").value;
        var OptionTwo = document.getElementById("NameTwo").value;
    
        var Crit1 = document.getElementById("CritOne").value;
        var Crit2 = document.getElementById("CritTwo").value;
       
        var Crit1Importance = parseInt(document.getElementById("Crit1Importance").value);
        var Crit2Importance = parseInt(document.getElementById("Crit2Importance").value);
    
        var Job1Crit1 = parseInt(document.getElementById("Job1Crit1").value);
        var Job1Crit2 = parseInt(document.getElementById("Job1Crit2").value);
    
        var Job2Crit1 = parseInt(document.getElementById("Job1Crit1").value);
        var Job2Crit2 = parseInt(document.getElementById("Job1Crit2").value);
    
        var OptionOneValue = parseInt((Job1Crit1 + Job1Crit2) * Crit1Importance);
        var OptionTwoValue = parseInt((Job2Crit1 + Job2Crit2) * Crit2Importance);
    
        var HighestOptionValue = Math.max(OptionOneValue, OptionTwoValue)
        console.log(HighestOptionValue);


        document.getElementById("HighestOptionValue").innerHTML = HighestOptionValue;
 
    }

    render() {
        return (
        <div>
            {/* "Crit" short for Criteria */}
            <div className="OptionOneName"> <label for="NameOne"> Option one: </label> <input type="text" id="NameOne" placeholder="Option One" /></div>
            <div className="OptionTwoName"> <label for="NameTwo"> Option two: </label>  <input type="text" id="NameTwo" placeholder="Option Two" /></div>
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
             <h1> "Option One" </h1> <br /> 
             
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
             <h1> "Option Two" </h1> <br /> 
             
             {/* "Crit" short for Criteria */}
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
                    <button class="buttonclass" onClick={ this.dynamicSet} >Update</button>
                    
                    <br />
                    <br />
                 <h4> Your best choice would be <span id="WinningOption"> </span> with a score of <span id="HighestOptionValue"></span> </h4> 

           </div>
        )
    }



}
            





export default UserInterface;
