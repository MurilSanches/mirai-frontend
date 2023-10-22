import Image from "next/image"
import MiraiLogo from "@/_assets/mirai_logo.png"

const Header = () => (
    <header className="w-full sticky top-0">
        <div className="border-b border-gray-100 border-solid bg-night text-white p-4">
            <Image  src={MiraiLogo} alt="logo"  width={75} height={50}/> 
        </div>       
    </header>
)

export default Header