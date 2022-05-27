<template>
  <div class="board-d16-view-wrapper board-item-view-wrapper">
    <div class="board-item-name"><span>D16</span></div>
    <div class="board-link-wrapper">
      <div class="board-light"><span class="k-name">PWR</span><span class="k-item suc"></span></div>
      <div class="board-light"><span class="k-name">RUN</span><span class="k-item run-los"></span></div>
      <div class="board-light"><span class="k-name">LINK</span><span class="k-item" :class="light[2] ? 'suc' : 'run-link'"></span></div>
      <div class="board-light"><span class="k-name">STAT</span><span class="k-item" :class="light[3] ? 'war' : 'suc'"></span></div>
    </div>

    <div class="tx-rx-wrapper tx-rx-16-wrapper">
      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>Line</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>OSC</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i></i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i></i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>D21</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>D22</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>D23</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>D24</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>D25</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>D26</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>D27</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>D28</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>D29</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>D30</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>D31</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>D32</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>D33</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>D34</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>D35</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>D36</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { decimalToBinary } from "@/utils";

export default {
  name: "board-d16",
  props: ["data"],
  computed: {
    light() {
      return decimalToBinary(this.data.light_status);
    },
  },
};
</script>

<style lang="scss">
.board-d16-view-wrapper {
  .board-link-wrapper {
    left: 14px;
    top: 10px;
  }

  .tx-rx-16-wrapper {
    left: -30px;
    top: -6px;
  }
}
</style>
