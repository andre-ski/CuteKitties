import React, { Component } from "react";
const url = "https://cataas.com/cat/";

class ImageGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageTag: "",
      defaultImg: url
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEvent(event) {
    this.setState({ imageTag: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit(event) {
    this.setState({ defaultImg: url + this.state.imageTag });
    console.log(this.state.defaultImg);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <div>
          <img src={this.state.defaultImg} alt="" />
        </div>
        <form class="form-inline" onSubmit={this.handleSubmit}>
          <label>
            Cat Preferences:
            <input
              type="text"
              value={this.state.imageTag}
              onChange={this.handleEvent}
            />
          </label>
          <button type="submit">SHOW ME THE KITTIES</button>
        </form>
      </div>
    );
  }
}
export default ImageGenerator;
