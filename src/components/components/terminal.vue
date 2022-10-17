<template>
  <div ref="terminal" class="shell">
    <!-- Header -->
    <div class="shell-header">
      <div></div>
      <div>
        <strong><i>$bash</i></strong>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <!-- Body -->
    <div class="shell-body">
      <div style="color: #8ac6e8">
        <p>
          <span>~/home</span>
          <span class="t-l1">$</span>
          <span ref="animatedCmd" class="t-l2"></span>
          <span ref="animatedTxt" class="t-l3"></span>
        </p>
      </div>
      <div ref="gsapGrpA" class="gsap-grp-a">
        <div>
          <p>
            <span>~/portfolio</span>
            <span class="t-l1">$</span>
            <span class="t-l2">npm</span>
            <span class="t-l3">run init</span>
          </p>
        </div>
        <br />
        <div>
          <p class="t-comment">
            <span># type</span>
            <span class="t-l3">`npm build`</span>
            <span>and click</span>
            <span class="t-l3">↵</span>
            <span>enter</span>
          </p>
        </div>
        <div>
          <p>
            <span>~/portfolio</span>
            <span class="t-l1">$</span>
            <span class="t-l2" style="display: none" ref="cliProgressA"></span>
            <span class="t-l3" style="display: none" ref="cliProgressB"></span>
            <span ref="cliProgressC"><Blinky /></span>
          </p>
        </div>
      </div>
      <div ref="gsapGrpB" class="gsap-grp-b">
        <div>
          <p>
            <span class="tag-l2">DONE</span>
            <span class="t-l2"> Compiled successfully in 571ms</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Blinky from "@/components/components/blinking-cursor";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

export default {
  name: "component-terminal",

  components: {
    Blinky,
  },

  setup() {
    const terminal = ref(null);

    const gsapGrpA = ref(null);
    const gsapGrpB = ref(null);

    const animatedCmd = ref(null);
    const animatedTxt = ref(null);

    const cliProgressA = ref(null);
    const cliProgressB = ref(null);
    const cliProgressC = ref(null);
    const cliProgressEnter = ref(null);

    const tl = gsap.timeline();

    onMounted(() => {
      gsap.registerPlugin(TextPlugin);

      tl.to(animatedCmd.value, {
        delay: 1,
        duration: 0.4,
        text: { value: " cd", delimiter: "" },
        ease: "none",
      });

      tl.to(animatedTxt.value, {
        delay: 0,
        duration: 0.6,
        text: { value: "./portfolio", delimiter: "" },
        ease: "none",
      });

      tl.to(gsapGrpA.value.children, {
        y: 0,
        opacity: 1,
        stagger: 0.4,
        display: "block",
      });

      tl.to(cliProgressA.value, {
        delay: 1,
        display: "block",
        duration: 0.8,
        text: { value: "npm ", delimiter: "" },
      });

      tl.to(cliProgressB.value, {
        display: "block",
        duration: 1.2,
        text: { value: "run build ", delimiter: "" },
      });

      tl.set(cliProgressC.value, {
        display: "none",
      });

      tl.to(gsapGrpB.value.children, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
      });
    });


    return {
      terminal,

      gsapGrpA,
      gsapGrpB,

      cliProgressA,
      cliProgressB,
      cliProgressC,
      cliProgressEnter,
      animatedCmd,
      animatedTxt,
    };
  },
};
</script>

<style scoped lang="scss">
.shell {
  cursor: pointer;
  max-width: 32rem;
  text-align: left;
  border-radius: 3px;
  position: relative;
  padding: 1rem 1.5rem;
  color: rgb(var(--foreground));
  background-color: rgba(var(--background), 0.85);

  p {
    gap: 0.8rem;
    display: flex;
    align-items: center;
    margin: 0 auto 0.8rem auto;
    font-family: var(--font-mono);
    color: rgb(var(--foreground));
  }

  .tag-l1 {
    padding: 0 0.3rem;
    border-radius: 2px;
    color: rgb(var(--background));
  }
  .tag-l2 {
    padding: 0 0.3rem;
    border-radius: 2px;
    color: rgb(var(--background));
  }
  .tag-l3 {
    padding: 0 0.3rem;
    border-radius: 2px;
    color: rgb(var(--background));
  }

  .shell-header {
    display: grid;
    opacity: 0.4;
    align-items: center;
    margin-bottom: 0.8rem;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr 1fr;

    > div:nth-child(2) {
      color: #2e3748;
      text-align: center;
    }
    > div:nth-child(3) {
      display: flex;
      justify-content: flex-end;
      column-gap: 0.6rem;
      > div {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: #2e3748;
      }
    }
  }

  .shell-body {
    div.gsap-grp-a > div,
    div.gsap-grp-b > div {
      opacity: 0;
      transform: translateY(10px);
    }
  }
}

.theme-dark {
  .t-l1 {
    color: #8ac6e8;
  }
  .t-l2 {
    color: #3fb950;
  }
  .t-l3 {
    color: #ea4aaa;
  }
  .tag-l1 {
    background: #8ac6e8;
  }
  .tag-l2 {
    background: #3fb950;
  }
  .tag-l3 {
    background: #ea4aaa;
  }
  .t-comment {
    color: #8b949e;
  }
}

.theme-light {
  .t-l1 {
    color: #006ad5;
  }
  .t-l2 {
    color: #0e7a2c;
  }
  .t-l3 {
    color: #b132ff;
  }
  .tag-l1 {
    background: #006ad5;
  }
  .tag-l2 {
    background: #0e7a2c;
  }
  .tag-l3 {
    background: #b132ff;
  }
  .t-comment {
    color: #e16215;
  }
}
</style>
