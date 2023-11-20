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