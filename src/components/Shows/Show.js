
import React from 'react';



class Show extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.show.id,
            title: props.show.title,
            description: props.show.description,
            short_description: props.show.short_description,

        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        })
    }


    render() {
        return (
            <div className="show-container" key={"show-container-" + this.state.id}>
                <div className="field-container">
                    <label >ID</label> <br />
                    <input type="text" name="id" value={this.state.id} onChange={this.onChange}
                    />
                </div>
                <div className="field-container">
                    <label >title</label><br />

                    <input type="text" name="title" value={this.state.title} onChange={this.onChange}
                    />
                </div>
                <div className="field-container">
                    <label >Short description</label><br />

                    <input type="text" name="short_description" value={this.state.short_description} onChange={this.onChange}
                    />
                </div>
                <div className="field-container">
                    <label >Description</label><br />

                    <input type="text" name="description" value={this.state.description} onChange={this.onChange}
                    />
                </div>

            </div>

        )
    }
}

export default Show;