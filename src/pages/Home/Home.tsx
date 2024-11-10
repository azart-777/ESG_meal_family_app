import {
    CompanyCards,
    AppHeader,
    Slogan,
    Overview,
    Welcome,
    WeDidIt,
    ContactUsForm,
    AppFooter,
    MoveUp,
    EcoAppNetwork
} from "../../components";
import "./Home.scss";

const Home = () => {
    return (
        <>
            <div className="top-light-ellipse"></div>
            <div className={"home-page__container"}>
                <AppHeader />
                <Slogan />
                <Overview />
                <Welcome />
                <CompanyCards />
                <WeDidIt />
            </div>
            <EcoAppNetwork />
            <div className={"home-page__container"}>
                <ContactUsForm />
                <MoveUp />
                <AppFooter />
            </div>
        </>
    );
};

export default Home;
