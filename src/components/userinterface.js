import React, { Component } from 'react';


var input1 = "Default";
var OptionOneValue = 0;
var OptionTwoValue = 0;
var OptionOne = "NULL";
var OptionTwo = "NULL";



class UserInterface extends Component {
    constructor() {
        super();

        this.state = {
            highestOptionValue: 0
        }
        this.dynamicSet = this.dynamicSet.bind(this);
        this.showHideResults = this.showHideResults.bind(this);
        this.showHide = this.showHide.bind(this);
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

        OptionOne = document.getElementById("NameOne").value;
        OptionTwo = document.getElementById("NameTwo").value;
    
        var Crit1 = document.getElementById("CritOne").value;
        var Crit2 = document.getElementById("CritTwo").value;
       
        var Crit1Importance = document.getElementById("Crit1Importance").value; console.log (Crit1Importance);
        var Crit2Importance = document.getElementById("Crit2Importance").value; console.log (Crit2Importance);
    
        var Job1Crit1 = document.getElementById("Job1Crit1").value; console.log (Job1Crit1);
        var Job1Crit2 = document.getElementById("Job1Crit2").value;  console.log (Job1Crit2);
    
        var Job2Crit1 = document.getElementById("Job2Crit1").value; console.log (Job2Crit1);
        var Job2Crit2 = document.getElementById("Job2Crit2").value; console.log (Job2Crit2);
    
        OptionOneValue = (Job1Crit1 * Crit1Importance) + (Job1Crit2 * Crit2Importance) ;  console.log (OptionOneValue);
        OptionTwoValue = (Job2Crit1 * Crit1Importance) + (Job2Crit2 * Crit2Importance);  console.log (OptionTwoValue);
    
        var HighestOptionValue = Math.max(OptionOneValue, OptionTwoValue); 

        document.getElementById("HighestOptionValue").innerHTML = HighestOptionValue;
        document.getElementById("OptionOneHeading").innerHTML = OptionOne;
        document.getElementById("OptionTwoHeading").innerHTML = OptionTwo;
        document.getElementById("losingScore").innerHTML = OptionTwo;
        document.getElementById("CriteriaOneLabel").innerHTML = Crit1;
        document.getElementById("CriteriaTwoLabel").innerHTML = Crit2;
        document.getElementById("CriteriaOneLabel1").innerHTML = Crit1;
        document.getElementById("CriteriaTwoLabel2").innerHTML = Crit2;
 
        if (OptionOneValue > OptionTwoValue) {
            document.getElementById("WinningOption").innerHTML = OptionOne;
            document.getElementById("losingOption").innerHTML = OptionTwo;
            document.getElementById("losingScore").innerHTML = OptionTwoValue;
        }

        else {
            document.getElementById("WinningOption").innerHTML = OptionTwo;
            document.getElementById("losingOption").innerHTML = OptionOne;
            document.getElementById("losingScore").innerHTML = OptionOneValue;
        }
    }

    showHide() {
        var x = document.getElementById("secondHalf");
        var y = document.getElementById("firstHalf");
        var z = document.getElementsByClassName("showResults");
        if (x.style.display=="none") {
            x.style.display="block";
            y.style.display="none";
            document.getElementById("toggleButton1").innerHTML =  "Go Back";
            z.style.display="block"
        } else {
            x.style.display = "none";
            y.style.display="block";
            document.getElementById("toggleButton1").innerHTML =  "Continue";
        }
    }

    showHideResults() {
        var x = document.getElementById("results");
        var y = document.getElementById("secondHalf");
        var z = document.getElementById("toggleButton1");
        var q = document.getElementById("resultsReturnBttn");
            if (x.style.display=="none") {
            x.style.display="block";
            y.style.display="none";
            z.style.display="none";
            q.style.display="block";
        } else {
            x.style.display = "none";
            y.style.display="block";
            z.style.display="block";
            q.style.display="none";
        }
    }

