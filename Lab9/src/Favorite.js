
const Favorite = () => {
    return (
    <>
    {/* <h2 className="subtitle">This is the page for Favorute section</h2> */}
    <h2 className="subtitle">Q. How do I search for images with multiple keywords?<br></br>
       A. You can type multiple keywords in the search bar and make usre you
       separate them with space or comma; then press search button to get result. <br></br> <br></br>
       Q. How can I download the picture I want? <br></br>
       A. You just need to right click the image you want to download and click Save Image As. <br></br> <br></br>
       If you have any other questions or suggesttions about our website, feel free to communicate with us
       by email 12345678@fake.com or using the comment box.</h2>
    <div className="comment">
        <form >
        <label>Communicate with us</label>
        <textarea
         placeholder={`Please enter the message you want to send to us.`}
        ></textarea>
        <button>Send message</button>
        </form>
    </div>
   
    </>
    
    )
}

export default Favorite;

