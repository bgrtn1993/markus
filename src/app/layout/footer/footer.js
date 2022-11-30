import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className={"flex flex-col items-center h-16 bg-gray-600 border-t  text-mar-blue-light-50"}>
                <div className={"text-sm mt-4"}>Tüm hakları saklıdır.</div>
            </div>
        );
    }
}

export default Footer;