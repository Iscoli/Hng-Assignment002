import "./SectionThree.css";

function SectionThree() {
  return (
    <div className="section-three">
      <img className="woman1" src="/woman2.png" alt="Woman 1" />
      <img className="woman2" src="/woman1.png" alt="Woman 2" />
      <div className="dark-layer"></div>
      <div className="overlay-test">
        <h5>Subscribe Our Newsletter</h5>
        <p>
          Sign up for our newsletter to receive the latest <br></br> product market
          updates, and fashion tips <br></br> straight to your inbox.
        </p>
        <form>
          <input 
          placeholder="Enter Email"
          />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default SectionThree;
