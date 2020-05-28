import React from "react";
import MainContent from "./components/MainContent";
import TableRec from "./components/TableRec";
import Table from "./components/Table"
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            memes: ["tenguy", "afraid", "aag", "wonka", "disastergirl", "drake", "fwp", "facepalm", "harold", "morpheus", "apcr", "bihw", "feelsgood", "crazypills", "joker"],
            url: 'https://memegen.link/tenguy/_.jpg',
            text1: '',
            text2: '',
            inputError: 'Please, wait! This can take a few seconds',
            elIsGenerated: false
        }
    }

    displayMemesTemplates() {
        const memesArr = [];
        if (this.state.memes !== undefined) {
            for (var i = 0; i < this.state.memes.length; i++) {
                const imgData =
                    <TableRec src={'https://memegen.link/' + this.state.memes[i] + '/_.jpg'} />
                memesArr.push(imgData)
            }
        }
        return memesArr;
    }


    displaySelectedImage = (e) => {
        this.setState({
            url: e.target.src,
        })
    }


    getDataFromFirstInput = (e) => {
        this.setState({
            text1: e.target.value
        })
    }




    getDataFromSecondInput = (e) => {
        this.setState({
            text2: e.target.value
        })
    }



    generateMeme = async (e) => {
        e.preventDefault();
        if (!e.target.children[1].value || !e.target.children[2]) {
            this.setState({ inputError: 'Please enter some text to get generated mem' });

        } else {
            const modifiedUrl = this.state.url.replace('/_.jpg', "").replace('.jpg', "")

            console.log(modifiedUrl);
            const res = await fetch(`${modifiedUrl}/${this.state.text1}/${this.state.text2}.jpg`);
            console.log(res);

            try {
                this.setState({
                    url: res.url,
                    inputError: 'Please, wait! This can take a few seconds',
                    text1: '',
                    text2: '',
                    elIsGenerated: true
                })
                console.log(this.state.url);

            } catch (err) {
                console.error(err);
            }
        }
    }



    render() {
        const memesTemplates = this.displayMemesTemplates();
        return (
            <div>
                <h2 className="h2">Meme Generator</h2>
                <h6>Select a meme in a list below</h6>
                <div className="selectedSide">
                    <div className={this.state.memes ? "scrollable" : null} >
                        <Table click={this.displaySelectedImage} memesTemplates={memesTemplates} />
                    </div>
                    <MainContent
                        generateMeme={this.generateMeme}
                        getDataFromFirstInput={this.getDataFromFirstInput}
                        getDataFromSecondInput={this.getDataFromSecondInput}
                        inputError={this.state.inputError}
                        src={this.state.url}
                        isGenerated={this.state.elIsGenerated}
                        reload={() => window.location.reload()} />
                </div>
            </div >
        )
    }
}

export default App;

