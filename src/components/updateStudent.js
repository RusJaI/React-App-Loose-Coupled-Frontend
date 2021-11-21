import {React,Component} from 'react';
import './components.css';
import Services from '../services/services.js';
import {useParams} from 'react-router-dom';

class UpdateStudent extends Component {

    constructor(props) {
    
        super(props);
        this.state = {
          id:null,
          name: '',
          admission: null,
          class:null,
          city:''
        };

    
        this.handleChange = this.handleChange.bind(this);
        this.updateStudent=this.updateStudent.bind(this);
        this.getStudent=this.getStudent.bind(this);
    }

    componentDidMount() {
        this.getStudent(this.props.id);
    }

    getStudent(id) {
        Services.get(id)
          .then(response => {
            this.setState({
              id:response.data.id,
              name:response.data.name,
              admission:response.data.admission,
              class:response.data.class,
              city:response.data.city
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }

    updateStudent() {
        var id=this.state.id;

        var data = {
            name: this.state.name,
            admission:this.state.admission,
            class:this.state.class,
            city:this.state.city
          };

          Services.update(id,data)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    

    render() {
        return(
            <div className="row">
                <div className="col-lg-2 col-md-1 col-1"></div>
                <div className="col-lg-8 col-md-10 col-12">
                <h1>Update Student</h1>
                <form onSubmit={this.updateStudent}>
                    <label>
                    Name:
                    </label>
                    <input 
                        name="name"
                        type="text" 
                        value={this.state.name} 
                        onChange={this.handleChange} 
                    />
        
                    
                    <br />

                    <label>
                    Admission Number:
                    </label>
                    <input 
                        name="admission"
                        type="number" 
                        value={this.state.admission} 
                        onChange={this.handleChange} 
                    />

                    <br />

                    <label>
                    Class:
                    </label>
                    <input 
                        name="class"
                        type="number" 
                        value={this.state.class} 
                        onChange={this.handleChange} 
                    />

                    <br />

                    <label>
                    City:
                    </label>
                    <input 
                        name="city"
                        type="text" 
                        value={this.state.city} 
                        onChange={this.handleChange} 
                    />
                    <br/>

                <input type="submit" value="Submit" style={{backgroundColor:"cadetblue",marginLeft:"100px"}} />
                </form>
                </div>
                <div className="col-lg-2 col-md-1 col-1"></div>
            </div>
            );
    }
  }
  
function UpdateStudentWithParams(props){
    const { id } = useParams();
    return <UpdateStudent {...props} id={id} />
}
export default UpdateStudentWithParams;
