import React from "react";
import "./css/searchbar.css";
import PokeCard from "./PokeCard";
import axios from "axios";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "", isSubmitted: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.receiveData = this.receiveData;
    this.recieveDexNum = this.recieveDexNum;
    this.recieveTypeOne = this.recieveTypeOne;
    this.recieveName = this.recieveName;
  }

  handleChange(event) {
    this.setState({
      search: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault(); // prevent page reload on submit
    const searchTerm = event.target.elements.query.value;
    console.log(searchTerm);
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const res = await axios.get(`${url}${searchTerm}`);
    console.log(res);
    this.receiveData(res);
    this.setState({ isSubmitted: true });
  }

  // ---------------------------------------------

  receiveData(res) {
    this.recieveImg(res);
    this.recieveDexNum(res);
    this.recieveName(res);
    this.recieveTypeOne(res);
  }

  recieveImg(receiveData) {
    return `${receiveData.data["sprites"]["front_default"]}`;
  }

  recieveName(receiveData) {
    return `${
      receiveData.data["name"].charAt(0).toUpperCase() +
      receiveData.data["name"].slice(1)
    }`;
  }

  recieveDexNum(receiveData) {
    return `#${receiveData.data["game_indices"][8]["game_index"]}`;
  }

  recieveTypeOne(receiveData) {
    return receiveData.data["types"][0]["type"]["name"];
  }

  // --------------------------------

  render() {
    const isSubmitted = this.state.isSubmitted;

    let content;
    if (isSubmitted) {
      content = (
        <div>
          <section className="search-section">
            <div className="oval-one">
              <div className="oval-two">
                <form action="" id="searchForm" onSubmit={this.handleSubmit}>
                  <input
                    value={this.state.search}
                    type="text"
                    placeholder="START LOOKING FOR POKEMON..."
                    className="search-box"
                    name="query"
                    onChange={this.handleChange}
                  />
                  <button type="submit">
                    <i className="fa-solid fa-magnifying-glass text-white search-icon fa-2x"></i>
                  </button>
                </form>
              </div>
            </div>
          </section>
          {/* <PokeCard
            dexNum={this.recieveDexNum}
            pokeImg={this.recieveImg}
            pokeName={this.recieveName}
            typeOne={this.recieveTypeOne}
          /> */}
        </div>
      );
    } else {
      content = (
        <div>
          <section className="search-section">
            <div className="oval-one">
              <div className="oval-two">
                <form action="" id="searchForm" onSubmit={this.handleSubmit}>
                  <input
                    value={this.state.search}
                    type="text"
                    placeholder="START LOOKING FOR POKEMON..."
                    className="search-box"
                    name="query"
                    onChange={this.handleChange}
                  />
                  <button type="submit">
                    <i className="fa-solid fa-magnifying-glass text-white search-icon fa-2x"></i>
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      );
    }

    return <>{content}</>;
  }
}
