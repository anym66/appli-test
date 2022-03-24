import React from 'react'
import {Video, AVPlaybackStatus} from 'expo-av'


const ItemVideo = (props) =>{

    const video = React.useRef(null)
    const [status, setStatus] = React.useState({})

    return(
        <Video
            ref={video}
            source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1' }}
            style={{ height: 250 }}
            controls={true}
            useNativeControls
            onPlaybackStatusUpdate={status => setStatus(() => status)}
            resizeMode = {Video.RESIZE_MODE_STRETCH}
        />
    )
}

export default ItemVideo