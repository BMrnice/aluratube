import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/TimeLine";


function HomePage() {
    const estilosDaHomePage = { backgroundColor: "red" };

    //console.log(config.playLists);

    return (
        <>
            <CSSReset/>
            <div style={estilosDaHomePage}>
                <Menu />
                <Header />
                <TimeLine playLists={config.playLists} />
            </div>
        </>
        
    )
};

export default HomePage




const StyledHeader = styled.div`
         img {
        width: 100%;
        height: 70vh;
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
    .user-info > img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
  `;
function Header() {
    return (
        <StyledHeader>
            <section className="user-banner" >
                <img src={config.banner} />
            </section>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>

            </section>
        </StyledHeader>
    )
};



function TimeLine(props) {
    //console.log("bagaluho dadad", props)
    const playListNames = Object.keys(props.playLists)
    //statement
    // retorno por expressao
    return (
        <StyledTimeline>
            {playListNames.map(playListNames => {
                const videos = props.playLists[playListNames]
                return (
                    <section>
                        <h2>{playListNames}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
};