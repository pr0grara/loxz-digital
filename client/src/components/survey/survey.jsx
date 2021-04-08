import React from 'react';
import * as typeformEmbed from '@typeform/embed'

class Survey extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    display() {

    }

    componentDidMount() {
    }

    render() {
        const reference = typeformEmbed.createPopup(
            // 'https://developerplatform.typeform.com/to/Xc7NMh',
            // 'https://loxz.typeform.com/to/xF6ZyWUR',
            'xF6ZyWUR', {width: 100}
            // {
            //     mode: 'popup',
            //     autoClose: 3000,
            //     hideHeaders: true,
            //     hideFooters: true,
            // }
        )

        reference.open();
        // setTimeout(function () {
        //     reference.close()
        // }, 10000)
        
        return (
          <>
          </>
        )
    }
}

export default Survey;