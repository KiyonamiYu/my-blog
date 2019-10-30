import React, { PureComponent } from 'react';
import { Button } from 'antd';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import CodeBlock from './CodeBlock';

class Test extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            testArticle: '',
        };
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/514723273/My-Note/master/HTML%26CSS%26JS/05.Canvas%E5%88%B6%E4%BD%9C%E8%83%8C%E6%99%AF%E7%89%B9%E6%95%88.md').then(res => {
            this.setState({testArticle: res.data});
        });
    }

    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <Button type="link">Link</Button>

                <ReactMarkdown
                    source={this.state.testArticle}
                    renderers={{
                        code: CodeBlock,
                    }}
                    className="markdown-body"
                />
            </div>
        )
    }
}

export default Test;