import { mc } from "@/utils";

interface InputProps {
    afterIcon?: React.ReactNode;
    beforeIcon?: React.ReactNode;
    placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ placeholder="Please enter", afterIcon, beforeIcon }) => {
	return <div className="relative flex items-center">
		<input 
			type="text" 
			placeholder={placeholder} 
			className={mc('w-full p-2 rounded-md bg-transparent border border-gray-400',
                beforeIcon ? 'pl-8' : 'pl-2', 
                afterIcon ? 'pr-8' : 'pr-2'
            )} 
		/>
		{beforeIcon && <div className="absolute left-2">{beforeIcon}</div>}
		{afterIcon && <div className="absolute right-2">{afterIcon}</div>}
	</div>
};

