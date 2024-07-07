import "./SectionThree.css";

function SectionThree() {
  return (
    <div className="section-three">
      <img className="woman1" src="/woman2.png" alt="Woman 1" />
      <img className="woman2" src="/woman1.png" alt="Woman 2" />
      <div className="dark-layer"></div>
      <div className="overlay-text">
        <h1>Subscribe Our Newsletter</h1>
        <p>
          Sign up for our newsletter to receive the latest product market
          updates, and fashion tips straight to your inbox.
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
