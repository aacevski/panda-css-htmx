import * as elements from "typed-html";
import { css } from "../../styled-system/css";

const Card = () => {
  return (
    <div class={css({ width: 312, height: 280, background: '#FFF', borderRadius: "md", display: 'flex', shadow: "md" })}>
      <h1 class={css(
        {
          color: "primary",
          fontSize: "md",
          fontWeight: "bold",
          margin: "auto",
        }
      )}>
        Having fun with <span class={css({ color: "#d76d77" })}>panda</span> + <span class={css({ color: "#3a1c71" })}>htmx</span>
      </h1>
    </div >
  )
}

export default Card;