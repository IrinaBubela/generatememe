import React from "react";

class Table extends React.Component {

    render() {
        return (
            <table>
                < tbody >
                    <tr onClick={this.props.click}>
                        {this.props.memesTemplates}
                    </tr>
                </ tbody>
            </table >
        )
    }
}


export default Table;
