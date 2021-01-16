import React from 'react'

import Modal from './Modal'

function IpsumLorem(props){
    let {isOpen, closeModal} = props

    return(
        <Modal 
            isOpen={isOpen}
            closeModal={closeModal}    
        >
            <div className="diagnosis-area">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis porttitor turpis sed malesuada. Donec aliquet, ante id pulvinar facilisis, turpis massa elementum ipsum, ac dictum mauris ipsum sed augue. Nam diam velit, dignissim vitae facilisis et, condimentum eu nisl. Duis dolor neque, aliquam et aliquet non, aliquam facilisis risus. Nulla ut massa eget urna mollis dictum nec eu nibh. Donec odio ipsum, luctus in sollicitudin nec, tempor sit amet libero. Duis eget leo ornare, gravida tellus et, suscipit tortor. Aliquam at felis et lacus sollicitudin placerat ut ut ex. Curabitur semper lobortis sapien, quis posuere ex.</p>
                <p>Ut imperdiet laoreet mi ut laoreet. Etiam vestibulum libero sed nunc luctus, sed eleifend quam fermentum. Aenean molestie vehicula lacus ac pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris ut ligula a tortor consequat commodo in bibendum justo. Vivamus viverra purus ac vehicula pretium. Nullam in tristique est, vitae dapibus lacus. Maecenas libero nisi, luctus et finibus in, mattis eu sapien. Sed faucibus odio molestie, cursus nibh quis, lobortis neque. Cras bibendum blandit metus in bibendum. Curabitur nulla mi, congue eu vehicula porttitor, sodales ultrices ex. Phasellus lobortis vulputate blandit. Suspendisse nec nisl nec sem mollis porttitor tempor pharetra magna. Integer commodo pharetra blandit. Morbi eget aliquam neque. Aliquam non massa gravida leo finibus tempus id vel nisl.</p>
            </div>            
        </Modal>
    )
}

export default IpsumLorem