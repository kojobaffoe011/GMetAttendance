import React, {Component} from "react";
import {useRef, useState } from "react";
import axios from "axios";

class ExcelAccept extends Component{

    state = {
        file: null
    }



    handleFile(e){
        console.log(e.target.files, "8449494hh")
        console.log(e.target.files[0], "8449494hh")
        let file = e.target.files[0]
        this.setState({file: file})
    }

    handleUpload (e){
        let file = this.state.file
        let formdata = new FormData();

        formdata.append('image', file)
        formdata.append('name', 'gmet')

        console.log(this.state, "16627618vdbdbb$$$$")

        axios({
            url: `/some/api`,
            method: 'POST',
            headers: {
                authorization: `your token`
            
            },
            data: formdata
        }).then((res) => {

        },(err)=> {

        })
    }
    render(){
        return(
            <div>
                <form>
                    <div>
                        <label>Select file</label>
                        <input 
                        type="file" 
                        name ="file" 
                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel/"
                        onChange={(e)=>this.handleFile(e)}
                        /> 
                    </div>
                    <div>
                    <button onClick={(e)=>this.handleUpload(e)}>Upload file</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ExcelAccept;