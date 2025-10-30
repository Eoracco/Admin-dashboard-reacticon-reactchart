import { FiChevronDown, FiChevronUp } from "react-icons/fi"

const AccountToggle = () => {
    return (
        <div className='border-b mb-4 mt-2 pb-4 border-stone-300 '>
            <button className='flex p-0.5 hover:bg-stone-200 rouneded
            transition-colors relative gap-2 w-full items-center'>
                <img src="https://images.unsplash.com/photo-1703539820915-d5ffab15dbae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2346"
                    alt="profilepic"
                    className='h-8 w-8  rounded shrink-0 bg-violet-500 shadow' />
                <div className='text-start '>
                    <span className='text-sm font-bold block'>Chase Code Now</span>
                    <span className='text-xs block text-stone-500'>Chase@hover.dev</span>
                </div>


                <FiChevronDown className="absolute right-2 top-1/2
                translate-y-[calc(-50%+4px)] text-xs"></FiChevronDown>
                <FiChevronUp className="absolute right-2 top-1/2
                translate-y-[calc(-50%-4px)] text-xs"></FiChevronUp>
            </button>
        </div>
    )
}

export default AccountToggle