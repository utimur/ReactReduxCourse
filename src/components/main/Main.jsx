import React, {useEffect} from 'react';
import './main.less'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";
import Repo from "./repo/Repo";

const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)

    useEffect(()=>{
        dispatch(getRepos())
    }, [])

    return (
        <div>
            {repos.map(repo =>
                <Repo repo={repo}/>
            )}
        </div>
    );
};

export default Main;