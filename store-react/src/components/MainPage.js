import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import banner from '../image/banner.png';
import brick from '../image/brick.png';
import cement from '../image/cement.png';
import profile from '../image/profile.png';
import armature from '../image/armature.png';
import sand from '../image/sand.png';
import corner from '../image/corner.png';
import block from '../image/block.png';
import Category from "./Category";

class MainPage extends React.Component {
    render() {
        return (
                <div class="body-page">
                    <div class="banner">
                        <img src={banner} alt="Баннер" />
                    </div>
                    <div class="products">
                        <div class="item">
                            <img src={brick} alt="" />
                        </div>
                        <div class="item">
                            <img src={cement} alt="" />
                        </div>
                        <div class="item">
                            <img src={profile} alt="" />
                        </div>
                        <div class="item">
                            <img src={armature} alt="" />
                        </div>
                    </div>
                    <div class="products">
                        <div class="item">
                            <img src={sand} alt="" />
                        </div>
                        <div class="item">
                            <img src={corner} alt="" />
                        </div>
                        <div class="item">
                            <img src={block} alt="" />
                        </div>
                        <div class="item">
                            
                        </div>
                    </div>
                    <div class="products">
                        <div class="item">
                            
                        </div>
                        <div class="item">
                            
                        </div>
                        <div class="item">
                            
                        </div>
                        <div class="item">
                            
                        </div>
                    </div>
                </div>  
        );
    }
}

export default MainPage;
