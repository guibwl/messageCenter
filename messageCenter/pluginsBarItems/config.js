import {Notice, Img} from '.';


export default function(sendMsgHandler) {
    
    return [
        {
            text: '图片',
            render: Img
        },
        {
            text: '通知',
            render: Notice
        },
        {
            text: '招呼',
            onClick: () => sendMsgHandler({
                type: 'SAY_HI',
                options: {
                    text: '你向对方打了个招呼'
                }
            })
        }
    ]
}
