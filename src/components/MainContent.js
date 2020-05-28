import React from "react";

class MainContent extends React.Component {

    render() {
        return (
            <div className="main-content">
                <div className="left-content-side">
                    <img src={this.props.src} alt="" />
                </div>
                <div className="right-content-side ">
                    <form className="right-content-side " onSubmit={this.props.generateMeme}>
                        <h6>Enter the text</h6>
                        <input onChange={this.props.getDataFromFirstInput} type="text" placeholder="Text 1" alt="..." />
                        <input onChange={this.props.getDataFromSecondInput} type="text" placeholder="Text 2" alt="..." />
                        <h6 style={{
                            color: this.props.inputError == 'Please enter some text to get generated mem' ? "red" : "green"
                        }}>
                            {this.props.inputError}
                        </h6>
                        <div className="btns">

                            {this.props.isGenerated ? (<div><a
                                href={this.props.src}
                                download
                                onClick={this.props.download}
                            ><button className="btn btn-info download-btn" >Share</button></a>
                                <button className="btn btn-info" style={{ width: "150px" }} onClick={this.props.reload} >Generate Again</button></div>) :
                                <button className="btn btn-info" >Generate</button>}
                        </div>

                    </form>
                </div>
            </div >
        )
    }
}


export default MainContent;
