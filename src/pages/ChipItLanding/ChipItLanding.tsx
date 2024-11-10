import {
    AppHeader,
    AppFooter
} from "../../components";
import {
    CompanyCards,
    Slogan,
    Overview,
    Welcome,
    WeDidIt,
    ContactUsForm,
    MoveUp,
    EcoAppNetwork
} from "../../components/ChipItLanding";
import "./ChipItLanding.scss";

const ChipItLanding = () => {
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

export default ChipItLanding;
