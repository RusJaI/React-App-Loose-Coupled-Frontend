import {React,Component} from 'react';
import Services from '../services/services';
import './components.css';
class AddStudent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          id: null,
          name: '',
          admission: '',
          class:'',
          city:''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.addStudent=this.addStudent.bind(this);
    }
    
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    
    addStudent(event){
        var data = {
            name: this.state.name,
            admission:this.state.admission,
            class:this.state.class,
            city:this.state.city
          };
      
          Services.create(data)
            .then(response => {
              this.setState({
                id: response.data.id,
                name: response.data.name,
                admission: response.data.admission,
                class: response.data.class,
                city:response.data.city,
              });
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
    }

    render() {
        return(
            <div className="row">
                <div className="col-lg-2 col-md-1 col-1"></div>
                <div className="col-lg-8 col-md-10 col-12">
                <h1>Add New Student</h1>
                <form onSubmit={this.addStudent}>
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
  
  export default AddStudent;