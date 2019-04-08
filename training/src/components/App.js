import React, { Component } from 'react';
import { database } from '../firebase'
import _ from 'lodash';
import { connect } from 'react-redux';
import { getNotes, saveNotes, deleteNote } from '../actions/notesAction'
import { getUser } from '../actions/userAction'

class App extends Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      userId: '',
      id: '',
      title:'',
      completed:''
      
    };
    //bind
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderNotes = this.renderNotes.bind(this);
  }

  // componentDidMount() {
  //   // database.on('value',(snapshot)=>{
  //   //   this.setState({notes:snapshot.val()});
  //   // });
  //   this.props.getNotes();
  //   this.props.getUser();
  // }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = {
      userId: this.state.userId,
      id: this.state.id,
      title: this.state.title,
      completed: this.state.completed
    }
    this.props.saveNotes(note);
    

    this.setState({ userId: '', id:'', title: '', completed: '' })
  }

  renderNotes() {
    return _.map(this.props.notes, (note, key) => {
      return (
        <table className="table">
          <tbody>
            <tr>
              <td>{note.userId}</td>
              <td>{note.id}</td>
              <td>{note.title}</td>
              <td>{note.completed}</td>
            </tr>
            <button className="btn btn-danger btn-xs" onClick={() => this.props.deleteNote(key)}>Delete</button>
          </tbody>
        </table>
      )
    });
  }

  render() {
    return (
      <div className="container-fluid">
      <br/>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  onChange={this.handleChange}
                  value={this.state.userId}
                  type="text"
                  name="userId"
                  className="form-control no-border"
                  placeholder="UserId..."
                  required />
              </div>

              <div className="form-group">
                <input
                  onChange={this.handleChange}
                  value={this.state.id}
                  type="text"
                  name="id"
                  className="form-control no-border"
                  placeholder="Id..."
                  required />
              </div>

              <div className="form-group">
                <input
                  onChange={this.handleChange}
                  value={this.state.title}
                  type="text"
                  name="title"
                  className="form-control no-border"
                  placeholder="Title..."
                  required />
              </div>

              <div className="form-group">
                <input
                  onChange={this.handleChange}
                  value={this.state.completed}
                  type="text"
                  name="completed"
                  className="form-control no-border"
                  placeholder="Completed..."
                  required />
              </div>

              <div className="form-group">
                <button className="btn btn-primary col-sm-12">Save</button>
              </div>
            </form>
            {this.renderNotes()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.notes,
    user: state.user
  }
}

export default connect(mapStateToProps, { getNotes, saveNotes, deleteNote, getUser })(App);