    Continue() {
        if (OptionOne=="") {
            alert("Please fill in all Information")
        } else if (OptionTwo=="") {
            alert("Please fill in all Information")
        } else if (Crit1="") {
            alert("Please fill in all Information")
        } else if (Crit2="") {
            alert("Please fill in all Information")
        } else {
            OptionOne = document.getElementById("NameOne").value;
        OptionTwo = document.getElementById("NameTwo").value;
    
        var Crit1 = document.getElementById("CritOne").value;
        var Crit2 = document.getElementById("CritTwo").value;
       
        var Crit1Importance = document.getElementById("Crit1Importance").value; console.log (Crit1Importance);
        var Crit2Importance = document.getElementById("Crit2Importance").value; console.log (Crit2Importance);
    
        var Job1Crit1 = document.getElementById("Job1Crit1").value; console.log (Job1Crit1);
        var Job1Crit2 = document.getElementById("Job1Crit2").value;  console.log (Job1Crit2);
    
        var Job2Crit1 = document.getElementById("Job2Crit1").value; console.log (Job2Crit1);
        var Job2Crit2 = document.getElementById("Job2Crit2").value; console.log (Job2Crit2);
    
        OptionOneValue = (Job1Crit1 * Crit1Importance) + (Job1Crit2 * Crit2Importance) ;  console.log (OptionOneValue);
        OptionTwoValue = (Job2Crit1 * Crit1Importance) + (Job2Crit2 * Crit2Importance);  console.log (OptionTwoValue);
    
        var HighestOptionValue = Math.max(OptionOneValue, OptionTwoValue); 

        document.getElementById("HighestOptionValue").innerHTML = HighestOptionValue;
        document.getElementById("OptionOneHeading").innerHTML = OptionOne;
        document.getElementById("OptionTwoHeading").innerHTML = OptionTwo;
        document.getElementById("losingScore").innerHTML = OptionTwo;
        document.getElementById("CriteriaOneLabel").innerHTML = Crit1;
        document.getElementById("CriteriaTwoLabel").innerHTML = Crit2;
        document.getElementById("CriteriaOneLabel1").innerHTML = Crit1;
        document.getElementById("CriteriaTwoLabel2").innerHTML = Crit2;
 
        if (OptionOneValue > OptionTwoValue) {
            document.getElementById("WinningOption").innerHTML = OptionOne;
            document.getElementById("losingOption").innerHTML = OptionTwo;
            document.getElementById("losingScore").innerHTML = OptionTwoValue;
        }

        else {
            document.getElementById("WinningOption").innerHTML = OptionTwo;
            document.getElementById("losingOption").innerHTML = OptionOne;
            document.getElementById("losingScore").innerHTML = OptionOneValue;
        } 
        }
    }

    render() {
        return (
        <div id="wrapper">
            <div id="firstHalf">
            {/* "Crit" short for Criteria */}
            <div className="OptionOneName"> <label for="NameOne"> Option one: </label> <input type="text" id="NameOne" placeholder="Option One" onChange={this.dynamicSet} /></div>
            <div className="OptionTwoName"> <label for="NameTwo"> Option two: </label>  <input type="text" id="NameTwo" placeholder="Option Two" onChange={this.dynamicSet} /></div>
               <hr />
            <div className="CriteriaOne"> <label for="CritOne"> Criteria One: </label>  <input type="text" id="CritOne" placeholder="Criteria One" onChange={this.dynamicSet} /></div>
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
            <div className="CriteriaTwo"> <label for="CritTwo"> Criteria Two: </label>  <input type="text" id="CritTwo" placeholder="Criteria Two" onChange={this.dynamicSet} /></div>
            
             <div className="CriteriaOne"> </div>
             <div className="CriteriaTwo"> </div>
             
             <div id="Criteria TwoImportance"> 
                 <label for="Crit2Importance"> Importance:&nbsp; </label> 
                 <select required id="Crit2Importance" onChange={this.dynamicSet}>
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
             <hr />
             <button id="toggleButton1" onClick={this.showHide}> Continue </button>
             <div id="secondHalf">
             <h1> <span id="OptionOneHeading"> Option one </span> </h1> <br /> 
             
             <div >
                <label for="Job1Crit1"> <span id="CriteriaOneLabel"> "Criteria One":   </span>&nbsp;   </label> 
                    <select required id="Job1Crit1" onChange={this.dynamicSet}>
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
                        
                  <label for="Job1Crit2"> <span id="CriteriaTwoLabel"> "Criteria Two":   </span>&nbsp;    </label> 
             <select required id="Job1Crit2" onChange={this.dynamicSet}>
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
             <h1> <span id="OptionTwoHeading"> Option two </span> </h1> <br /> 
             
             {/* "Crit" short for Criteria */}
             <div >
                <label for="Job2Crit1"><span id="CriteriaOneLabel1"> "Criteria One":   </span>&nbsp;    </label> 
                    <select required id="Job2Crit1" onChange={this.dynamicSet}>
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
                        
                  <label for="Job2Crit2"><span id="CriteriaTwoLabel2"> "Criteria Two":   </span>&nbsp;     </label> 
             <select required id="Job2Crit2" onChange={this.dynamicSet}>
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
                    <button className="showResults" onClick={ this.showHideResults }  >Calculate results</button>
                    
                    <br />
                    <br />
                
                </div>
                <div id="results">
                 <h4> Your best choice would be "<span id="WinningOption"> </span>" with a score of "<span id="HighestOptionValue"> </span>" vs. "<span id="losingOption"> </span>" with a score of "<span id ="losingScore"> </span>". </h4> 
                </div>
                <div id="resultsReturnBttn"> <button id="return" onClick={this.showHideResults}> Return </button> </div>
           </div>

        )
    }



}
            





export default UserInterface;
