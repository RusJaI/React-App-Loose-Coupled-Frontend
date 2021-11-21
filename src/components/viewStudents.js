import {React,Component} from 'react';
import Services from '../services/services.js'
import { useNavigate } from "react-router-dom";

class ViewStudents extends Component {

    constructor(props) {
        super(props);
        this.retrieveStudents = this.retrieveStudents.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.removeStudent = this.removeStudent.bind(this);
    
        this.state = {
          students: [],
          currentIndex: -1
        };
      }
    
      componentDidMount() {
        this.retrieveStudents();
      }
    
    
      retrieveStudents() {
        Services.getAll()
          .then(response => {
            this.setState({
              students: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    
      refreshList() {
        this.retrieveStudents();
        this.setState({
          currentIndex: -1
        });
      }
    
      removeStudent(index) {
        Services.delete(index)
          .then(response => {
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      }
    
      
    render() {
        
        const { students, currentIndex } = this.state;

        return(
            <div className="row">
            <div className="col-lg-2 col-md-1 col-1"></div>
            <div className="col-lg-8 col-md-10 col-12">
        
            <ul className="list-group">
                
                {students &&
              students.map((student, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  key={index}
                >
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                  <h6>{student.admission} - {student.name}</h6>
                  <p>Grade {student.class}</p>
                  <p>{student.city}</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                  <button className="m-3 btn btn-sm btn-warning"
                  onClick={()=>{
                    this.props.navigate('/students/'+student.id,
                        {state: {
                          id:student.id,
                          name:student.name,
                          admission:student.admission,
                          class:student.class,
                          city:student.city
                        }
                    });
                
                  }}>
                  
                    Edit
                
                </button>
                  <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={()=>{this.removeStudent(student.id);}}>
                    Delete
                </button>
                </div>
                  </div>
                </li>
              ))}

            </ul>

        </div>
        <div className="col-lg-2 col-md-1 col-1"></div>
    </div>

            );
    }
  }

function ViewWithNavigate(props) {
    let navigate = useNavigate();
    return <ViewStudents {...props} navigate={navigate} />
}

export default ViewWithNavigate
  
