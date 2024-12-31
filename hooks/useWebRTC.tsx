import { useEffect, useRef } from "react"

export const useWebRTC = (isHost: boolean) => {
    const peerConnection = useRef<RTCPeerConnection>(null)

    useEffect(() => {
        peerConnection.current = new RTCPeerConnection({
            iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
        })
        if (isHost) {
            navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
                stream.getTracks().forEach((track) => {
                    peerConnection.current?.addTrack(track, stream)
                })
            })
        }
    }, [isHost])

    return peerConnection.current

}