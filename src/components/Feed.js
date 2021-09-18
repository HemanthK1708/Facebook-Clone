import FBBox from "./FBBox";

const Feed = () => {
    return <div className="col-3 Feed">
        <FBBox>
            <div className="BirthdayContainer">
                <img src="https://cdn-icons-png.flaticon.com/512/1139/1139982.png" alt="Gift" />
                    <a href="/">Hemanth</a>, <a href="/">Mark Zuck</a>, <a href="/">Sundar Pichai </a>{" "}
                    and 3 others.
                
            </div>

        </FBBox>
        <FBBox>Pages</FBBox>
        <FBBox>Feed</FBBox>
        </div>;
    
}

export default Feed
