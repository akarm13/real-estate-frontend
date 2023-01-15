


type Props = {
    children: React.ReactNode;
    variant: "primary" | "secondary";
    onClick: () => void;
    }
    export const Button = ({onClick, children, variant}: Props) => {
    if(variant === "primary") {
    return (
    <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    {children}
    </button>
    )
    }
    
    return (
    <button onClick={onClick} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
    {children}
    </button>
    );
    }