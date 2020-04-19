import * as React from "react";

import { Translate } from "../Icons/Translate";

import "./index.css";

type Props = {
  title: string;
  description: string;
  translate: string;
};

type State = {
  isShowTraslate: boolean;
};

export { Props as IdiomType };

export class Idiom extends React.PureComponent<Props, State> {
  state = {
    isShowTraslate: false
  };

  translateBtnOnClick = () => {
    const { isShowTraslate } = this.state;
    this.setState({
      isShowTraslate: !isShowTraslate
    });
  };

  render() {
    const { title, description, translate } = this.props;
    const { isShowTraslate } = this.state;

    let translateClasses = "Idiom__description Idiom__descriptionTranslate";
    let descriptionClasses = "Idiom__description";

    if (isShowTraslate) {
      descriptionClasses += " hide";
      translateClasses += " show";
    } else {
      descriptionClasses += " show";
      translateClasses += " hide";
    }

    return (
      <div className="Idiom">
        <div className="Idiom__wrapper">
          <div className="Idiom__title">{title}</div>
          <div className="Idiom__descriptionWrapper">
            <div className={descriptionClasses}>{description}</div>
            <div className={translateClasses}>{translate}</div>
          </div>
          <div className="Idiom__toolbar">
            <button
              className="Idiom__translateBtn"
              onClick={this.translateBtnOnClick}
            >
              <Translate />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
