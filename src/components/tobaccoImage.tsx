/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export interface ImageProps{
    src: string
}
const Image = ({src}: ImageProps) => {
    return (
        <div css = {css`
            width: 355px;
            heigth: 238px;
            margin: 0 auto;
            border: solid white
        `}>
            <img 
                src = {src} 
                css = {css`
                    width: 220px;
                    height: 220px;
                    display: block;
                    margin: 0 auto
                `}
            ></img>
        </div>
    )
}
export default Image