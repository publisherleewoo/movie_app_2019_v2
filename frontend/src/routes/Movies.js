import React, { Component } from 'react'
import Movie from "../components/Movie"
import axios from "axios"

export default class Movies extends Component {

    constructor(props){
        super(props)
        console.log("무비",props)
    }
    state = {
        isLoading:true,
        data: null
    }

    getAxios = async () => {
        try {
            const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
            this.setState({ 
                isLoading:false,
                data: movies 
            })
        } catch (e) {
            console.error(e)
        }
    }

    changeFunc = () => {
        this.setState({
            data: "hi"
        })
    }

    componentDidMount() {
        console.log("컴포넌트가 마운트 되기전")
        this.getAxios()
    }

    render() {
        const {data,isLoading}= this.state;
        return (
            <div>
                {isLoading ? "데이터값이 없음" : 
                    data.map((d,i)=>{
                        return <Movie key={i} data={d}></Movie>                         
                    })
                }
                
            </div>
        );
    }
}

