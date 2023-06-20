import "./PrimaryButton.css";

function PrimaryButton({ btnName, onBtnClick }) {
  return (
    <>
      <button
        className="PrimaryButton"
        onClick={() => {
          console.log("clicked", btnName);
          onBtnClick(btnName);
        }}
      >
        {btnName}
      </button>
    </>
  );
}

export default PrimaryButton;
