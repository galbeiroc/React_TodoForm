import React, {Component} from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state= {
            title: '',         
            responsible: '',
            description: '',
            priority: 'Low'
        }; 
        this.handleInput = this.handleInput.bind(this) // Se vincula el Metodo con el component
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(e) {
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
        console.log(name, value, this.state)
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state)
        this.props.onAddSubmit(this.state)
        console.log("Enviando data.....")
    }
    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"                            
                            placeholder="Title"
                            className="form-control"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            placeholder="Responsible"
                            className="form-control"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            className="form-control"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <select className="form-control" name="Priority" onChange={this.handleInput}>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;