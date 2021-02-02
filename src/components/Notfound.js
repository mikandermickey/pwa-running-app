/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const styleHeadline = css`
    font-size: 4em;
`
const Notfound = () => {
    return (
        <div>
            <h2 css={styleHeadline}>Hov...</h2>
            <p>Har du mistet forbindelsen..? <br/>Denne side kan ikke vises med mindre du er online.</p>
            <p><small>Eller måske har du fundet en side, som slet ikke findes...</small></p>
            <p><a href="/">Klik her</a> for at komme tilbage til forsiden.</p>
        </div>
     );
}
 
export default Notfound;