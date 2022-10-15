import "./Form.css";

function Form() {
  return (
    <div class="form">
      <div class="form-text">Sign Up For The BETA to see more</div>
      <div class="form-input">
        <input placeholder="Business Name"></input>
        <input placeholder="Email"></input>
      </div>
      <div class="form-button">
        <button id="form-button-notify">Notify me</button>
        <button id="form-button-sign">
          <a href="https://retink.io/fap/">Sign up as a freelance partner</a>
        </button>
      </div>
    </div>
  );
}

export default Form;
