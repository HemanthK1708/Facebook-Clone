import { Component } from "react";
import Header from "./Bootstrap/Header";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Main from "./Main";

class App extends Component {
  state = {
    UserData : {
      UserMeta : {
        
        FullName : "Hemanth Kumar Chilamkurthi",
        Avatar : "https://s3-us-west-2.amazonaws.com/nv-uploaded-avatars/prod/6b829300-109a-4be3-abf1-f06016e89a83.png",
        ProfileURL : " ",
      },
      Birthdays: [
          {
          FullName: "Hemanth Kumar Chilamkurthi",
          ProfileURL: "/"
        },
        {
          FullName: "Mark Zuckerberg",
          ProfileURL: "/"
        },
        {
          FullName: "Sundar Pichai",
          ProfileURL: "/"
        },
      ],
        Pages: [{
          Avatar : "https://cdn-icons-png.flaticon.com/512/634/634137.png",
          Name : "Facebook",
          MessageCount : "20+",
          NotificationCount: "20+"
        },
        {
          Avatar : "https://s3-us-west-2.amazonaws.com/nv-uploaded-avatars/prod/6b829300-109a-4be3-abf1-f06016e89a83.png",
          Name : "Hemanth",
          MessageCount : "15+",
          NotificationCount: "15+"
        }],
        NewsFeeds: [
          {
            Image: "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/05/0/0/Bitcoin-Volatility.jpg?ve=1&tl=1",
            NewsLink: "/",
            Title: "Bitcoin",
            DateTime: "12th Sunday September 2021",
            DatePosted: "today"
          },
          {
            Image: "https://d3rk2wqy1pqubb.cloudfront.net/wp-content/uploads/2021/01/Traffic-Jam.jpg",
            NewsLink: "/",
            Title: "Traffic Increases",
            DateTime: "12th Sunday September 2021",
            DatePosted: "yesterday"
          },
          {
            Image: "https://i.ytimg.com/vi/m9rrE3QGFPc/maxresdefault.jpg",
            NewsLink: "/",
            Title: "Food Technology",
            DateTime: "12th Sunday September 2021",
            DatePosted: "2 days ago"
          }
        ],
        ContentList:
        {
          Default : [{
              Link: "/",
              Icon: "news",
              Text: "News Feed", 
          },
          {
              Link: "/",
              Icon: "chat",
              Text: "Messenger", 
          },
          {
              Link: "/",
              Icon: "watch",
              Text: "Watch", 
          },
          {
              Link: "/",
              Icon: "marketplace",
              Text: "Marketplace", 
          },
      ],
          Shortcuts: [
              {
                  Link: "/",
                  Icon: "web",
                  Text: "WEB", 
              }
          ],
          Explore: [
              {
                  Link: "/",
                  Icon: "youtube",
                  Text: "YouTube Channel", 
              }
          ],
        }
      },
    FeedData : [],
  };
  render() {
    return (
      <div className="App">
        <Header className="Header">Facebook Clone</Header>
        <div className="container">
        
        <div className="row">
        <Sidebar ContentList={this.state.UserData.ContentList} UserMeta={this.state.UserData.UserMeta}/>
        <Main />
        <Feed Birthdays={this.state.UserData.Birthdays}
        Pages = {this.state.UserData.Pages}
        NewsFeeds= {this.state.UserData.NewsFeeds}/>
        </div>
        </div>
      </div>
    )
  }
}

export default App;