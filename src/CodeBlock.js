import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { highlight, languages } from 'prismjs';
import 'prismjs/themes/prism.css';

export default class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
  };

  render() {
    return (
      <pre>
        <code
            className = {`language-${this.props.language}`}
            dangerouslySetInnerHTML = {{__html: highlight(this.props.value, languages[this.props.language])}}
        />
      </pre>
    );
  }
}