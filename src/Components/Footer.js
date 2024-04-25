import XIcon from "../Assets/Icons/xIcon.svg";
import TelegramIcon from "../Assets/Icons/telegramIcon.svg";
import InstagramIcon from "../Assets/Icons/instagramIcon.svg";
import CoinMarketIcon from "../Assets/Icons/coinMarketIcon.svg";
import UniSwapIcon from "../Assets/Icons/uniSwapIcon.svg";

export default function  Footer () {
    return(
        <div className="w-[100%] py-6 bg-[#5c5b5b] flex items-center flex-col gap-3 mt-20">
            <div className="flex items-center gap-5">
                <img className="w-[2.5rem]" src={XIcon} />
                <img className="w-[2.5rem]" src={TelegramIcon} />
                <img className="w-[2.5rem]" src={InstagramIcon} />
                <img className="w-[2.5rem]" src={CoinMarketIcon} />
                <img className="w-[2.5rem]" src={UniSwapIcon} />
            </div>
            <p className="text-[1rem] font-medium text-white">We copyright nothing-all our stuff belongs to you</p>
        </div>
    )
}
