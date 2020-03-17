import React, { Component } from "react";

class ImageGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageTag: "",
      defaultImg: ""
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    var url = "https://cataas.com/cat/" + this.state.imageTag;
    fetch(url)
      .then(res => res.json())
      .then(response => {
        //const { cats } = response.data;
        //console.log(cats);
        this.setState({ defaultImg: response });
      });
  }

  handleEvent(event) {
    this.setState({ imageTag: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit(event) {
    alert("A preference was submitted: " + this.state.imageTag);
    this.componentDidMount();
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
