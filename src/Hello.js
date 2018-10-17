import React, {Component} from "react"
import reactCSS from "reactcss"
import { SketchPicker } from "react-color"

class Hello extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: {
                r: "241",
                g: "112",
                b: "19",
                a: "1"
            }
        }
    }

    handleChange = (color) => {
        this.setState ({color: color.rgb})
    }

    render() {
        console.log("this is the color now", this.state.color)
        const styles = reactCSS ({
            "default": {
                color: {
                    color: `rgba(${this.state.color.r},${this.state.color.g},${this.state.color.b},${this.state.color.a})`
                }
            }
        })
        return(
            <div>
                <h1 style={styles.color}>Hello World</h1>
                <SketchPicker color={this.state.color} onChange ={ this.handleChange }/>
            </div>
        )
    }

}

export default Hello;