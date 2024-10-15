import { ButtonHTMLAttributes, ReactNode } from "react";
interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}
const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div>
            <div className='md:h-[15vh] md:w-[9vw] sm:h-[11vh] sm:w-[9vw]   bg-[#e9f5f3] h-[15vh] w-[28vw] rounded-lg flex items-center justify-center'> {/* Added flex for centering */}
                {children}
            </div>
        </div>
    );
}

export default Card;
