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

     

    // optionOneHeading () {
    //     document.getElementById("OptionOneHeading").innerHTML= OptionOne;
    // };

    // optionTwoHeading () {
    //     document.getElementById("OptionTwpHeading").innerHTML= OptionTwo;
    // };


    // continueButton() {
    //   var firstHalf = document.getElementById ('firstHalf');
    //   var displaySetting = firstHalf.style.display;

    //   var button = document.getElementById ('continueButt');

    //   console.log(displaySetting);

    //   if (displaySetting == 'block') {
    //       firstHalf.style.display = 'none';
        
    //       button.innerHTML = 'Go back';
    //   }
    //   else {
    //       firstHalf.style.display = 'block';
    //       button.innerHTML = 'Continue'
    //   }
    // }

    dynamicSet() {
        var OptionOne = document.getElementById("NameOne").value;
        var OptionTwo = document.getElementById("NameTwo").value;
    
        var Crit1 = document.getElementById("CritOne").value;
        var Crit2 = document.getElementById("CritTwo").value;
       
        var Crit1Importance = document.getElementById("Crit1Importance").value; console.log(Crit1Importance);
        var Crit2Importance = document.getElementById("Crit2Importance").value; console.log(Crit2Importance);
    
        var Job1Crit1 = document.getElementById("Job1Crit1").value; console.log(Job1Crit1);
        var Job1Crit2 = document.getElementById("Job1Crit2").value;  console.log(Job1Crit2);
    
        var Job2Crit1 = document.getElementById("Job1Crit1").value; console.log(Job2Crit1);
        var Job2Crit2 = document.getElementById("Job1Crit2").value; console.log(Job2Crit2);
    
        var OptionOneValue = (Job1Crit1 * Crit1Importance) + (Job1Crit2 * Crit2Importance) ; console.log (OptionOneValue);
        var OptionTwoValue = (Job2Crit1 * Crit1Importance) + (Job2Crit2 * Crit2Importance); console.log (OptionTwoValue);
    
        var HighestOptionValue = Math.max(OptionOneValue, OptionTwoValue); console.log (HighestOptionValue);

       console.log 

        document.getElementById("HighestOptionValue").innerHTML = HighestOptionValue;
 
        PairOptions();
    }

    PairOptions() {
        if (OptionOneValue > OptionTwoValue) {
              document.getElementById("WinningOption").innerHTML= OptionOne;
          }
  
          else {
              document.getElementById("WinningOption").innerHTML= OptionTwo;
          }
      };

    // dynamicSet() {
    //     var OptionOne = document.getElementById("NameOne").innerHTML;
    //     var OptionTwo = document.getElementById("NameTwo").innerHTML;
    
    //     var Crit1 = document.getElementById("CritOne").innerHTML;
    //     var Crit2 = document.getElementById("CritTwo").innerHTML;
       

    //     var Crit1Importance = 0;
    //     var Crit2Importance = 0;

    //     Crit1Importance = parseInt(document.getElementById("Crit1Importance").innerHTML); console.log(Crit1Importance);
    //     Crit2Importance = parseInt(document.getElementById("Crit2Importance").innerHTML); console.log(Crit2Importance);

    //     var Job1Crit1 = 0;
    //     var Job1Crit2 = 0;
    
    //     Job1Crit1 = parseInt(document.getElementById("Job1Crit1").innerHTML); console.log(Job1Crit1);
    //     Job1Crit2 = parseInt(document.getElementById("Job1Crit2").innerHTML);  console.log(Job1Crit2);

    //     var Job2Crit1 = 0;
    //     var Job2Crit2 = 0;
    
    //     Job2Crit1 = parseInt(document.getElementById("Job1Crit1").innerHTML); console.log(Job2Crit1);
    //     Job2Crit2 = parseInt(document.getElementById("Job1Crit2").innerHTML); console.log(Job2Crit2);

       
    //     OptionOneValue = parseInt((Job1Crit1 + Job1Crit2) * Crit1Importance); console.log (OptionOneValue);
    //     OptionTwoValue = parseInt((Job2Crit1 + Job2Crit2) * Crit2Importance); console.log (OptionTwoValue);
    
    //     HighestOptionValue = Math.max(OptionOneValue, OptionTwoValue); console.log (HighestOptionValue);
        


    //     document.getElementById("HighestOptionValue").innerHTML = HighestOptionValue;
 
    // }



    render() {
        return (
        <div>
            <div id="firstHalf">
            {/* "Crit" short for Criteria */}
            <div className="OptionOneName"> <label for="NameOne"> Option one: </label> <input type="text" id="NameOne" placeholder="Option One" /></div>
            <div className="OptionTwoName"> <label for="NameTwo"> Option two: </label>  <input type="text" id="NameTwo" placeholder="Option Two" /></div>
               <hr />
            <div className="CriteriaOne"> <label for="CritOne"> Criteria One: </label>  <input type="text" id="CritOne" placeholder="Criteria One" /></div>
            <div id="Criteria OneImportance">
               <label for="Crit1Importance"> Importance: &nbsp; </label> 
             <select required id="Crit1Importance">
                 
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6">6</option>
                 <option value="7">7</option>
                 <option value="8">8</option>
                 <option value="9">9</option>
                 <option value="10">10</option>
             </select>
             </div>
             <hr />
            <div className="CriteriaTwo"> <label for="CritTwo"> Criteria Two: </label>  <input type="text" id="CritTwo" placeholder="Criteria Two" /></div>
            
             <div className="CriteriaOne"> </div>
             <div className="CriteriaTwo"> </div>
             
             <div id="Criteria TwoImportance"> 
                 <label for="Crit2Importance"> Importance:&nbsp; </label> 
                 <select required id="Crit2Importance">
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6">6</option>
                 <option value="7">7</option>
                 <option value="8">8</option>
                 <option value="9">9</option>
                 <option value="10">10</option>
                  </select> 
             </div>
             <br/>
             </div>
             
             {/* <button onClick="continueButton()" id="continueButt">Continue</button> */}
             <div id="secondHalf">
             <hr />
             <h1> <span id="OptionOneHeading"> Lorem </span> </h1> <br /> 
             
             <div >
                <label for="Job1Crit1"> <span id="CriteriaOneLabel"> "Criteria One": &nbsp;  </span>   </label> 
                    <select required id="Job1Crit1">
                    <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6">6</option>
                 <option value="7">7</option>
                 <option value="8">8</option>
                 <option value="9">9</option>
                 <option value="10">10</option>
                    </select> 
             </div>
                        
                  <label for="Job1Crit2"> "Criteria Two": &nbsp;  </label> 
             <select required id="Job1Crit2">
             <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6">6</option>
                 <option value="7">7</option>
                 <option value="8">8</option>
                 <option value="9">9</option>
                 <option value="10">10</option>
                  </select> 

                  <hr />
             <h1> <span id="OptionTwoHeading"> Ipsum </span> </h1> <br /> 
             
             {/* "Crit" short for Criteria */}
             <div >
                <label for="Job2Crit1"> <span id="CriteriaOneLabel"> "Criteria One": &nbsp; </span>  </label> 
                    <select required id="Job2Crit1">
                    <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6">6</option>
                 <option value="7">7</option>
                 <option value="8">8</option>
                 <option value="9">9</option>
                 <option value="10">10</option>
                    </select> 
             </div>
                        
                  <label for="Job2Crit2"> "Criteria Two": &nbsp;  </label> 
             <select required id="Job2Crit2">
             <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6">6</option>
                 <option value="7">7</option>
                 <option value="8">8</option>
                 <option value="9">9</option>
                 <option value="10">10</option>
                  </select> 

                  
                    <hr/>
                    <button className="buttonclass" onClick={ this.dynamicSet }  >Update</button>
                    
                    <br />
                    <br />
                 <h4> Your best choice would be "<span id="WinningOption"> </span>" with a score of "<span id="HighestOptionValue"> </span>". </h4> 
                </div>
           </div>
        )
    }



}
            





export default UserInterface;
