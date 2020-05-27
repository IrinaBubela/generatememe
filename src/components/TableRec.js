import React from "react";

class TableRec extends React.Component {

    render() {
        return (
            <td>
                <figure >
                    <img
                        src={this.props.src}
                        alt="...">
                    </img>
                </figure>
            </td >
        )
    }
}


export default TableRec;
