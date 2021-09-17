import React, { Fragment } from 'react'

const Sidebar = () => {
    const ContentList = {
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
    };
    return <div className="Sidebar col-2">  
    <div className="UserMeta">
    <a href="/">
      <img src="https://s3-us-west-2.amazonaws.com/nv-uploaded-avatars/prod/6b829300-109a-4be3-abf1-f06016e89a83.png" alt="H"/>
      Hemanth
      </a>
    </div>
    {Object.keys(ContentList).map(section => <Fragment key={section}>
        {section !== "Default" && <h3>{section}</h3>}
        <ul className="Sidebar=Links">
            {ContentList[section].map(link => (
                <li key={link.Icon}>
                    <a href={link.Link}>
                    <span className={"Sprites-" + link.Icon}/>
                    {link.Text}
                    </a>
                </li>
            ))}
        </ul>
        </Fragment>
        )}
    </div>
}

export default Sidebar
