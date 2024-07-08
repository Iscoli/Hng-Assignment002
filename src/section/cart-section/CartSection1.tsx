import './CartSection1.css'


export default function CartSection1() {
  return (
    <div style={{ position: "relative", paddingTop: "70px" }}>
      <hr />
      <div
        style={{
          position: "relative",
          background: "#251F73",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <h1 className="mainCart-text">Cart Added</h1>
      </div>
    </div>
  );
}
