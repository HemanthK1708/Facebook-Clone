import Card from "./Bootstrap/Card";
import FBBox from "./FBBox";


const Feed = () => {
    return <div className="col-3 Feed">
        <FBBox>
            <div className="BirthdayContainer">
                <h4>Birthdays !!!</h4>
                <img src="https://cdn-icons-png.flaticon.com/512/1139/1139982.png" alt="Gift" />
                    <a href="/">Hemanth</a>, <a href="/">Mark Zuck</a>, <a href="/">Sundar Pichai </a>{" "}
                    and 3 others.
                
            </div>

        </FBBox>
        <FBBox>
        <div className="PagesContainer">
            <h4>Your Pages (2)</h4>
            <ul>
                <li>
                <img src="https://cdn-icons-png.flaticon.com/512/634/634137.png" alt="Pages" />
                <div className="PageMeta">
                    <a href="/"><strong>Facebook</strong></a>
                    <a href="/">
                    <img src="https://img-premium.flaticon.com/png/512/1306/premium/1306155.png?token=exp=1631972510~hmac=735264f21230110fcad71ce62779687d" alt="Messages" />
                     Messages 20+ </a> 
                    <a href="/">
                        <img src="https://img-premium.flaticon.com/png/512/1289/premium/1289475.png?token=exp=1631972734~hmac=ea71c52f9703726c4d107107d2d1cac3" alt="Notifications"/>
                    Notifications (20+)
                    </a>
                
                </div>
                </li>
                <li>
                <img src="https://s3-us-west-2.amazonaws.com/nv-uploaded-avatars/prod/6b829300-109a-4be3-abf1-f06016e89a83.png" alt="Hemanth Kumar" />
                <div className="PageMeta">
                    <a href="/"><strong>Hemanth Kumar</strong></a>
                    <a href="/">
                    <img src="https://img-premium.flaticon.com/png/512/1306/premium/1306155.png?token=exp=1631972510~hmac=735264f21230110fcad71ce62779687d" alt="Messages" />
                     Messages 20+ </a> 
                    <a href="/">
                        <img src="https://img-premium.flaticon.com/png/512/1289/premium/1289475.png?token=exp=1631972734~hmac=ea71c52f9703726c4d107107d2d1cac3" alt="Notifications"/>
                    Notifications (20+)
                    </a>
                
                </div>
                </li>
                
            </ul>

        </div>
        </FBBox>
        <FBBox><div className="FeedsContainer">
            <h4>News Feed</h4>
            <ul>
                {[
                    {
                    Image: "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/05/0/0/Bitcoin-Volatility.jpg?ve=1&tl=1"
                    },
                    {
                        Image: "https://d3rk2wqy1pqubb.cloudfront.net/wp-content/uploads/2021/01/Traffic-Jam.jpg"
                    },
                    {
                        Image: "https://i.ytimg.com/vi/m9rrE3QGFPc/maxresdefault.jpg"
                    }
                    ].map((card, key) =>(
                <li key={key}>
                    <Card Image={card.Image} ImgAlign="top">
                        <a href="/">Bitcoin, Traffic Increase, Food Technology Blogs and more...</a>
                        <p className="m-0 text-muted">
                             Posted <abbr title="12th Sunday September 2021"> today.</abbr>
                             </p>
                    </Card>
                </li>
                ))}
            </ul>

        </div>
        </FBBox>
        </div>;
    
}

export default Feed
