import React from 'react';
import './App.css';

const data = [{name: "John", age: 25, gender: "Male", profession: "Engineer", photo: "https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745"}, {name: "Sarah", age: 22, gender: "Female", profession: "Designer", photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg"}, {name: "David", age: 30, gender: "Male", profession: "Programmer", photo: "https://media.istockphoto.com/photos/handsome-mexican-hipster-man-sending-email-with-laptop-picture-id1182472756"}, {name: "Kate", age: 27, gender: "Female", profession: "Model", photo: "https://cdn.pixabay.com/photo/2015/05/17/20/07/fashion-771505_960_720.jpg" }]

class Photo extends React.Component {
  render() {
    const foto = {
      width: "250px",
      height: "150px",
      borderTopLeftRadius:"10px",
      borderTopRightRadius:"10px",
      objectFit:"cover"
    }
    return <div>
      <img style={foto} src={this.props.photo}/>
    </div>
  }
}

class Data extends React.Component {
  render() {
    const style ={
      fontSize:"14px"
    }
    if(data.gender="Male"){
      return (
        <>
       <div>
        <b style={style}>Mr. {this.props.name}</b>
      </div>
        </>
      )
    }
    else if(data.gender="Female"){
      return (
        <>
       <div>
        <b style={style}>Mrs. {this.props.name}</b>
      </div>
        </>
      )
    }
    
  }
}

class Job extends React.Component {
  render() {
    const style ={
      fontSize:"14px"
    }
    return <div>
      <p style={style}>{this.props.profession}</p>
    </div>
  }
}

class Age extends React.Component {
  render() {
    const style ={
      fontSize:"14px"
    }
    return <div>
      <p style={style}>{this.props.age}</p>
    </div>
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        {data.map(item=> {
          return (
            <div style={{display:"flex"}}>
              <div style={{border:"1px solid #000000", width:"250px", borderRadius:"10px"}}>
              <Photo photo={item.photo}/>
              <Data name={item.name}/>
              <Job profession={item.profession}/>
              <Age age={item.age}/>
            </div>
            </div>
          )
        })}
      </>
    )
  }
}

export default App;
