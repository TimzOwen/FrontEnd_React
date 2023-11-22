class Card extends React.Component{
  render(){
    return (
    <div className="github-profile">
      <img src="https://placehold.it/75"/>
      <div className="info">
        <div className="name">name here...</div>
        <div className="company">Company here...</div>
        </div>
    </div>
    );
  }
}


class App extends React.Component{
  render(){
    return (
      <div>
      <div className="header">{this.props.title}</div>
      <Card/>
        </div>
    )
  }
}

// ReactDOM.render(
// 	<App title="The GitHub Cards App." />,
//   mountNode,
// );

// *** The React 18 way:
// root.render(
//   <App title="The GitHub Cards App" />,
// );





const testData = [
  {name: "Timz Owen", avatar_url: "https://avatars.githubusercontent.com/u/34624703?v=4", company: "@SafaricomPLC"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];


const CardList = (props) => (
<div>
<Card/>
</div>
); 

class Card extends React.Component {
render() {
const profile = testData[0];
return (
  <div className="github-profile">
    <img src={profile.avatar_url} />
    <div className="info">
      <div className="name">{profile.name}</div>
      <div className="company">{profile.company}</div>
    </div>
  </div>
);
}
}

class App extends React.Component {
render() {
return (
  <div>
    <div className="header">{this.props.title}</div>
    <CardList />
  </div>
);
}	
}

ReactDOM.render(
<App title="The GitHub Cards App" />,
mountNode,
);

// *** The React 18 way:
// root.render(
//   <App title="The GitHub Cards App" />,
// );



// USING MAP

const testData = [
  {name: "Timz Owen", avatar_url: "https://avatars.githubusercontent.com/u/34624703?v=4", company: "SafaricomPLC"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];


const CardList = (props) => (
<div>
{testData.map(profile => <Card {...profile}/>)}
</div>
); 

class Card extends React.Component {
render() {
const profile = this.props;
return (
  <div className="github-profile">
    <img src={profile.avatar_url} />
    <div className="info">
      <div className="name">{profile.name}</div>
      <div className="company">{profile.company}</div>
    </div>
  </div>
);
}
}

class App extends React.Component {
render() {
return (
  <div>
    <div className="header">{this.props.title}</div>
    <CardList />
  </div>
);
}	
}

ReactDOM.render(
<App title="The GitHub Cards App" />,
mountNode,
);

// *** The React 18 way:
// root.render(
//   <App title="The GitHub Cards App" />,
// );