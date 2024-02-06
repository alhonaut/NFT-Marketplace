import { FaTelegramPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
    return (
        <div className='items-center mb-1 p-4'>
            <div className="sm:w-[90%] w-full h-[0.5px] bg-gray-400 mt-6" />
            <footer className="flex justify-between items-center p-1">
                <div className="text-left mt-2">
                    <p className="text-gray-200 font-semibold text-sm text-center">
                        @silicomgf <FaTelegramPlane className="inline-block ml-2" />
                    </p>
                </div>
                <div className="text-center ml-24 mt-2">
                    <p className="text-gray-200 font-semibold text-sm text-center">
                        All rights not reserved ¯\_(ツ)_/¯ (©)
                    </p>
                </div>
                <div className="text-right mt-2">
                    <p className="text-gray-200 font-semibold text-sm text-center">
                        andriy.v.shvets@gmail.com <MdEmail className="inline-block ml-1" />
                    </p>
                </div>
            </footer>
        </div>
    )
}
