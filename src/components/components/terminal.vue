<template>
  <div ref="terminal" class="shell">
    <div class="close" @click="close">
      <IconClose />
    </div>
    <div class="shell-content">
      <div class="shell-content-interactive">
        <div style="color: #8ac6e8"><p>~/home</p></div>
        <div>
          <p>
            <span style="color: #8ac6e8">$</span>
            <span ref="animatedCmd" style="color: #4e988b"></span>
          </p>
        </div>
        <div><p style="color: #df9147" ref="animatedTxt"></p></div>
      </div>
      <div class="shell-content-static" ref="stagger">
        <div>
          <p>+ Profile:</p>
        </div>
        <div>
          <p>&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Mark Cummins</p>
        </div>
        <div>
          <p>&nbsp;&nbsp;Location&nbsp;: Offaly, Ireland</p>
        </div>
        <div>
          <p>&nbsp;</p>
        </div>
        <div class="shell-content-interactive">
          <div style="color: #8ac6e8"><p>~/home</p></div>
          <div>
            <p>
              <span style="color: #8ac6e8">$</span>
            </p>
          </div>
          <div><p style="color: #df9147"></p></div>
          <div><Blinky /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Blinky from "@/components/components/blinking-cursor";

import IconClose from "@carbon/icons-vue/es/close--filled/16";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

export default {
  name: "component-terminal",

  components: {
    Blinky,
    IconClose,
  },

  setup() {
    const terminal = ref(null);
    const stagger = ref(null);

    const animatedCmd = ref(null);
    const animatedTxt = ref(null);

    onMounted(() => {
      gsap.registerPlugin(TextPlugin);
      const tl = gsap.timeline();

      tl.to(animatedCmd.value, {
        delay: 0,
        duration: 0.4,
        text: { value: " whoami", delimiter: "" },
        ease: "none",
      });

      tl.to(animatedTxt.value, {
        delay: 0,
        duration: 0.4,
        text: { value: "--all", delimiter: "" },
        ease: "none",
      });

      tl.to(stagger.value.children, {
        opacity: 1,
        stagger: 0.2,
      });

      tl.play();
    });

    const close = () => {
      gsap.to(terminal.value, {
        y: -40,
        opacity: 0,
        duration: 0.25,
      });
    };

    return {
      close,
      stagger,
      terminal,
      animatedCmd,
      animatedTxt,
    };
  },
};
</script>

<style scoped lang="scss">
.shell {
  color: rgb(var(--foreground));
  background-color: rgba(var(--foreground), .05);
  padding: 1rem 1.5rem;
  border-radius: 3px;
  text-align: left;
  position: relative;

  p {
    font-size: 0.8rem;
    margin: 0 auto 0.8rem auto;
    font-family: var(--font-mono);
    color: rgb(var(--foreground));
  }

  .shell-content {
    div.shell-content-interactive {
      display: flex;
      align-items: flex-start;
      > div {
        margin-right: 0.3rem;
      }
    }
    div.shell-content-static > div {
      opacity: 0;
    }
  }

  .close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out, scale 0.2s ease-in-out;
    color: rgb(var(--foreground));

    &:hover {
      opacity: 0.8;
      scale: 1.2;
    }
  }
}
</style>
