import React from 'react'
import RCR from 'react-component-redux';
import LeftBar from '../components/leftBar/LeftBar'
import Header from '../components/calculator/Header'
import Tags from '../components/calculator/tags/Tags'
import Manual from '../components/calculator/types/manual/Manual'
import Percentage from '../components/calculator/types/percentage/Percentage'

const Style = {
    wrap: {
        overflow: 'auto'
    },
    content: {
        background: '#eeeeee',
        marginLeft: 70,
        marginRight: 290
    }
};

@RCR.container
export default class App extends React.Component {

    state = {

    };

    render() {
        return (
            <div style={Style.wrap}>
                <LeftBar />
                <div style={Style.content}>
                    <Header />
                    <Tags />
                    <Manual />
                    <Percentage />
                </div>
                <div className="right-content">
                </div>
            </div>
        )
    }
}
