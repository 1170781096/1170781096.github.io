import React, {useState} from "react";
import Unsplash, { toJson } from "unsplash-js";

export default function SearchPhotos2() {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);
    const imageClick = (url) => {
     
      // window.location.href = url;
      window.open(url,'_blank');
      
    }
   
    const unsplash = new Unsplash({
      accessKey:"PkW7Q-_GnUJ30JJn-Eew_hMUgSSWHp29de9YVtbrz7A",
  });
    const searchPhotos = async(e) => {
      e.preventDefault();
      console.log("Submitting the Form");
      unsplash.search
        .photos(query,1,25)
        .then(toJson)
        .then((json) => {setPics(json.results,console.log(json));
        });
    }
    
    const [buttonText, setButtonText] = useState("City");
    const [buttonText1, setButtonText1] = useState("People");
    const [buttonText2, setButtonText2] = useState("Fruit");
    const [buttonText3, setButtonText3] = useState("Animal");

    
    return (
        <>
      <div className = "preferenceButton">
        <button type="button" className="button" onClick = {() => setQuery(buttonText)} >
          {buttonText}
        </button>
        &nbsp;
        &nbsp;
        &nbsp;
        <button type="button" className="button" onClick = {() => setQuery(buttonText1)} >
        {buttonText1}
        </button>
        &nbsp;
        &nbsp;
        &nbsp;
        <button type="button" className="button" onClick = {() => setQuery(buttonText2)}>
        {buttonText2}
        </button>
        &nbsp;
        &nbsp;
        &nbsp;
        <button type="button" className="button" onClick = {() => setQuery(buttonText3)}>
        {buttonText3}
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       

        <button type="button" className="button" onClick={() => {setButtonText("Spring");setButtonText1("Summer");setButtonText2("Autumn");setButtonText3("Winter")} } >
          Change theme set
        </button>
      </div>
      <br></br>
      <br></br>

      <form className="form" onSubmit={searchPhotos}> 
        <label className="label" htmlFor="query"> 
          {" "}
          
        </label>
        {/* <input
          type="text"
          name="query"
          className="input"
          placeholder={`Enter the keyword of the image you want to search, such as "tree" or "winter"`}
          value = {query}
          onChange = {(e) => setQuery(e.target.value)}

        /> */}
        <button type="submit" className="button">
          Confirm
        </button>
      </form>
      <div className="images-list">
        {pics.map((pic) => <div className = "image" key = {pic.id}>
          <img className = "imageCard"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
                onClick={() => imageClick(pic.urls.full)}></img>
        </div>)}
      </div>
        </>
    );
}