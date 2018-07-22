import * as React from "react";
import Swiper from "react-slick";

import { Idiom, IdiomType } from "../../Idiom";
import { Helper } from "../../Helper";
import { api } from "../../../services/api";

type State = {
  idioms: IdiomType[];
  helpers: any;
};

export class Main extends React.PureComponent<{}, State> {
  state = {
    idioms: [],
    helpers: null
  };

  async componentDidMount() {
    const idioms = await api.fetchIdioms();
    const helpers = await api.fetchHelpers();
    const filteredIdioms = idioms.map(({ title, description, translates }) => {
      return { title, description, translate: translates.ru };
    });

    this.setState({
      idioms: filteredIdioms,
      helpers: helpers
    });
  }

  render() {
    const { idioms, helpers } = this.state;

    const swiperSettings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false
    };

    return (
      <div className="Main" style={styledMain}>
        <Swiper {...swiperSettings}>{idioms.map((idiom, index) => <Idiom {...idiom} key={index} />)}</Swiper>
        {helpers && <Helper title={helpers.pushSubscribe.title} />}
      </div>
    );
  }
}

const styledMain = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  justifyContent: "center"
} as React.CSSProperties;
