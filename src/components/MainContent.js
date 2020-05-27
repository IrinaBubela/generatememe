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
                        <div className="btns">
                            <button className="btn btn-info" >Generate</button>
                            <button className="btn btn-info download-btn" >Download</button>
                        </div>

                    </form>
                </div>
            </div >
        )
    }
}


export default MainContent;
