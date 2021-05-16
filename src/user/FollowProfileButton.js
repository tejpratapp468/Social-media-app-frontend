import React, { Component } from "react";
import { follow, unfollow } from "./apiUser";

class FollowProfileButton extends Component {
    //on follow button click this method will be executed
    followClick = () => {
        this.props.onButtonClick(follow); //follow is the callApi method of clickFollowButton method of Profile.js
    };

    unfollowClick = () => {
         //on unfollow button click this method will be executed
        this.props.onButtonClick(unfollow);
    };

    render() {
        return (
            <div className="d-inline-block">
                {!this.props.following ? (
                    <button
                        onClick={this.followClick}
                        className="btn btn-success btn-raised mr-5"
                    >
                        Follow
                    </button>
                ) : ( 
                    <button
                        onClick={this.unfollowClick}
                        className="btn btn-warning btn-raised"
                    >
                        UnFollow
                    </button>
                )}
            </div>
        );
    }
}

export default FollowProfileButton;
