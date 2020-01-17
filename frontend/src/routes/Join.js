import React, { Component } from 'react'
import axios from "axios"
export default class Join extends Component {
    joinSubmit(){
        var uid = document.getElementById("uid").value
        var upwd = document.getElementById("upwd").value

        axios.post("http://localhost:4000/users",{
            uid,
            upwd,
        })
        .then((data)=>{
            let {data:{result}} = data;
            if(result==="sucess"){
                console.log("가입성공")
            }else{
                console.log("가입실패")
            }
        }).catch((err)=>{
            console.error(err)
        })
    }
    render() {
        return (
            <div>
                <p>ID: <input type='text' id="uid"/></p>
                <p>PW: <input type='password' id="upwd"/></p>
                <button onClick={this.joinSubmit}>전송</button>
            </div>
        )
    }
}
