/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const Distance = ({dis}) => {
    const style = css`
        margin-top: 3em;
    `;
    return ( 
        <div css={style}>
            <h1>{dis}</h1>
        </div>
     );
}
 
export default Distance;