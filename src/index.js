import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const testData = [
		{name: "Dan Abramov", avatar_url: "https://avatars2.githubusercontent.com/u/6954929?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  	{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];
const CardList = (props) => (
    <div>
        {testData.map(profile => <Card {...profile} />)}
    </div>
);

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile">
              <img alt="" src="{profile.avatar_url}"/>
              <div className="info">
                <div className="name">{profile.name}</div>
                <div className="company">{profile.company}</div>
              </div>
            </div>
        );
    }
}

class App extends React.Component {
    render () {
        return (
            <div>
              <div className="header">{this.props.title}</div>
              <CardList/>
            </div>
        );
    }
}

ReactDOM.render(
  <App title="The Github Cards App"/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
