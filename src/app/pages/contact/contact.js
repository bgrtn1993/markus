import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (

            <div className={"w-full ml-4 mr-4 rounded"}>
                <div className={"w-full m-2 rounded border-gray-200 drop-shadow-md shadow-black"}>
                    <div className={"h-max rounded-t border-mar-gray-dark-100 bg-gray-600 text-mar-blue-light-50 p-2"}>İletişim</div>
                    <div className={"bg-gray-50 rounded-b border-mar-gray-dark-100 text-mar-black p-2"}>
                        Mail falan
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;