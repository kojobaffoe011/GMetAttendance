import React, {Component} from "react";
import {useRef, useState } from "react";
import readXlsxFile from 'read-excel-file'


class ExcelAccept extends Component{

    state = {
        file: null
    }


    // generateTableHead(table, file){
    //     //let file = e.target.files[0]
    //     let thead = table.createTHead();
    //     let row = thead.insertRow();
    //     for( let key of file){
    //         let th = document.createElement('th');
    //         let text = document.createTextNode(key);
    //         th.appendChild(text);
    //         row.appendChild(th);
    //     }

    // }

    handleFile(e){
        let file = e.target.files[0]
        this.setState({file: file})
        // readXlsxFile(file).then(function(file){
        //     var i = 0;
        //     file.map((row,index) => { 
        //         if (i = 0){
        //             let table = document.getElementById('tbl-data')
        //             generateTableHead(table, row);
        //         }
        //         if (i>0){
        //             let table = document.getElementById('tbl-data')
        //             generateTableHead(table, row);
        //         }


        //     })
        // });
    }

    handleUpload (e){
        let file = this.state.file
        let formdata = new FormData();

        formdata.append('image', file)
        formdata.append('name', 'gmet')

        console.log(this.state, "16627618vdbdbb$$$$")

        
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
                        id="input"
                        /> 
                        <table id="tbl-data"></table>
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