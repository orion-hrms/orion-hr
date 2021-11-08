import React from "react";
import {upload} from './upload.js'

function Add() 
{
  return (
    <div className="add">
      Theme:
      <br/>
      
      <select style={{backgroundColor: "lightblue",width: "12.5%",}} id="Theme">
        <option value="Job">Job</option>
        <option value="Science">Science</option>
        <option value="Help">Help</option>
        <option value="Other">Other</option>
      </select>
      <br/>
      Allow_Comment:
      <br/>
			<select style={{backgroundColor: "lightblue",width: "12.5%",}} id="Allow_Comment">
  			<option value ="True">True</option>
  				<option value ="False">False</option>
  			</select>
      <br/>
  		Allow_Share:
      <br/>
			<select style={{backgroundColor: "lightblue",width: "12.5%",}} id="Allow_Share">
  			<option value ="True">True</option>
  			<option value ="False">False</option>
  		</select>
      <br/>
      Tittle
      <br/>
      <input style={{width: "50%",border: "3px solid black"}} id="Tittle" type="" name="" placeholder="Tittle"/>
      <br/>
  		Author_Name
      <br/>
      <input style={{width: "50%",border: "3px solid black"}}  id="Author_Name" type="" name=""></input>
      <br/>
      Content
      <br/>
  		<textarea style={{width:"50%",border: "3px solid black"}}id="contents" rows="3" cols="20" autoFocus={true} ></textarea>
      <br/>
  		<button onClick={upload}>Upload</button>
    </div>
    
  );
}

export default Add;